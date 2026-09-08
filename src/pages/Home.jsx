import { ArrowRight, BadgeCheck, CalendarCheck2, CarFront, Clock3, MapPin, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CarCard from '../components/CarCard';
import SearchForm from '../components/SearchForm';
import SectionTitle from '../components/SectionTitle';
import { businessInfo } from '../config/business';
import { cars } from '../data/cars';
import { testimonials } from '../data/testimonials';

const features = [
  { title: 'Quality Vehicles', icon: ShieldCheck, text: 'Well-maintained, road-ready cars chosen for comfort and safety.' },
  { title: 'Flexible Rental Plans', icon: CalendarCheck2, text: 'Daily, weekly, and long-stay packages built around your schedule.' },
  { title: 'Fast Booking', icon: Clock3, text: 'Quick confirmations with a smooth and transparent reservation experience.' },
  { title: '24/7 Support', icon: BadgeCheck, text: 'Our team is always there to help with availability and trip planning.' },
  { title: 'Affordable Pricing', icon: Sparkles, text: 'Fair rates with no hidden surprises and reliable value for every itinerary.' },
  { title: 'Reliable Service', icon: CarFront, text: 'From airport pickup to business travel, we keep every journey effortless.' },
];

const categories = [
  { name: 'Economy', count: 'Compact & efficient' },
  { name: 'Sedan', count: 'Executive comfort' },
  { name: 'SUV', count: 'Spacious & versatile' },
  { name: 'Luxury', count: 'Premium styling' },
  { name: 'Executive', count: 'Professional standard' },
];

function Home() {
  const featuredCars = cars.filter((car) => car.featured).slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Premium mobility solutions</span>
            <h1>Drive in style with a premium rental experience.</h1>
            <p>{businessInfo.tagline}</p>
            <div className="cta-row">
              <Button to="/cars">Browse Cars</Button>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent('Hello, I would like to book a car.')}`} target="_blank" rel="noreferrer" className="btn btn-secondary">
                Book on WhatsApp
              </a>
            </div>
            <div className="trust-row">
              <span><Star size={16} /> 4.9 rating</span>
              <span><MapPin size={16} /> Available 24/7</span>
            </div>
          </div>

          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" alt="Luxury rental car" />
          </div>
        </div>

        <div className="container search-wrap">
          <SearchForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured fleet"
            title="Popular cars for every kind of journey"
            description="Choose from a curated selection of dependable and stylish vehicles designed for everyday convenience and special occasions."
          />
          <div className="cars-grid three-col">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle
            eyebrow="Why choose us"
            title="A rental partner built around trust and comfort"
            description="We blend premium service, clear pricing, and handpicked vehicles to deliver a seamless booking experience."
          />
          <div className="feature-grid">
            {features.map(({ title, text, icon: Icon }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Simple process"
            title="How it works"
            description="Renting a vehicle should be effortless — here is how it works."
          />
          <div className="steps-grid">
            <div className="step-item">
              <span>01</span>
              <h3>Choose Your Car</h3>
              <p>Browse luxury, SUV, executive, and economy options that match your trip and style.</p>
            </div>
            <div className="step-item">
              <span>02</span>
              <h3>Select Your Dates</h3>
              <p>Pick your pickup and return dates and confirm the rental duration that works for you.</p>
            </div>
            <div className="step-item">
              <span>03</span>
              <h3>Book and Drive</h3>
              <p>Complete your reservation over WhatsApp or by phone and get ready to hit the road.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle
            eyebrow="Fleet categories"
            title="Choose the vehicle that fits your plans"
          />
          <div className="category-grid">
            {categories.map((item) => (
              <div key={item.name} className="category-card">
                <CarFront size={28} />
                <h3>{item.name}</h3>
                <p>{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Customer feedback"
            title="Trusted by travelers and businesses alike"
          />
          <div className="testimonial-grid">
            {testimonials.map((person) => (
              <div key={person.name} className="testimonial-card">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>“{person.quote}”</p>
                <div className="author-box">
                  <div className="author-avatar">{person.name.charAt(0)}</div>
                  <div>
                    <strong>{person.name}</strong>
                    <span>{person.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-box-wrap">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="eyebrow">Need a car today?</span>
              <h2>Reserve a premium ride in minutes.</h2>
            </div>
            <div className="cta-box-actions">
              <a href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary">
                WhatsApp Us
              </a>
              <a href={`tel:${businessInfo.phone}`} className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
