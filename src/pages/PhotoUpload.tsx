import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Camera, Instagram, ArrowLeft, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [caption, setCaption] = useState('');
  const [processedImage, setProcessedImage] = useState<string>('');
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const defaultCaption = "Amazing adventure with @getupandgo.atx! 🚣‍♀️ Austin's best kayaking experience! #GetUpAndGoKayaking #AustinKayaking #WaterAdventure #KeepAustinWeird #LakeLife #PaddleOn #Conservation #EcoTourism #Texas #ATX #EnjoyNature";

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
        setProcessedImage(''); // Reset processed image
      };
      reader.readAsDataURL(file);
      setCaption(defaultCaption);
    }
  };

  const addKayakingFrame = () => {
    if (!imagePreview || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Set canvas size
      canvas.width = 800;
      canvas.height = 800;

      // Create gradient background
      const gradient = ctx.createRadialGradient(400, 400, 0, 400, 400, 400);
      gradient.addColorStop(0, '#40bfab');
      gradient.addColorStop(1, '#77a6b8');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 800);

      // Draw user image in center (circular crop)
      ctx.save();
      ctx.beginPath();
      ctx.arc(400, 400, 250, 0, 2 * Math.PI);
      ctx.clip();
      
      // Calculate aspect ratio and draw image
      const aspectRatio = img.width / img.height;
      let drawWidth, drawHeight;
      if (aspectRatio > 1) {
        drawHeight = 500;
        drawWidth = drawHeight * aspectRatio;
      } else {
        drawWidth = 500;
        drawHeight = drawWidth / aspectRatio;
      }
      
      ctx.drawImage(img, 400 - drawWidth/2, 400 - drawHeight/2, drawWidth, drawHeight);
      ctx.restore();

      // Add circular border
      ctx.beginPath();
      ctx.arc(400, 400, 250, 0, 2 * Math.PI);
      ctx.strokeStyle = '#f6ed98';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Add text at bottom
      ctx.fillStyle = '#f6ed98';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('GET UP AND GO KAYAKING', 400, 720);

      // Add smaller text
      ctx.font = 'bold 24px Arial';
      ctx.fillText('AUSTIN\'S PREMIER WATER ADVENTURE', 400, 760);

      // Add duck emojis instead of paddles
      ctx.font = '40px Arial';
      ctx.fillText('🦆', 200, 720);
      ctx.fillText('🦆', 600, 720);

      // Add #enjoynature on the side
      ctx.save();
      ctx.translate(50, 400);
      ctx.rotate(-Math.PI / 2);
      ctx.font = 'bold 28px Arial';
      ctx.fillStyle = '#f6ed98';
      ctx.textAlign = 'center';
      ctx.fillText('#ENJOYNATURE', 0, 0);
      ctx.restore();

      // Add #enjoynature on the other side
      ctx.save();
      ctx.translate(750, 400);
      ctx.rotate(Math.PI / 2);
      ctx.font = 'bold 28px Arial';
      ctx.fillStyle = '#f6ed98';
      ctx.textAlign = 'center';
      ctx.fillText('#ENJOYNATURE', 0, 0);
      ctx.restore();

      // Convert to blob and set as processed image
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setProcessedImage(url);
        }
      });
    };
    
    img.src = imagePreview;
  };

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption);
      alert('Caption copied to clipboard!');
    } catch (err) {
      console.log('Failed to copy caption');
    }
  };

  const handleShareToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  const downloadProcessedImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.download = 'kayaking-adventure.png';
    link.href = processedImage;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-water-deep via-water-primary to-water-light py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-4 bg-white/80 hover:bg-white border-water-primary text-water-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tips
          </Button>
          <h1 className="text-3xl font-bold text-white mb-2">Share Your Adventure!</h1>
          <p className="text-sunshine">Upload your photo and get an Instagram-ready caption</p>
        </div>

        <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-water-light">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-forest">
              <Camera className="w-5 h-5 text-water-primary" />
              Instagram Post Creator
            </CardTitle>
            <CardDescription className="text-forest">
              Upload your photo and we'll provide a caption ready for Instagram!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-water-primary rounded-lg p-8 text-center">
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-water-primary mx-auto mb-4" />
                <p className="text-forest font-medium mb-2">Click to upload your adventure photo</p>
                <p className="text-sm text-gray-600">Supports JPG, PNG, and other image formats</p>
              </label>
            </div>

            {/* Don't have a picture section */}
            {imagePreview && !processedImage && (
              <div className="bg-sunshine/20 p-4 rounded-lg border border-sunshine">
                <p className="text-forest font-medium mb-3">
                  📸 <strong>Don't have a kayaking picture?</strong><br/>
                  Transform any picture into a kayaking experience!
                </p>
                <Button
                  onClick={addKayakingFrame}
                  className="w-full bg-coral hover:bg-coral/80 text-white"
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  Add Kayaking Frame & Logo
                </Button>
              </div>
            )}

            {/* Image Preview */}
            {imagePreview && (
              <div className="space-y-4">
                <div className="text-center">
                  <img
                    src={processedImage || imagePreview}
                    alt="Preview"
                    className="max-w-full h-64 object-cover rounded-lg mx-auto border border-water-primary"
                  />
                  {processedImage && (
                    <Button
                      onClick={downloadProcessedImage}
                      variant="outline"
                      className="mt-3 border-water-primary text-water-primary hover:bg-water-primary hover:text-white"
                    >
                      Download Framed Image
                    </Button>
                  )}
                </div>

                {/* Caption */}
                <div className="space-y-3">
                  <label className="block text-forest font-medium">Instagram Caption:</label>
                  <Textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={6}
                    className="border-water-primary focus:ring-water-primary"
                    placeholder="Your caption will appear here..."
                  />
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={handleCopyCaption}
                      variant="outline"
                      className="flex-1 border-water-primary text-water-primary hover:bg-water-primary hover:text-white"
                    >
                      Copy Caption
                    </Button>
                    <Button
                      onClick={handleShareToInstagram}
                      className="flex-1 bg-coral hover:bg-coral/80 text-white"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Open Instagram
                    </Button>
                  </div>
                </div>

                <div className="bg-sunshine/20 p-4 rounded-lg border border-sunshine">
                  <p className="text-forest text-sm font-medium">
                    📱 <strong>How to post:</strong><br/>
                    1. Copy the caption above<br/>
                    2. {processedImage ? 'Download the framed image or use your original' : 'Save your image'}<br/>
                    3. Click "Open Instagram" to go to Instagram<br/>
                    4. Create a new post with your photo<br/>
                    5. Paste the caption and share your adventure!
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Hidden canvas for image processing */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default PhotoUpload;
