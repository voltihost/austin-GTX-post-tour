
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { socialMediaIcons, companyLogos, emojis } from '@/config/assets';

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
      emoji: emojis.map
    },
    {
      name: 'Instagram',
      url: 'http://instagram.com/getupandgo.atx/',
      icon: Instagram
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/GetUpAndGoATX/_created/',
      icon: null,
      logo: socialMediaIcons.pinterest
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@getupandgoatx',
      icon: null,
      logo: socialMediaIcons.tiktok
    },
    {
      name: 'X (Twitter)',
      url: 'http://x.com/getupandgoatx',
      icon: null,
      logo: socialMediaIcons.x
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/get-up-and-go-kayaking-austin',
      icon: null,
      logo: socialMediaIcons.yelp
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@GetUpAndGoATX',
      icon: Youtube
    }
  ];

  return (
    <div className="bg-gradient-to-r from-water-deep to-water-primary">
      {/* Social Media Icons - Clean Design */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex justify-center items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-10 h-10 bg-white hover:bg-white/90 transition-all rounded-full flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
              >
                {social.icon ? (
                  <social.icon className="w-5 h-5 text-water-deep" />
                ) : social.logo ? (
                  <img 
                    src={social.logo} 
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg">
                    {social.emoji}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile: 2-Column Vertical Layout */}
          <div className="md:hidden grid grid-cols-2 gap-3 max-w-xs mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white hover:bg-white/90 transition-all rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {social.icon ? (
                    <social.icon className="w-4 h-4 text-water-deep" />
                  ) : social.logo ? (
                    <img 
                      src={social.logo} 
                      alt={social.name}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm">
                      {social.emoji}
                    </span>
                  )}
                </div>
                <span className="text-water-deep text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Voltihost Footer */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center items-center">
            <img 
              src={companyLogos.voltihost}
              alt="Powered by Voltihost" 
              className="h-24 w-auto" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
