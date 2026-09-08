import { Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Phone, Twitter, Youtube } from 'lucide-react';
import { businessInfo } from '../config/business';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

function Contact() {
  return (
    <div className="page-shell">
      <section className="page-hero compact-hero">
        <div className="container">
          <span className="eyebrow">About & contact</span>
          <h1>We make premium driving effortless.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="about-panel">
            <SectionTitle
              eyebrow="Our story"
              title="Built for convenient, premium mobility"
              description="Velora Motors helps professionals, tourists, and families enjoy a smoother way to move around with reliable, stylish vehicles and a customer-first rental process."
            />

            <div className="mini-grid">
              <div>
                <h3>Mission</h3>
                <p>To deliver dependable, premium transportation with transparent pricing and exceptional service across every trip.</p>
              </div>
              <div>
                <h3>Service area</h3>
                <p>We provide rental support across Lagos, Ikeja, Lekki, Victoria Island, and major airports with flexible delivery options.</p>
              </div>
              <div>
                <h3>Why choose us</h3>
                <p>From business travel to weekend escapes, our team ensures smooth booking, clean vehicles, and outstanding customer care.</p>
              </div>
              <div>
                <h3>Customer experience</h3>
                <p>We prioritize convenience, clarity, and hospitality at every step so customers can focus on their journey.</p>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <h3>Contact information</h3>
            <ul className="contact-list vertical-contact">
              <li><a href={`tel:${businessInfo.phone}`}><Phone size={16} /> {businessInfo.phone}</a></li>
              <li><a href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp: {businessInfo.whatsapp}</a></li>
              <li><a href={`mailto:${businessInfo.email}`}><Mail size={16} /> {businessInfo.email}</a></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noreferrer"><MapPin size={16} /> {businessInfo.address}</a></li>
              <li><span><Clock3 size={16} /> {businessInfo.businessHours}</span></li>
            </ul>

            <div className="social-row large-row">
              {Object.entries(businessInfo.socials).map(([key, href]) => {
                if (!href) return null;
                const Icon = socialIcons[key] || MessageCircle;
                return (
                  <a key={key} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={key}>
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container contact-form-wrap">
          <div className="form-side">
            <SectionTitle
              eyebrow="Get in touch"
              title="Send us a message"
              description="Tell us about your travel plans, preferred rental dates, or any special arrangements you need."
            />
            <ContactForm />
          </div>
          <div className="map-side">
            <div className="map-placeholder">
              <MapPin size={32} />
              <span>Business Location</span>
              <small>{businessInfo.address}</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
