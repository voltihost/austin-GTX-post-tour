
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/getupandgoatx/',
      icon: Facebook
    },
    {
      name: 'Google Maps',
      url: 'https://www.google.com/maps/place/Get+Up+And+Go+Kayaking+-+ATX/@30.2512702,-97.7358398,883m/data=!3m1!1e3!4m6!3m5!1s0x8644b53e68d790c5:0x6d157737f8345017!8m2!3d30.2479063!4d-97.7240928!16s%2Fg%2F11y51wb5tj?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D',
      icon: null,
      emoji: '🗺️'
    },
    {
      name: 'Instagram',
      url: 'http://instagram.com/getupandgo.atx/',
      icon: Instagram
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/get-up-and-go-kayaking/',
      icon: Linkedin
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/GetUpAndGoATX/_created/',
      icon: null,
      emoji: '📌'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@getupandgoatx',
      icon: null,
      emoji: '🎵'
    },
    {
      name: 'X (Twitter)',
      url: 'http://x.com/getupandgoatx',
      icon: null,
      emoji: '𝕏'
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/get-up-and-go-kayaking-austin',
      icon: null,
      emoji: '⭐'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@GetUpAndGoATX',
      icon: Youtube
    }
  ];

  return (
    <div className="bg-gradient-to-r from-water-deep to-water-primary">
      {/* Social Media Icons with Gradient Backgrounds */}
      <div className="py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-10 h-10 bg-gradient-to-r from-water-primary to-sunshine hover:from-sunshine hover:to-water-primary transition-all rounded-lg flex items-center justify-center group border border-water-light shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {social.icon ? (
                  <social.icon className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-white text-base">
                    {social.emoji}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Voltihost Footer - Reduced height */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/f8374979-d9f6-4165-bc44-d3ff9357ea32.png" 
              alt="Powered by Voltihost" 
              className="h-24 w-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
