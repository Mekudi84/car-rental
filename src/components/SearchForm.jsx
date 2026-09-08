import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';

function SearchForm() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    location: 'Lagos Airport',
    pickupDate: '',
    returnDate: '',
    category: 'All',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.location) params.set('location', form.location);
    if (form.pickupDate) params.set('pickupDate', form.pickupDate);
    if (form.returnDate) params.set('returnDate', form.returnDate);
    if (form.category && form.category !== 'All') params.set('category', form.category);

    navigate(`/cars?${params.toString()}`);
  };

  return (
    <form className="booking-search" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="location">Pickup location</label>
        <input
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Lagos Airport"
        />
      </div>
      <div className="field">
        <label htmlFor="pickupDate">Pickup date</label>
        <input id="pickupDate" name="pickupDate" type="date" min={today} value={form.pickupDate} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="returnDate">Return date</label>
        <input id="returnDate" name="returnDate" type="date" min={form.pickupDate || today} value={form.returnDate} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="category">Car category</label>
        <select id="category" name="category" value={form.category} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Economy">Economy</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
          <option value="Executive">Executive</option>
        </select>
      </div>
      <button type="submit" className="search-btn">
        <Search size={16} /> Search
      </button>
    </form>
  );
}

export default SearchForm;
