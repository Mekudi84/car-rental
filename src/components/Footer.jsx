import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageCircle, Youtube, Music2, Twitter } from 'lucide-react';
import { businessInfo } from '../config/business';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <div className="brand-mark"><span>V</span></div>
            <div>
              <span className="brand-name">{businessInfo.name}</span>
            </div>
          </div>
          <p className="footer-copy">{businessInfo.description}</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/contact">About / Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links contact-list">
            <li><a href={`tel:${businessInfo.phone}`}><Phone size={15} /> {businessInfo.phone}</a></li>
            <li><a href={`mailto:${businessInfo.email}`}><Mail size={15} /> {businessInfo.email}</a></li>
            <li><a href="https://maps.google.com" target="_blank" rel="noreferrer"><MapPin size={15} /> {businessInfo.address}</a></li>
          </ul>
        </div>

        <div>
          <h4>Follow us</h4>
          <div className="social-row">
            {Object.entries(businessInfo.socials).map(([key, href]) => {
              if (!href) return null;
              const Icon = socialIcons[key] || MessageCircle;
              return (
                <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={key} className="social-link">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <a className="whatsapp-inline" href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp chat
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
