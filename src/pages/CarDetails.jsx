import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarRange, CheckCircle2, Fuel, Gauge, MapPin, Route, Snowflake, Users, CarFront, BriefcaseBusiness } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import ImageGallery from '../components/ImageGallery';
import { cars } from '../data/cars';

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((vehicle) => vehicle.id === id);

  const specs = useMemo(
    () => [
      { label: 'Year', value: car?.year ?? 'N/A' },
      { label: 'Seats', value: `${car?.seats ?? 0} seats` },
      { label: 'Doors', value: `${car?.doors ?? 0} doors` },
      { label: 'Transmission', value: car?.transmission ?? 'N/A' },
      { label: 'Fuel', value: car?.fuel ?? 'N/A' },
      { label: 'Air conditioning', value: car?.airConditioning ? 'Yes' : 'No' },
      { label: 'Luggage capacity', value: `${car?.luggage ?? 0} bags` },
      { label: 'Mileage policy', value: 'Unlimited mileage within package' },
    ],
    [car],
  );

  if (!car) {
    return (
      <section className="section">
        <div className="container"><h2>Vehicle not found.</h2></div>
      </section>
    );
  }

  return (
    <div className="page-shell">
      <section className="page-hero compact-hero">
        <div className="container detail-header">
          <div>
            <span className="eyebrow">Vehicle details</span>
            <h1>{car.name}</h1>
          </div>
          <div className="detail-price">₦{car.pricePerDay.toLocaleString()}<span>/ day</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <div className="detail-content">
            <img src={car.image} alt={car.name} className="detail-main-image" />
            <ImageGallery images={car.gallery} alt={car.name} />

            <div className="detail-copy-box">
              <div className="detail-meta-row">
                <span><CarFront size={15} /> {car.category}</span>
                <span><MapPin size={15} /> Available in Lagos</span>
                <span className={`status-badge ${car.available ? 'available' : 'unavailable'}`}>
                  {car.available ? 'Available now' : 'Booked'}
                </span>
              </div>

              <h2>Vehicle description</h2>
              <p>{car.description}</p>

              <div className="spec-grid">
                {specs.map((spec) => (
                  <div key={spec.label} className="spec-item">
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>

              <div className="feature-block">
                <h3>Included features</h3>
                <ul>
                  {car.features.map((feature) => (
                    <li key={feature}><CheckCircle2 size={16} /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <BookingForm car={car} />
        </div>
      </section>
    </div>
  );
}

export default CarDetails;
