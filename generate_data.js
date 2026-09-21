const fs = require('fs');

const destinations = {
  paris: { lat: 48.8566, lng: 2.3522, curr: 'EUR', sym: '€', rate: 90.50, name: 'Paris' },
  tokyo: { lat: 35.6762, lng: 139.6503, curr: 'JPY', sym: '¥', rate: 0.55, name: 'Tokyo' },
  newyork: { lat: 40.7128, lng: -74.0060, curr: 'USD', sym: '$', rate: 83.50, name: 'New York' },
  sydney: { lat: -33.8688, lng: 151.2093, curr: 'AUD', sym: 'A$', rate: 54.20, name: 'Sydney' },
  capetown: { lat: -33.9249, lng: 18.4241, curr: 'ZAR', sym: 'R', rate: 4.50, name: 'Cape Town' },
  bali: { lat: -8.4095, lng: 115.1889, curr: 'IDR', sym: 'Rp', rate: 0.005, name: 'Bali' },
  rome: { lat: 41.9028, lng: 12.4964, curr: 'EUR', sym: '€', rate: 90.50, name: 'Rome' },
  dubai: { lat: 25.2048, lng: 55.2708, curr: 'AED', sym: 'د.إ', rate: 22.70, name: 'Dubai' },
  singapore: { lat: 1.3521, lng: 103.8198, curr: 'SGD', sym: 'S$', rate: 61.30, name: 'Singapore' },
  london: { lat: 51.5074, lng: -0.1278, curr: 'GBP', sym: '£', rate: 105.20, name: 'London' },
  maldives: { lat: 3.2028, lng: 73.2207, curr: 'MVR', sym: 'Rf', rate: 5.40, name: 'Maldives' },
  switzerland: { lat: 47.3769, lng: 8.5417, curr: 'CHF', sym: 'CHF', rate: 92.10, name: 'Switzerland' }
};

const hotelPrefixes = ['The Ritz', 'Grand', 'Four Seasons', 'St. Regis', 'Waldorf Astoria', 'Park Hyatt', 'Rosewood', 'Aman', 'Bvlgari', 'Fairmont', 'Shangri-La', 'InterContinental', 'Kempinski', 'Banyan Tree', 'Mandarin Oriental'];
const restaurantPrefixes = ['Le', 'The', 'Bistro', 'Brasserie', 'Trattoria', 'Cafe', 'Tavern', 'Osteria', 'Ristorante', 'Izakaya', 'Steakhouse', 'Grill', 'Kitchen', 'Bar', 'Lounge'];
const restaurantTypes = ['Fine Dining', 'Casual', 'Street Food', 'Vegan', 'Halal', 'Family Style', 'Seafood', 'Steakhouse', 'Local Cuisine'];
const placeTypes = ['Museum', 'Park', 'Monument', 'Tower', 'Square', 'Bridge', 'Market', 'Palace', 'Temple', 'Gallery', 'Viewpoint', 'Beach', 'Mountain', 'Lake', 'Garden'];

const globalData = {};

Object.keys(destinations).forEach(key => {
  const dest = destinations[key];
  const data = {
    heroImg: `https://picsum.photos/seed/hero_${key}/800/600`,
    centerLat: dest.lat, centerLng: dest.lng,
    currency: { from: dest.curr, symbol: dest.sym, rate: dest.rate, tip: 'Check local customs for tipping.' },
    weather: [
      { day: 'Mon', temp: '22°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' },
      { day: 'Tue', temp: '24°C', icon: 'cloudy', desc: 'fa-cloud', state: 'cloudy' },
      { day: 'Wed', temp: '19°C', icon: 'rainy', desc: 'fa-cloud-showers-heavy', state: 'rainy' },
      { day: 'Thu', temp: '21°C', icon: 'cloudy', desc: 'fa-cloud-sun', state: 'cloudy' },
      { day: 'Fri', temp: '25°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' }
    ],
    packing: ['Comfortable Walking Shoes', 'Light Jacket', 'Power Bank', 'Universal Adapter', 'Travel Camera'],
    events: `Upcoming events in ${dest.name}: Local Festival | City Marathon | Food Tasting Week`,
    etiquette: 'Respect local customs. Keep your voice down in public transport.',
    flightTrend: { status: 'Stable', desc: 'Prices are stable for these dates.', icon: 'fa-arrow-right' },
    itinerary: [
      {
        dayLabel: 'Day 1: Arrival & City Highlights',
        subtitle: `Kick off your ${dest.name} adventure with iconic sights.`,
        totalTime: '6 hrs', estCost: '50',
        activities: []
      }
    ],
    hotels: [],
    restaurants: [],
    places: []
  };

  // Generate 15 Hotels
  for (let i = 0; i < 15; i++) {
    const lat = dest.lat + (Math.random() - 0.5) * 0.06;
    const lng = dest.lng + (Math.random() - 0.5) * 0.06;
    data.hotels.push({
      name: `${hotelPrefixes[i]} ${dest.name}`,
      price: (10000 + Math.floor(Math.random() * 40000)).toString(),
      rating: (4.0 + Math.random()).toFixed(1),
      lat: lat, lng: lng,
      img: `https://picsum.photos/seed/hotel_${key}_${i}/800/600`,
      distance: `${(Math.random() * 5).toFixed(1)} km to center`,
      desc: `Luxurious stay located in the heart of ${dest.name}. Features premium amenities and world-class service.`,
      checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Deluxe, Suite, Premium',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Valet'],
      gallery: [
        `https://picsum.photos/seed/hotel_${key}_${i}_ext/800/600`,
        `https://picsum.photos/seed/hotel_${key}_${i}_bed/800/600`,
        `https://picsum.photos/seed/hotel_${key}_${i}_bath/800/600`
      ]
    });
  }

  // Generate 15 Restaurants
  for (let i = 0; i < 15; i++) {
    const lat = dest.lat + (Math.random() - 0.5) * 0.06;
    const lng = dest.lng + (Math.random() - 0.5) * 0.06;
    const type = restaurantTypes[Math.floor(Math.random() * restaurantTypes.length)];
    data.restaurants.push({
      name: `${restaurantPrefixes[i]} ${dest.name} ${type.split(' ')[0]}`,
      type: type,
      lat: lat, lng: lng,
      img: `https://picsum.photos/seed/rest_${key}_${i}/800/600`,
      locText: 'City Center', travel: '10 min walk', timing: '12:00 PM - 10:30 PM',
      cost: (2000 + Math.floor(Math.random() * 10000)).toString(),
      tags: [type, 'Popular'],
      menu: [
        { name: `Signature ${dest.name} Dish`, desc: 'Chef’s special with local ingredients', price: '$45', tags: [] },
        { name: 'Classic Dessert', desc: 'Rich and flavorful', price: '$15', tags: ['Vegetarian'] }
      ],
      reviews: `"Absolutely fantastic experience." - FoodGuide`
    });
  }

  // Generate 15 Places
  for (let i = 0; i < 15; i++) {
    const lat = dest.lat + (Math.random() - 0.5) * 0.06;
    const lng = dest.lng + (Math.random() - 0.5) * 0.06;
    const type = placeTypes[Math.floor(Math.random() * placeTypes.length)];
    data.places.push({
      name: `${dest.name} National ${type}`,
      img: `https://picsum.photos/seed/place_${key}_${i}/800/600`,
      desc: `A highly recommended ${type.toLowerCase()} providing unique insights into ${dest.name}'s culture and beauty.`,
      fee: (500 + Math.floor(Math.random() * 3000)).toString(),
      loc: 'Downtown', lat: lat, lng: lng,
      crowd: Math.random() > 0.5 ? 'high' : 'medium',
      tour: '10:00 AM'
    });
  }
  
  // Populate day 1 itinerary with 2 places
  data.itinerary[0].activities.push(
    { time: '10:00 AM', place: data.places[0].name, desc: data.places[0].desc, duration: '2 hrs', dist: '1 km', transport: 'Walk', cost: (data.places[0].fee/100).toString(), icon: 'fa-landmark', img: data.places[0].img, lat: data.places[0].lat, lng: data.places[0].lng },
    { time: '01:00 PM', place: data.restaurants[0].name, desc: 'Lunch at local favorite.', duration: '1 hr', dist: '0.5 km', transport: 'Walk', cost: (data.restaurants[0].cost/100).toString(), icon: 'fa-utensils', img: data.restaurants[0].img, lat: data.restaurants[0].lat, lng: data.restaurants[0].lng }
  );

  globalData[key] = data;
});

// Output the stringified object so we can inject it
fs.writeFileSync('generated_data.json', JSON.stringify(globalData, null, 2));
console.log('Data generation complete!');
