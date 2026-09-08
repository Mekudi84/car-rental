import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarCard from '../components/CarCard';
import CarFilters from '../components/CarFilters';
import SectionTitle from '../components/SectionTitle';
import { cars } from '../data/cars';

function Cars() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(200000);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) setActiveCategory(categoryParam);
  }, [searchParams]);

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (activeCategory !== 'All') {
      result = result.filter((car) => car.category === activeCategory);
    }

    result = result.filter((car) => car.pricePerDay <= priceRange);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  return (
    <div className="page-shell">
      <section className="page-hero compact-hero">
        <div className="container">
          <span className="eyebrow">Explore our fleet</span>
          <h1>Find the right car for every journey</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CarFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {filteredCars.length === 0 ? (
            <div className="empty-state">
              <SectionTitle
                eyebrow="No matches"
                title="No vehicles match your current filters"
                description="Try adjusting the category or price range to see more available cars."
              />
            </div>
          ) : (
            <div className="cars-grid three-col">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cars;
