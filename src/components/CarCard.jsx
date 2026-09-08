import { ArrowRight, Check, Gauge, Fuel, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../config/business';

function CarCard({ car }) {
  return (
    <article className="car-card">
      <div className="car-card-image-wrap">
        <img src={car.image} alt={car.name} loading="lazy" />
        <span className={`status-badge ${car.available ? 'available' : 'unavailable'}`}>
          {car.available ? 'Available' : 'Booked'}
        </span>
      </div>

      <div className="car-card-body">
        <div className="car-card-header">
          <div>
            <h3>{car.name}</h3>
            <span>{car.year} • {car.category}</span>
          </div>
          <p className="price-tag">₦{car.pricePerDay.toLocaleString()}<span>/day</span></p>
        </div>

        <div className="spec-list">
          <span><Users size={14} /> {car.seats} seats</span>
          <span><Zap size={14} /> {car.transmission}</span>
          <span><Fuel size={14} /> {car.fuel}</span>
          <span><Gauge size={14} /> AC</span>
        </div>

        <div className="card-actions">
          <Link to={`/cars/${car.id}`} className="link-btn">
            View Details <ArrowRight size={16} />
          </Link>
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book ${car.name}. Please confirm availability.`)}`}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <Check size={16} /> Book now
          </a>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
