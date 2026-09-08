import { useMemo, useState } from 'react';
import { CalendarRange, CarFront, MessageCircle } from 'lucide-react';
import { businessInfo } from '../config/business';

function BookingForm({ car }) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: 'Lagos Airport',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const rentalDays = useMemo(() => {
    if (!form.pickupDate || !form.returnDate) return 0;
    const start = new Date(form.pickupDate);
    const end = new Date(form.returnDate);
    if (end < start) return 0;
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff || 1;
  }, [form.pickupDate, form.returnDate]);

  const total = rentalDays * car.pricePerDay;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    if (!form.pickupDate) nextErrors.pickupDate = 'Pickup date is required';
    if (!form.returnDate) nextErrors.returnDate = 'Return date is required';
    if (form.returnDate && form.pickupDate && new Date(form.returnDate) < new Date(form.pickupDate)) {
      nextErrors.returnDate = 'Return date cannot be before pickup date';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const message = [
      'Hello, I would like to book a vehicle.',
      '',
      `Vehicle: ${car.name}`,
      `Pickup Location: ${form.pickupLocation || 'Not specified'}`,
      `Pickup Date: ${form.pickupDate}`,
      `Return Date: ${form.returnDate}`,
      `Rental Duration: ${rentalDays} day${rentalDays === 1 ? '' : 's'}`,
      `Price Per Day: ₦${car.pricePerDay.toLocaleString()}`,
      `Estimated Total: ₦${total.toLocaleString()}`,
      '',
      `Customer Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Pickup Time: ${form.pickupTime || 'Not specified'}`,
      '',
      `Message: ${form.message || 'I would like to confirm my reservation. Please confirm availability.'}`,
      '',
      'Please confirm availability. Thank you.',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="booking-panel">
      <div className="booking-head">
        <div>
          <span className="eyebrow">Reserve today</span>
          <h3>Booking details</h3>
        </div>
        <div className="booking-price">
          <strong>₦{car.pricePerDay.toLocaleString()}</strong>
          <span>/ day</span>
        </div>
      </div>

      <div className="booking-form-grid">
        <div className="field">
          <label htmlFor="name">Customer name</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" required value={form.phone} onChange={handleChange} />
          {errors.phone && <small>{errors.phone}</small>}
        </div>
        <div className="field full-width">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div className="field full-width">
          <label htmlFor="pickupLocation">Pickup location</label>
          <input id="pickupLocation" name="pickupLocation" value={form.pickupLocation} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="pickupDate">Pickup date</label>
          <input id="pickupDate" type="date" name="pickupDate" min={today} required value={form.pickupDate} onChange={handleChange} />
          {errors.pickupDate && <small>{errors.pickupDate}</small>}
        </div>
        <div className="field">
          <label htmlFor="returnDate">Return date</label>
          <input id="returnDate" type="date" name="returnDate" min={form.pickupDate || today} required value={form.returnDate} onChange={handleChange} />
          {errors.returnDate && <small>{errors.returnDate}</small>}
        </div>
        <div className="field full-width">
          <label htmlFor="pickupTime">Pickup time</label>
          <input id="pickupTime" name="pickupTime" type="time" value={form.pickupTime} onChange={handleChange} />
        </div>
        <div className="field full-width">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us if you need airport pickup or special arrangements." />
        </div>
      </div>

      <div className="booking-summary">
        <div><span>Rental days</span><strong>{rentalDays || 0}</strong></div>
        <div><span>Price per day</span><strong>₦{car.pricePerDay.toLocaleString()}</strong></div>
        <div className="total-row"><span>Estimated total</span><strong>₦{total.toLocaleString()}</strong></div>
      </div>

      <button type="button" className="cta-btn whatsapp-btn" onClick={handleWhatsApp}>
        <MessageCircle size={18} /> Book via WhatsApp
      </button>

      <div className="booking-foot">
        <span><CalendarRange size={16} /> Flexible rental plans</span>
        <span><CarFront size={16} /> Instant confirmation</span>
      </div>
    </aside>
  );
}

export default BookingForm;
