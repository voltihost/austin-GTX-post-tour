
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Camera, Instagram, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const defaultCaption = "Amazing adventure with @getupandgo.atx! 🚣‍♀️ Austin's best kayaking experience! #GetUpAndGoKayaking #AustinKayaking #WaterAdventure #KeepAustinWeird #LakeLife #PaddleOn #Conservation #EcoTourism #Texas #ATX";

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setCaption(defaultCaption);
    }
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
    // Open Instagram in a new tab - users will need to manually post
    window.open('https://www.instagram.com/', '_blank');
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
              Upload your kayaking photo and we'll provide a caption ready for Instagram!
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

            {/* Image Preview */}
            {imagePreview && (
              <div className="space-y-4">
                <div className="text-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full h-64 object-cover rounded-lg mx-auto border border-water-primary"
                  />
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
                    2. Click "Open Instagram" to go to Instagram<br/>
                    3. Create a new post with your photo<br/>
                    4. Paste the caption and share your adventure!
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhotoUpload;
