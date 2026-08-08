// dashboard.js - Final Polish UI Update with 20 Advanced Features

const globalData = {
  newyork: {
    heroImg: 'https://picsum.photos/id/827/800/600',
    centerLat: 40.7128, centerLng: -74.0060,
    currency: { from: 'USD', symbol: '$', rate: '83.50', tip: 'Most places accept cards. Keep some $1 bills for tips.' },
    weather: [
      { day: 'Mon', temp: '22°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' },
      { day: 'Tue', temp: '24°C', icon: 'cloudy', desc: 'fa-cloud', state: 'cloudy' },
      { day: 'Wed', temp: '19°C', icon: 'rainy', desc: 'fa-cloud-showers-heavy', state: 'rainy' },
      { day: 'Thu', temp: '21°C', icon: 'cloudy', desc: 'fa-cloud-sun', state: 'cloudy' },
      { day: 'Fri', temp: '25°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' }
    ],
    packing: ['Comfortable Walking Shoes', 'Light Jacket', 'Power Bank', 'Umbrella', 'Metro Card Holder'],
    events: 'Upcoming: Tribeca Film Festival | Free Summer Concerts in Central Park | Broadway Week 2-for-1 Tickets',
    etiquette: 'Tipping is standard at 18-22%. Stand on the right side of escalators. Fast walking is expected.',
    flightTrend: { status: 'Cheaper than usual', desc: 'Prices are down 12% this month.', icon: 'fa-arrow-down' },
    itinerary: [
      {
        dayLabel: 'Day 1: Arrival & Midtown Magic',
        subtitle: 'Kick off your New York adventure with iconic sights and local flavors.',
        totalTime: '7 hrs', estCost: '72',
        activities: [
          { time: '08:00 AM', place: 'Ess-a-Bagel', desc: 'Start your day with an authentic NYC bagel.', duration: '1 hr', dist: '0.4 km', transport: 'Walk', cost: '12.00', icon: 'fa-coffee', img: 'https://picsum.photos/id/492/800/600', lat: 40.7554, lng: -73.9686 },
          { time: '09:30 AM', place: 'Empire State Building', desc: 'Experience breathtaking views from the iconic landmark.', duration: '2.5 hrs', dist: '1.2 km', transport: 'Walk', cost: '35.00', icon: 'fa-building', img: 'https://picsum.photos/id/375/800/600', lat: 40.7484, lng: -73.9857 },
          { time: '01:00 PM', place: 'Katz\'s Deli', desc: 'Enjoy the world-famous pastrami sandwich.', duration: '1.5 hrs', dist: '2.5 km', transport: 'Subway', cost: '25.00', icon: 'fa-utensils', img: 'https://picsum.photos/id/260/800/600', lat: 40.7222, lng: -73.9874 },
          { time: '03:00 PM', place: 'Times Square', desc: 'Soak in the lights, energy and vibrant atmosphere.', duration: '2 hrs', dist: '4.0 km', transport: 'Subway', cost: '0.00', icon: 'fa-camera', img: 'https://picsum.photos/id/115/800/600', lat: 40.7580, lng: -73.9855 }
        ]
      },
      {
        dayLabel: 'Day 2: Downtown & Brooklyn Bridges',
        subtitle: 'Explore historic neighborhoods and stunning waterfront views.',
        totalTime: '8 hrs', estCost: '68',
        activities: [
          { time: '08:30 AM', place: 'Blue Bottle Coffee', desc: 'Begin with a perfect brew in a cozy café.', duration: '1 hr', dist: '0.3 km', transport: 'Walk', cost: '8.00', icon: 'fa-coffee', img: 'https://picsum.photos/id/384/800/600', lat: 40.7100, lng: -74.0080 },
          { time: '10:00 AM', place: 'Brooklyn Bridge Walk', desc: 'Walk across the historic Brooklyn Bridge.', duration: '1.5 hrs', dist: '1.8 km', transport: 'Walk', cost: '0.00', icon: 'fa-walking', img: 'https://picsum.photos/id/549/800/600', lat: 40.7061, lng: -73.9969 },
          { time: '12:00 PM', place: 'Juliana\'s Pizza', desc: 'Famous Brooklyn pizza stop.', duration: '1 hr', dist: '0.5 km', transport: 'Walk', cost: '20.00', icon: 'fa-pizza-slice', img: 'https://picsum.photos/id/975/800/600', lat: 40.7027, lng: -73.9934 },
          { time: '02:00 PM', place: '9/11 Memorial & Museum', desc: 'A moving tribute to history and resilience.', duration: '2 hrs', dist: '1.0 km', transport: 'Walk', cost: '28.00', icon: 'fa-landmark', img: 'https://picsum.photos/id/569/800/600', lat: 40.7115, lng: -74.0133 }
        ]
      },
      {
        dayLabel: 'Day 3: Art & Central Park',
        subtitle: 'Experience classic culture and nature in the city.',
        totalTime: '8 hrs', estCost: '120',
        activities: [
          { time: '10:00 AM', place: 'The Metropolitan Museum of Art', desc: 'Explore one of the world\'s largest art museums.', duration: '4 hrs', dist: '-', transport: 'Subway', cost: '25.00', icon: 'fa-palette', img: 'https://picsum.photos/id/612/800/600', lat: 40.7794, lng: -73.9632 },
          { time: '02:00 PM', place: 'Central Park Picnic', desc: 'Relax and enjoy a scenic picnic.', duration: '2 hrs', dist: '0.5 km', transport: 'Walk', cost: '15.00', icon: 'fa-tree', img: 'https://picsum.photos/id/924/800/600', lat: 40.7812, lng: -73.9665 },
          { time: '05:00 PM', place: 'The Plaza Hotel (High Tea)', desc: 'Indulge in an iconic high tea experience.', duration: '2 hrs', dist: '1.5 km', transport: 'Cab', cost: '80.00', icon: 'fa-mug-hot', img: 'https://picsum.photos/id/476/800/600', lat: 40.7644, lng: -73.9744 }
        ]
      }
    ],
    hotels: [
      { name: 'The Plaza Hotel', price: '45000', rating: '4.9', lat: 40.7644, lng: -73.9744, img: 'https://picsum.photos/id/635/800/600', distance: '100m to Central Park', desc: 'Luxury stay overlooking Central Park. Features Spa, Fine Dining, and historic architecture.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Deluxe, Suite, Royal', amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Valet'], gallery: ['https://picsum.photos/id/241/800/600','https://picsum.photos/id/628/800/600','https://picsum.photos/id/40/800/600'] },
      { name: 'YOTEL New York', price: '15000', rating: '4.5', lat: 40.7590, lng: -73.9934, img: 'https://picsum.photos/id/233/800/600', distance: '300m to Times Square', desc: 'Modern cabins in Times Square. Perfect for solo travelers or couples on a budget.', checkIn: '03:00 PM', checkOut: '11:00 AM', rooms: 'Premium Queen, VIP View', amenities: ['Smart TV', 'Terrace', 'Gym', 'Robot Luggage'], gallery: ['https://picsum.photos/id/130/800/600','https://picsum.photos/id/142/800/600','https://picsum.photos/id/306/800/600'] },
      { name: 'The Standard High Line', price: '28000', rating: '4.7', lat: 40.7409, lng: -74.0078, img: 'https://picsum.photos/id/73/800/600', distance: 'Meatpacking District', desc: 'Boutique hotel with panoramic views of the Hudson River and High Line.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'Standard Queen, King, Corner Suite', amenities: ['Rooftop Bar', 'Free WiFi', 'Gym', 'Pet Friendly'], gallery: ['https://picsum.photos/id/371/800/600','https://picsum.photos/id/13/800/600','https://picsum.photos/id/903/800/600'] },
      { name: '1 Hotel Brooklyn Bridge', price: '35000', rating: '4.8', lat: 40.7020, lng: -73.9950, img: 'https://picsum.photos/id/133/800/600', distance: 'Brooklyn Bridge Park', desc: 'Eco-luxury waterfront hotel featuring unparalleled views of the Manhattan skyline.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'King, Double, Riverhouse Suite', amenities: ['Rooftop Pool', 'Spa', 'Organic Cafe', 'Free WiFi'], gallery: ['https://picsum.photos/id/492/800/600','https://picsum.photos/id/870/800/600','https://picsum.photos/id/897/800/600'] },
      { name: 'Arlo SoHo', price: '20000', rating: '4.4', lat: 40.7243, lng: -74.0072, img: 'https://picsum.photos/id/144/800/600', distance: 'SoHo', desc: 'Micro-hotel offering smartly designed rooms and vibrant communal spaces.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'City King, Courtyard Queen', amenities: ['Courtyard', 'Bar', 'Free Bikes', 'Free WiFi'], gallery: ['https://picsum.photos/id/848/800/600','https://picsum.photos/id/744/800/600','https://picsum.photos/id/240/800/600'] },
      { name: 'The Beekman', price: '40000', rating: '4.8', lat: 40.7114, lng: -74.0069, img: 'https://picsum.photos/id/213/800/600', distance: 'Financial District', desc: 'Historic 19th-century luxury hotel with a stunning nine-story atrium.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior King, Studio, Premium Suite', amenities: ['Fine Dining', 'Bar', 'Gym', 'Free WiFi'], gallery: ['https://picsum.photos/id/35/800/600','https://picsum.photos/id/937/800/600','https://picsum.photos/id/709/800/600'] },
      { name: 'Lotte New York Palace', price: '50000', rating: '4.9', lat: 40.7580, lng: -73.9749, img: 'https://picsum.photos/id/190/800/600', distance: 'Midtown East', desc: 'Grand luxury hotel combining historic mansions with a modern high-rise tower.', checkIn: '04:00 PM', checkOut: '11:00 AM', rooms: 'Superior, Tower Room, Suite', amenities: ['Spa', 'Room Service', 'Bar', 'Free WiFi'], gallery: ['https://picsum.photos/id/243/800/600','https://picsum.photos/id/892/800/600','https://picsum.photos/id/79/800/600'] },
      { name: 'Pod 51 Hotel', price: '12000', rating: '4.3', lat: 40.7562, lng: -73.9687, img: 'https://picsum.photos/id/225/800/600', distance: 'Midtown East', desc: 'Budget-friendly micro hotel with colorful decor and a rooftop deck.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Bunk Bed, Queen, Studio', amenities: ['Rooftop Deck', 'Cafe', 'Free WiFi'], gallery: ['https://picsum.photos/id/352/800/600','https://picsum.photos/id/538/800/600','https://picsum.photos/id/898/800/600'] },
      { name: 'Crosby Street Hotel', price: '55000', rating: '4.9', lat: 40.7233, lng: -73.9975, img: 'https://picsum.photos/id/397/800/600', distance: 'SoHo', desc: 'Vibrant, art-filled luxury boutique hotel set on a quiet cobblestone street.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior, Luxury, Suite', amenities: ['Cinema', 'Sculpture Garden', 'Gym', 'Free WiFi'], gallery: ['https://picsum.photos/id/927/800/600','https://picsum.photos/id/646/800/600','https://picsum.photos/id/589/800/600'] },
      { name: 'Moxy NYC Times Square', price: '18000', rating: '4.4', lat: 40.7523, lng: -73.9880, img: 'https://picsum.photos/id/714/800/600', distance: 'Times Square', desc: 'Energetic, millennial-focused hotel with a massive rooftop bar and mini-golf.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'King, Double Double, Bunk', amenities: ['Magic Hour Rooftop', 'Bar', 'Gym', 'Free WiFi'], gallery: ['https://picsum.photos/id/641/800/600','https://picsum.photos/id/312/800/600','https://picsum.photos/id/131/800/600'] },
      { name: 'The Langham', price: '48000', rating: '4.8', lat: 40.7501, lng: -73.9837, img: 'https://picsum.photos/id/92/800/600', distance: 'Fifth Avenue', desc: 'Refined modern luxury with oversized rooms and Michelin-starred dining.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior, Executive, Penthouse', amenities: ['Spa', 'Michelin Dining', 'Gym', 'Valet'], gallery: ['https://picsum.photos/id/706/800/600','https://picsum.photos/id/19/800/600','https://picsum.photos/id/390/800/600'] },
      { name: 'Row NYC Hotel', price: '14000', rating: '4.0', lat: 40.7589, lng: -73.9870, img: 'https://picsum.photos/id/114/800/600', distance: 'Times Square', desc: 'Hip, artsy hotel in the heart of the theater district with a food hall.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'Standard, Premium, Suite', amenities: ['Food Hall', 'Gym', 'Lounge', 'Free WiFi'], gallery: ['https://picsum.photos/id/304/800/600','https://picsum.photos/id/888/800/600','https://picsum.photos/id/491/800/600'] }
    ],
    restaurants: [
      { name: 'Le Bernardin', type: 'Fine Dining', lat: 40.7614, lng: -73.9816, img: 'https://picsum.photos/id/344/800/600', locText: 'Near Times Square', travel: '10 min walk', timing: '12:00 PM - 10:30 PM', cost: '15000', tags: ['Fine Dining', 'Seafood'], menu: [{ name: 'Caviar Tasting', desc: 'Imperial Ossetra with classic garnish', price: '$120', tags: ['GF'] }, { name: 'Poached Halibut', desc: 'With wild mushroom consommé', price: '$65', tags: ['GF', 'Halal'] }], reviews: '"Best seafood in NY." - FoodCrit' },
      { name: 'Katz\'s Delicatessen', type: 'Iconic Deli', lat: 40.7222, lng: -73.9874, img: 'https://picsum.photos/id/828/800/600', locText: 'Lower East Side', travel: '15 min cab', timing: '08:00 AM - 11:00 PM', cost: '2500', tags: ['Casual', 'Meat'], menu: [{ name: 'Pastrami Sandwich', desc: 'Legendary hand-carved pastrami on rye', price: '$25', tags: [] }, { name: 'Matzo Ball Soup', desc: 'Classic Jewish comfort food', price: '$10', tags: [] }], reviews: '"A historic must-visit." - NYT' },
      { name: 'Peter Luger Steak House', type: 'Steakhouse', lat: 40.7099, lng: -73.9625, img: 'https://picsum.photos/id/590/800/600', locText: 'Brooklyn', travel: '20 min subway', timing: '11:45 AM - 09:45 PM', cost: '12000', tags: ['Steak', 'Iconic'], menu: [{ name: 'Steak for Two', desc: 'Dry-aged porterhouse', price: '$115', tags: ['GF'] }, { name: 'Thick Cut Bacon', desc: 'Extra thick sizzling bacon', price: '$8', tags: [] }], reviews: '"Best steak in the world." - Critic' },
      { name: 'Balthazar', type: 'French Brasserie', lat: 40.7226, lng: -73.9981, img: 'https://picsum.photos/id/988/800/600', locText: 'SoHo', travel: '15 min subway', timing: '08:00 AM - 11:00 PM', cost: '5000', tags: ['French', 'Bustling'], menu: [{ name: 'Steak Frites', desc: 'Classic steak with French fries', price: '$42', tags: [] }, { name: 'Onion Soup', desc: 'Traditional French onion soup', price: '$18', tags: [] }], reviews: '"A slice of Paris in NY." - Foodie' },
      { name: 'Halal Guys', type: 'Street Food', lat: 40.7618, lng: -73.9793, img: 'https://picsum.photos/id/837/800/600', locText: 'Midtown (53rd & 6th)', travel: '10 min walk', timing: '10:00 AM - 04:00 AM', cost: '1000', tags: ['Street Food', 'Halal'], menu: [{ name: 'Chicken & Gyro Platter', desc: 'Over rice with white sauce', price: '$10', tags: ['Halal'] }], reviews: '"Legendary street cart." - Local' },
      { name: 'Carmine\'s', type: 'Italian Family Style', lat: 40.7575, lng: -73.9868, img: 'https://picsum.photos/id/214/800/600', locText: 'Times Square', travel: '5 min walk', timing: '11:30 AM - 11:00 PM', cost: '4000', tags: ['Italian', 'Groups'], menu: [{ name: 'Penne Alla Vodka', desc: 'Massive family portion', price: '$35', tags: ['Vegetarian'] }, { name: 'Chicken Parm', desc: 'Crispy chicken with mozzarella', price: '$40', tags: [] }], reviews: '"Huge portions, great flavor." - Eater' },
      { name: 'Ippudo NY', type: 'Ramen', lat: 40.7309, lng: -73.9904, img: 'https://picsum.photos/id/136/800/600', locText: 'East Village', travel: '15 min subway', timing: '11:00 AM - 10:00 PM', cost: '2000', tags: ['Japanese', 'Noodles'], menu: [{ name: 'Akamaru Modern', desc: 'Tonkotsu broth with special garlic oil', price: '$18', tags: [] }, { name: 'Pork Buns', desc: 'Steamed buns with pork chashu', price: '$9', tags: [] }], reviews: '"Best ramen hands down." - Yelp' },
      { name: 'Joe\'s Pizza', type: 'Pizzeria', lat: 40.7305, lng: -74.0021, img: 'https://picsum.photos/id/198/800/600', locText: 'Greenwich Village', travel: '15 min subway', timing: '10:00 AM - 04:00 AM', cost: '500', tags: ['Pizza', 'Casual'], menu: [{ name: 'Cheese Slice', desc: 'Classic NY style cheese slice', price: '$4', tags: ['Vegetarian'] }], reviews: '"The quintessential NY slice." - Timeout' },
      { name: 'Gramercy Tavern', type: 'New American', lat: 40.7386, lng: -73.9882, img: 'https://picsum.photos/id/45/800/600', locText: 'Flatiron', travel: '10 min subway', timing: '12:00 PM - 10:00 PM', cost: '10000', tags: ['Fine Dining', 'American'], menu: [{ name: 'Tasting Menu', desc: 'Seasonal ingredients', price: '$150', tags: [] }], reviews: '"Impeccable service and food." - Zagat' },
      { name: 'Los Tacos No.1', type: 'Mexican', lat: 40.7423, lng: -74.0060, img: 'https://picsum.photos/id/635/800/600', locText: 'Chelsea Market', travel: '20 min walk', timing: '11:00 AM - 10:00 PM', cost: '1500', tags: ['Tacos', 'Fast Casual'], menu: [{ name: 'Adobada Taco', desc: 'Marinated pork taco', price: '$4.50', tags: [] }, { name: 'Carne Asada', desc: 'Grilled steak taco', price: '$5', tags: ['GF'] }], reviews: '"Most authentic tacos in NY." - Local' },
      { name: 'Veselka', type: 'Ukrainian Diner', lat: 40.7289, lng: -73.9870, img: 'https://picsum.photos/id/815/800/600', locText: 'East Village', travel: '15 min subway', timing: '08:00 AM - 11:00 PM', cost: '2000', tags: ['Diner', 'Comfort'], menu: [{ name: 'Pierogi', desc: 'Potato and cheese dumplings', price: '$12', tags: ['Vegetarian'] }, { name: 'Borscht', desc: 'Classic beet soup', price: '$9', tags: [] }], reviews: '"Late night comfort food haven." - Eater' },
      { name: 'Eleven Madison Park', type: 'Fine Dining', lat: 40.7416, lng: -73.9872, img: 'https://picsum.photos/id/244/800/600', locText: 'Flatiron', travel: '10 min subway', timing: '05:30 PM - 10:00 PM', cost: '30000', tags: ['Fine Dining', 'Vegan'], menu: [{ name: 'Plant-based Tasting', desc: 'Multi-course vegan journey', price: '$335', tags: ['Vegan'] }], reviews: '"A culinary masterpiece." - NYT' }
    ],
    places: [
      { name: 'Statue of Liberty', img: 'https://picsum.photos/id/757/800/600', desc: 'Iconic monument representing freedom and democracy.', fee: '2000', loc: 'Battery Park', lat: 40.6892, lng: -74.0445, crowd: 'high', tour: '10:00 AM' },
      { name: 'Central Park', img: 'https://picsum.photos/id/85/800/600', desc: 'Massive urban park offering lakes, trails, and a zoo.', fee: '0', loc: 'Manhattan', lat: 40.7812, lng: -73.9665, crowd: 'low', tour: 'Free' },
      { name: 'Empire State Building', img: 'https://picsum.photos/id/914/800/600', desc: 'Famous Art Deco skyscraper with 360-degree views of the city.', fee: '3500', loc: 'Midtown', lat: 40.7484, lng: -73.9857, crowd: 'high', tour: '04:00 PM' },
      { name: 'The Metropolitan Museum of Art', img: 'https://picsum.photos/id/659/800/600', desc: 'One of the world\'s largest and finest art museums.', fee: '2500', loc: 'Upper East Side', lat: 40.7794, lng: -73.9632, crowd: 'high', tour: '11:00 AM' },
      { name: 'Times Square', img: 'https://picsum.photos/id/763/800/600', desc: 'Bustling intersection renowned for its neon lights and billboards.', fee: '0', loc: 'Midtown', lat: 40.7580, lng: -73.9855, crowd: 'high', tour: 'Free' },
      { name: 'Brooklyn Bridge', img: 'https://picsum.photos/id/540/800/600', desc: 'Historic suspension bridge connecting Manhattan and Brooklyn.', fee: '0', loc: 'Lower Manhattan', lat: 40.7061, lng: -73.9969, crowd: 'medium', tour: 'Free' },
      { name: 'The High Line', img: 'https://picsum.photos/id/951/800/600', desc: 'Elevated linear park built on a historic freight rail line.', fee: '0', loc: 'Chelsea', lat: 40.7480, lng: -74.0048, crowd: 'medium', tour: 'Free' },
      { name: 'One World Observatory', img: 'https://picsum.photos/id/763/800/600', desc: 'Observation deck at the top of the tallest building in the Western Hemisphere.', fee: '3800', loc: 'Financial District', lat: 40.7130, lng: -74.0131, crowd: 'high', tour: '02:00 PM' },
      { name: 'Museum of Modern Art (MoMA)', img: 'https://picsum.photos/id/482/800/600', desc: 'Leading museum showcasing contemporary and modern art.', fee: '2000', loc: 'Midtown', lat: 40.7614, lng: -73.9776, crowd: 'medium', tour: '01:00 PM' },
      { name: 'Grand Central Terminal', img: 'https://picsum.photos/id/657/800/600', desc: 'Iconic beaux-arts train station with a celestial ceiling.', fee: '0', loc: 'Midtown', lat: 40.7527, lng: -73.9772, crowd: 'high', tour: 'Free' },
      { name: 'Top of the Rock', img: 'https://picsum.photos/id/340/800/600', desc: 'Observation deck offering spectacular skyline views, including the Empire State Building.', fee: '3400', loc: 'Rockefeller Center', lat: 40.7593, lng: -73.9794, crowd: 'medium', tour: '05:00 PM (Sunset)' },
      { name: '9/11 Memorial & Museum', img: 'https://picsum.photos/id/942/800/600', desc: 'Memorial and museum honoring the victims of the September 11 attacks.', fee: '2800', loc: 'Financial District', lat: 40.7115, lng: -74.0133, crowd: 'high', tour: '10:00 AM' }
    ]
  },
  paris: {
    heroImg: 'https://picsum.photos/id/445/800/600',
    centerLat: 48.8566, centerLng: 2.3522,
    currency: { from: 'EUR', symbol: '€', rate: '90.50', tip: 'Service is often included, but rounding up the bill is polite.' },
    weather: [
      { day: 'Mon', temp: '18°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' },
      { day: 'Tue', temp: '16°C', icon: 'cloudy', desc: 'fa-cloud', state: 'cloudy' },
      { day: 'Wed', temp: '15°C', icon: 'rainy', desc: 'fa-cloud-showers-heavy', state: 'rainy' },
      { day: 'Thu', temp: '19°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' },
      { day: 'Fri', temp: '20°C', icon: 'sunny', desc: 'fa-sun', state: 'sunny' }
    ],
    packing: ['Chic Layers', 'Walking Shoes', 'Universal Adapter', 'Crossbody Bag', 'Travel Scarf'],
    events: 'Upcoming: Nuit Blanche Art Festival | Paris Fashion Week Preview | Jazz at Saint-Germain-des-Prés',
    etiquette: 'Always say "Bonjour" when entering a shop. Keep your voice low in public transport.',
    flightTrend: { status: 'Expected to rise', desc: 'Prices are trending upward. Book soon.', icon: 'fa-arrow-up' },
    itinerary: [
      {
        dayLabel: 'Day 1: Heart of Paris',
        subtitle: 'Experience classic Parisian landmarks.',
        totalTime: '4.5 hrs', estCost: '35',
        activities: [
          { time: '09:00 AM', place: 'Louvre Museum', desc: 'World famous art museum.', duration: '3 hrs', dist: '2 km', transport: 'Metro', cost: '15.00', icon: 'fa-landmark', img: 'https://picsum.photos/id/620/800/600', lat: 48.8606, lng: 2.3376 },
          { time: '12:30 PM', place: 'Cafe de Flore', desc: 'Historic cafe in St. Germain.', duration: '1.5 hrs', dist: '1.5 km', transport: 'Walk', cost: '20.00', icon: 'fa-coffee', img: 'https://picsum.photos/id/258/800/600', lat: 48.8541, lng: 2.3326 }
        ]
      }
    ],
    hotels: [
      { name: 'Ritz Paris', price: '90000', rating: '5.0', lat: 48.8683, lng: 2.3284,
        img: 'https://picsum.photos/id/841/800/600', distance: 'Place Vendôme', 
        desc: 'Legendary hotel with exquisite decor, fine dining, and unmatched luxury.',
        checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Deluxe, Grand Suite',
        amenities: ['Spa', 'Michelin Star Dining', 'Indoor Pool', 'Butler'],
        gallery: ['https://picsum.photos/id/481/800/600','https://picsum.photos/id/178/800/600','https://picsum.photos/id/533/800/600'] }
    ],
    restaurants: [
      { name: 'Le Jules Verne', type: 'Fine Dining', lat: 48.8584, lng: 2.2945, img: 'https://picsum.photos/id/992/800/600', 
        locText: 'Eiffel Tower', travel: 'Elevator', timing: '12:00 PM - 9:30 PM', cost: '25000', tags: ['Fine Dining', 'Romantic'],
        menu: [{name: 'Lobster Souffle', desc:'Tender lobster with rich cream sauce', price:'€110', tags:['GF']}], reviews: '"Dining in the clouds." - Guide' }
    ],
    places: [
      { name: 'Eiffel Tower', img: 'https://picsum.photos/id/750/800/600', desc: 'Iron Lady of Paris.', fee: '2500', loc: 'Champ de Mars', lat: 48.8584, lng: 2.2945, crowd: 'high', tour: '06:00 PM' }
    ]
  }
};

// Fallback logic
function getGenericData(key) {
  if(globalData[key]) return globalData[key];
  return {
    ...globalData['newyork'],
    centerLat: 48.8566, centerLng: 2.3522,
    currency: { from: 'Local', symbol: '¤', rate: '1.00', tip: 'Carry local currency for street vendors.' },
  };
}

let mapInstance = null;
let routingControl = null;
let currentLocData = null;
let customItinerary = [];
let allocatedBudget = 0;
let totalBudgetLimit = 0;
let numTravelers = 2;
let globalCostBreakdown = { flights: 0, hotels: 0, food: 0, activities: 0 };

function renderPremiumDashboard(data, destinationKey, startdate, enddate, travelers, budgetOption) {
  currentLocData = getGenericData(destinationKey);
  numTravelers = parseInt(travelers) || 2;
  
  const s = new Date(startdate);
  const e = new Date(enddate);
  const days = Math.round((e - s) / 86400000) || 1;

  totalBudgetLimit = budgetOption === 'economy' ? 50000 : budgetOption === 'standard' ? 100000 : budgetOption === 'premium' ? 200000 : 400000;
  allocatedBudget = 0;
  customItinerary = [];
  globalCostBreakdown = { flights: totalBudgetLimit*0.2, hotels: 0, food: 0, activities: 0 }; // Allocate 20% to flight estimate automatically

  // Fix layout constraints for full screen
  const pageBody = document.querySelector('.page-body');
  if (pageBody) {
    pageBody.style.maxWidth = '100%';
    pageBody.style.padding = '0';
  }
  const formCard = document.getElementById('formCard');
  if (formCard) {
    formCard.style.padding = '0';
    formCard.style.background = 'transparent';
    formCard.style.border = 'none';
  }

  // Build Hotels HTML
  let hotelsHtml = currentLocData.hotels.map((h, i) => `
      <div class="item-card">
        <div class="item-img-wrap" onclick="showHotelModal(${i})">
          <img src="${h.img}" class="item-img" alt="${h.name}">
          <div class="item-price">₹${parseInt(h.price).toLocaleString()}</div>
          <div class="item-gallery-btn"><i class="fas fa-eye"></i></div>
        </div>
        <div class="item-content">
          <div class="item-title">${h.name}</div>
          <div class="item-rating"><i class="fas fa-star"></i> ${h.rating} / 5</div>
          <div class="item-location"><span>Location</span><i class="fas fa-map-marker-alt"></i> ${h.distance}</div>
          <p class="item-desc">${h.desc.substring(0,60)}...</p>
          <div style="display:flex; gap:10px; margin-bottom:10px;">
            <button class="item-btn" onclick="showHotelModal(${i})">360° Room Viewer</button>
            <button class="item-btn" onclick="routeTo(${h.lat}, ${h.lng}, '${h.name}')">Map</button>
          </div>
          <button class="item-btn" style="border-color:#6C63FF; color:#6C63FF;" onclick="addToCustom('hotels', 'Hotel', '${h.name}', ${h.price})"><i class="fas fa-plus"></i> Add to Budget</button>
        </div>
      </div>
  `).join('');

  // Build Restaurants HTML
  let restsHtml = currentLocData.restaurants.map((r, i) => `
      <div class="item-card" data-tags="${r.tags ? r.tags.join(',') : ''}">
        <div class="item-img-wrap" onclick="showMenuModal(${i})">
          <img src="${r.img}" class="item-img" alt="${r.name}">
          <div class="item-price">${r.type}</div>
          <div class="item-gallery-btn"><i class="fas fa-utensils"></i></div>
        </div>
        <div class="item-content">
          <div class="item-title">${r.name}</div>
          <div class="item-location"><span>Reach</span><i class="fas fa-walking"></i> ${r.travel}</div>
          <p style="color:var(--gold); font-size:0.8rem; margin-bottom:10px;">Est. Cost: ₹${parseInt(r.cost).toLocaleString()}</p>
          <div style="display:flex; gap:10px; margin-bottom:10px;">
            <button class="item-btn" onclick="showMenuModal(${i})">Full Menu</button>
            <button class="item-btn" onclick="routeTo(${r.lat}, ${r.lng}, '${r.name}')">Map</button>
          </div>
          <button class="item-btn" style="border-color:#6C63FF; color:#6C63FF;" onclick="addToCustom('food', 'Dining', '${r.name}', ${r.cost})"><i class="fas fa-plus"></i> Add to Itinerary</button>
        </div>
      </div>
  `).join('');

  // Build Places HTML
  let placesHtml = currentLocData.places.map((p, i) => `
      <div class="item-card">
        <div class="item-img-wrap" onclick="showPlaceModal(${i})">
          <img src="${p.img}" class="item-img" alt="${p.name}">
          <div class="item-price">₹${p.fee}</div>
        </div>
        <div class="item-content">
          <div class="item-title">${p.name} <button class="audio-btn" style="float:right;" onclick="playMockAudio()" title="Audio Guide Preview"><i class="fas fa-play"></i></button></div>
          <p class="item-desc">${p.desc}</p>
          <div class="crowd-chart">
            <div class="crowd-bar ${p.crowd==='low'?'low':''}" style="height:40%;"><span>8a</span></div>
            <div class="crowd-bar ${p.crowd==='high'?'high':''}" style="height:90%;"><span>12p</span></div>
            <div class="crowd-bar ${p.crowd==='low'?'low':''}" style="height:30%;"><span>4p</span></div>
          </div>
          <div style="display:flex; gap:5px; margin:10px 0;">
            <button class="item-btn" style="flex:1; padding:5px; font-size:0.7rem;" onclick="routeTo(${p.lat}, ${p.lng}, '${p.name.replace(/'/g, "\\'")}')">Route</button>
            <button class="item-btn" style="flex:1; padding:5px; font-size:0.7rem; background: var(--gold-dim); border-color: var(--gold); color: var(--gold);" onclick="showPhotoSpots(${p.lat}, ${p.lng}, '${p.name.replace(/'/g, "\\'")}')"><i class="fas fa-camera"></i> Spots</button>
            <button class="item-btn" style="flex:1; padding:5px; font-size:0.7rem;" onclick="window.location.href='booking.html'"><i class="fas fa-ticket-alt"></i> Book</button>
          </div>
          <button class="item-btn" style="border-color:#6C63FF; color:#6C63FF; width:100%;" onclick="addToCustom('activities', 'Activity', '${p.name.replace(/'/g, "\\'")}', ${p.fee})"><i class="fas fa-plus"></i> Add to Itinerary</button>
        </div>
      </div>
  `).join('');

  // Build Itinerary
  const curr = currentLocData.currency.symbol;
  let itinHtml = `<div class="itinerary-timeline-container">` + currentLocData.itinerary.map((day, idx) => `
    <div class="day-wrapper">
      <div class="timeline-node">
        <span style="font-size: 0.6rem; letter-spacing: 1px;">DAY</span>
        <strong style="font-size: 1.2rem;">${(idx+1).toString().padStart(2, '0')}</strong>
      </div>
      <div class="day-card">
        <div class="day-card-header">
          <div class="day-card-titles">
            <h3 class="day-card-title">${day.dayLabel.toUpperCase()}</h3>
            <p class="day-card-subtitle">${day.subtitle || ''}</p>
          </div>
          <div class="day-card-stats">
            <div class="stat-item"><i class="far fa-clock"></i> <div><small>Total Time</small><br><strong>${day.totalTime || '-'}</strong></div></div>
            <div class="stat-item"><i class="fas fa-wallet"></i> <div><small>Est. Cost</small><br><strong>${curr}${day.estCost || '0'}</strong></div></div>
            <button class="btn-sm expand-btn" onclick="animateRouteDay(${idx})" title="Animate Route" style="background:transparent; border:none; color:var(--gold); font-size:1.2rem; cursor:pointer;"><i class="fas fa-chevron-down"></i></button>
          </div>
        </div>
        <div class="day-card-body">
          ${day.activities.map((act, actIdx) => {
            const timeParts = act.time.split(' ');
            const t1 = timeParts[0] + ' ' + (timeParts[1] ? timeParts[1].charAt(0) : '');
            const t2 = timeParts[1] || '';
            return `
            <div class="it-item" onclick="highlightLocationOnMap(${act.lat || 0}, ${act.lng || 0}, '${act.place.replace(/'/g, "\\'")}')">
              <div class="it-time"><span>${t1}</span><small>${t2}</small></div>
              <div class="it-icon-wrap"><div class="it-icon"><i class="fas ${act.icon}"></i></div></div>
              <div class="it-details">
                <h4>${act.place}</h4>
                <p class="it-desc">${act.desc || ''}</p>
                <p class="it-meta-row"><i class="fas fa-hourglass-half"></i> ${act.duration} &nbsp;|&nbsp; <i class="fas fa-walking"></i> ${act.transport} (${act.dist})</p>
              </div>
              <div class="it-cost">Cost: ${curr}${parseInt(act.cost).toLocaleString()}</div>
              ${act.img ? `<div class="it-thumb"><img src="${act.img}" alt="${act.place}"></div>` : ''}
            </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `).join('') + `</div>`;

  // HTML Structure Injection
  const dashHtml = `
    <div id="premiumDashboard">
      
      <div class="utility-bar">
        <div>
          <button class="util-btn" onclick="toggleDarkMode()"><i class="fas fa-moon"></i> Theme</button>
          <button class="util-btn" onclick="downloadPDF()"><i class="fas fa-file-pdf"></i> Export PDF</button>
          <button class="util-btn" onclick="openCompareModal('${destinationKey}')"><i class="fas fa-exchange-alt"></i> Compare Trips</button>
          <button class="util-btn" onclick="simulateOfflineDownload(event)"><i class="fas fa-download"></i> Offline Map</button>
          <button class="util-btn" onclick="showToast('Metro Map overlay mocked!', 'fa-subway')"><i class="fas fa-subway"></i> Transport</button>
        </div>
        <div>
          <div id="google_translate_element" style="display:inline-block;"></div>
          <input type="text" class="search-filter" placeholder="Search places..." onkeyup="filterCards(this.value)">
        </div>
      </div>

      <div id="downloadableContent" style="width:100%;">
      <div class="dash-hero" id="itineraryHeader">
        <img src="${currentLocData.heroImg}" class="dash-hero-img" alt="Destination">
        <div class="dash-hero-content">
          <div class="dash-title-wrap">
            <div class="dash-badge"><i class="fas fa-magic"></i> Ultimate Travel Experience</div>
            <div class="dash-title">${(destinationKey || 'Journey').toUpperCase()}</div>
            <div class="dash-subtitle">Your highly detailed interactive journey.</div>
          </div>
          <div class="dash-hero-stats">
            <div class="stat-box"><small>Duration</small><strong>${days} Days</strong></div>
            <div class="stat-box"><small>Travelers</small><strong>${travelers}</strong></div>
            <div class="stat-box"><small>Target Budget</small><strong>₹${totalBudgetLimit.toLocaleString()}</strong></div>
          </div>
        </div>
      </div>

      <!-- NEW: EVENTS TICKER -->
      <div class="events-ticker-wrap">
        <div class="events-ticker">
          <i class="fas fa-calendar-star" style="margin-right:10px;"></i> ${currentLocData.events || 'No upcoming events found.'}
        </div>
      </div>

      <div class="widget-grid" style="margin-bottom: 30px;">
        <div class="widget-box" style="border-color:#6C63FF; display:flex; flex-direction:column;">
          <div class="widget-head" style="color:#6C63FF;"><i class="fas fa-chart-pie"></i> Expense Breakdown Chart</div>
          <div class="budget-tracker-info" style="flex:1;">
            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
              <span>Spent: <strong id="spentAmount" style="color:#FFD700;">₹0</strong></span>
              <span>Remaining: <strong id="remAmount">₹${totalBudgetLimit.toLocaleString()}</strong></span>
            </div>
            
            <div class="budget-chart-wrap">
              <div class="pie-chart" id="pieChartElement">
                <div class="pie-inner" id="pieInnerTxt">0%</div>
              </div>
              <div class="chart-legend">
                <div class="legend-item"><div class="legend-color" style="background:#FFD700;"></div>Flights (<span id="pctFlight">0</span>%)</div>
                <div class="legend-item"><div class="legend-color" style="background:#6C63FF;"></div>Hotels (<span id="pctHotel">0</span>%)</div>
                <div class="legend-item"><div class="legend-color" style="background:#ff6b6b;"></div>Food (<span id="pctFood">0</span>%)</div>
                <div class="legend-item"><div class="legend-color" style="background:#4ecdc4;"></div>Activity (<span id="pctAct">0</span>%)</div>
              </div>
            </div>

            <!-- Split Cost Calculator -->
            <div class="split-cost">
              <div><i class="fas fa-users"></i> Split by <input type="number" id="splitInput" value="${numTravelers}" min="1" onchange="updateCustomUI()"> travelers</div>
              <div><strong id="perPersonCost" style="color:var(--gold);">₹0</strong> / person</div>
            </div>

            <!-- Carbon Footprint Estimator -->
            <div class="split-cost" style="justify-content:space-between; font-size:0.8rem;">
              <span style="color:#ccc;"><i class="fas fa-leaf" style="color:#2ecc71;"></i> Est. Footprint: <strong id="co2Print">0.5t</strong> CO2</span>
              <button class="btn-sm" style="background:#2ecc71;" onclick="showToast('Redirecting to Carbon Offset partners...', 'fa-leaf')">Offset</button>
            </div>
          </div>
        </div>

        <div class="widget-box readiness-widget" style="border-color:#2ecc71; position:relative; overflow:hidden;">
          <div class="widget-head" style="color:#2ecc71;"><i class="fas fa-rocket"></i> Trip Readiness</div>
          <div class="readiness-content" style="margin-top:15px;">
             <div class="progress-bar-wrap" style="height:8px; background:rgba(255,255,255,0.1); border-radius:4px; margin-bottom:15px; overflow:hidden;">
               <div class="progress-bar-fill" style="height:100%; width:0%; background:#2ecc71; border-radius:4px; transition:width 1.5s ease-in-out;"></div>
             </div>
             <ul class="checklist-animated" style="list-style:none; padding:0; margin:0; font-size:0.9rem; color:#ccc;">
               <li style="margin-bottom:8px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> Flights Booked</li>
               <li style="margin-bottom:8px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> Hotel Confirmed</li>
               <li class="pending" style="margin-bottom:8px; display:flex; align-items:center; gap:10px; opacity:0.6;"><i class="far fa-circle"></i> Packing Complete</li>
               <li class="pending" style="margin-bottom:8px; display:flex; align-items:center; gap:10px; opacity:0.6;"><i class="far fa-circle"></i> Travel Insurance</li>
             </ul>
          </div>
          <!-- Simple CSS animation triggered via JS later or purely CSS -->
          <style>
            .readiness-widget:hover .progress-bar-fill { width: 50% !important; }
            .readiness-widget .progress-bar-fill { animation: fillProgress 2s forwards ease-out 0.5s; }
            @keyframes fillProgress { to { width: 50%; } }
            .checklist-animated li { animation: slideInFade 0.5s forwards ease-out; opacity:0; transform:translateX(10px); }
            .checklist-animated li:nth-child(1) { animation-delay: 0.2s; }
            .checklist-animated li:nth-child(2) { animation-delay: 0.4s; }
            .checklist-animated li:nth-child(3) { animation-delay: 0.6s; opacity: 0; }
            .checklist-animated li:nth-child(4) { animation-delay: 0.8s; opacity: 0; }
            @keyframes slideInFade { to { opacity:1; transform:translateX(0); } }
            .checklist-animated li.pending { animation: slideInFadePending 0.5s forwards ease-out; }
          </style>
        </div>
      </div>
        
        <div class="dash-section">
          <div class="section-head"><i class="fas fa-calendar-alt"></i><h3>Suggested Day-by-Day Itinerary</h3></div>
          <div class="smart-timeline">${itinHtml}</div>
        </div>

        <div class="dash-section card-container">
          <div class="section-head" style="justify-content:space-between;">
            <div style="display:flex; gap:12px; align-items:center;">
              <i class="fas fa-hotel"></i><h3>Premium Hotels</h3>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="util-btn" onclick="scrollH('hScrollHotels', -300)"><i class="fas fa-chevron-left"></i></button>
              <button class="util-btn" onclick="scrollH('hScrollHotels', 300)"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div class="h-scroll" id="hScrollHotels" style="scroll-behavior: smooth;">${hotelsHtml}</div>
        </div>

        <div class="dash-section card-container">
          <div class="section-head" style="justify-content:space-between;">
            <div style="display:flex; gap:12px; align-items:center;">
              <i class="fas fa-utensils"></i><h3>Dining & Culinary</h3>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="util-btn" onclick="scrollH('hScrollRests', -300)"><i class="fas fa-chevron-left"></i></button>
              <button class="util-btn" onclick="scrollH('hScrollRests', 300)"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>

          <!-- NEW: DIETARY PILLS -->
          <div class="filter-pills" id="dietPills">
            <button class="filter-pill active" onclick="filterDiet('All', this)">All</button>
            <button class="filter-pill" onclick="filterDiet('Vegan', this)">Vegan / Veg</button>
            <button class="filter-pill" onclick="filterDiet('Halal', this)">Halal</button>
            <button class="filter-pill" onclick="filterDiet('Fine Dining', this)">Fine Dining</button>
            <button class="filter-pill" onclick="filterDiet('Casual', this)">Casual</button>
          </div>

          <div class="h-scroll" id="hScrollRests" style="scroll-behavior: smooth;">${restsHtml}</div>
        </div>

        <div class="dash-section card-container">
          <div class="section-head" style="justify-content:space-between;">
            <div style="display:flex; gap:12px; align-items:center;">
              <i class="fas fa-camera"></i><h3>Must Visit Attractions</h3>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="util-btn" onclick="showToast('Click \'Spots\' on any attraction below to explore photo locations!', 'fa-camera-retro')"><i class="fas fa-camera-retro"></i> Photo Spots</button>
              <button class="util-btn" onclick="scrollH('hScrollPlaces', -300)"><i class="fas fa-chevron-left"></i></button>
              <button class="util-btn" onclick="scrollH('hScrollPlaces', 300)"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div class="h-scroll" id="hScrollPlaces" style="scroll-behavior: smooth;">${placesHtml}</div>
        </div>

        <!-- NEW LARGE MAP AT THE BOTTOM -->
        <div class="dash-section">
          <div class="section-head">
            <i class="fas fa-map-marked-alt"></i><h3>Large Interactive Map & Widgets</h3>
          </div>
          <p style="color:#ccc; font-size:0.9rem; margin-bottom:15px;">Click any marker to open directions in Google Maps. Click 'Animate Route' in itinerary to see day-by-day routing.</p>
          <div id="realMap" style="height: 500px; width: 100%;"></div>
          
          <div class="widget-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-top:30px; align-items:start;">
            <div class="widget-box" style="overflow: hidden;">
              <div class="widget-head"><i class="fas fa-cloud-sun"></i> 5-Day Weather Forecast</div>
              <div class="weather-row">
                ${currentLocData.weather.map(w => `<div class="weather-day ${w.state==='rainy'?'rainy':''}"><span>${w.day}</span><i class="fas ${w.desc}"></i><strong>${w.temp}</strong></div>`).join('')}
              </div>
            </div>
            
            <div class="widget-box">
              <div class="widget-head"><i class="fas fa-suitcase"></i> Smart Packing Checklist</div>
              <div class="packing-list">
                ${currentLocData.packing.map(pk => `<div class="pack-item"><input type="checkbox"> <span>${pk}</span></div>`).join('')}
              </div>
            </div>

            <div class="widget-box" style="display:flex; flex-direction:column; gap:10px;">
              <div>
                <div class="widget-head"><i class="fas fa-exchange-alt"></i> Inline Currency Converter</div>
                <div class="currency-rate" style="margin-bottom:5px;">1 INR = <span>${(1 / currentLocData.currency.rate).toFixed(4)} ${currentLocData.currency.symbol}</span></div>
                <div class="split-cost" style="margin-top:0; padding-top:0; border:none; justify-content:flex-start; gap:10px;">
                   <input type="number" id="currInput" value="1000" oninput="document.getElementById('currRes').innerText = (this.value / ${currentLocData.currency.rate}).toFixed(2) + ' ${currentLocData.currency.symbol}'">
                   <span>INR = <strong id="currRes" style="color:var(--gold);">${(1000 / currentLocData.currency.rate).toFixed(2)} ${currentLocData.currency.symbol}</strong></span>
                </div>
              </div>
              <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
                <div class="widget-head" style="font-size:0.8rem;"><i class="fas fa-book"></i> Etiquette & Safety</div>
                <p style="font-size:0.75rem; color:#aaa; margin:0;">${currentLocData.etiquette || 'Dial 112 for emergency.'}</p>
              </div>
            </div>
            
            <div class="widget-box">
              <div class="widget-head"><i class="fas fa-plane-departure"></i> Flight Price Trend</div>
              <div class="price-trend">
                <div class="trend-arrow"><i class="fas ${currentLocData.flightTrend ? currentLocData.flightTrend.icon : 'fa-arrow-right'}"></i></div>
                <div class="trend-info">
                  <h4>${currentLocData.flightTrend ? currentLocData.flightTrend.status : 'Stable'}</h4>
                  <p>${currentLocData.flightTrend ? currentLocData.flightTrend.desc : 'Prices are stable for these dates.'}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    
    <!-- Compare Modal -->
    <div id="compareModal" class="feature-modal">
      <div class="f-modal-content">
        <button class="f-modal-close" onclick="closeCompareModal()"><i class="fas fa-times"></i></button>
        <div class="fm-info">
          <h2 style="color:var(--gold);">Compare Destinations</h2>
          <div style="margin-bottom: 20px;">
            <label style="color:#ccc; margin-right:10px;">Select to compare with ${destinationKey ? destinationKey.toUpperCase() : 'NEWYORK'}:</label>
            <select id="compareSelect" onchange="renderCompare('${destinationKey || 'newyork'}')" style="padding:8px; border-radius:6px; background:#222; color:#fff; border:1px solid #FFD700; width:200px;">
              <option value="newyork">New York</option>
              <option value="paris">Paris</option>
            </select>
          </div>
          <div class="fm-grid" id="compareGrid"></div>
        </div>
      </div>
    </div>

    <!-- Feature Modals -->
    <div id="hotelModal" class="feature-modal"></div>
    <div id="menuModal" class="feature-modal"></div>
    <div id="placeModal" class="feature-modal"></div>

    <!-- AI Travel Concierge Widget -->
    <div id="aiConciergeBtn" class="ai-btn" onclick="toggleAiChat()">
      <i class="fas fa-sparkles"></i>
    </div>
    
    <div id="aiChatWindow" class="ai-chat-window">
      <div class="ai-chat-header">
        <div><i class="fas fa-robot"></i> AI Travel Concierge</div>
        <button class="ai-close-btn" onclick="toggleAiChat()"><i class="fas fa-times"></i></button>
      </div>
      <div class="ai-chat-body" id="aiChatBody">
        <div class="ai-msg">Hello! I'm your premium AI travel assistant. How can I help you plan your trip to ${destinationKey ? destinationKey.toUpperCase() : 'your destination'}?</div>
      </div>
      <div class="ai-chat-input">
        <input type="text" id="aiInput" placeholder="Ask about places, phrases, tips..." onkeypress="handleAiKeyPress(event)">
        <button class="ai-send-btn" onclick="sendAiMessage()"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  `;

  document.getElementById('formCard').innerHTML = dashHtml;

  // Initialize Map
  setTimeout(initRealMap, 500);

  // Initialize Google Translate
  if (window.google && google.translate) {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
  
  // Force a budget update so the chart renders properly initially
  updateCustomUI();
}

/* ── INTERACTIVE MODALS (MENUS & HOTELS) ── */
function getNearbyPlacesHtml(lat, lng, excludeName) {
  let allItems = [];
  if (currentLocData.hotels) allItems.push(...currentLocData.hotels.map((h, i) => ({...h, category: 'hotel', idx: i})));
  if (currentLocData.restaurants) allItems.push(...currentLocData.restaurants.map((r, i) => ({...r, category: 'restaurant', idx: i})));
  if (currentLocData.places) allItems.push(...currentLocData.places.map((p, i) => ({...p, category: 'place', idx: i})));

  allItems = allItems.filter(item => item.name !== excludeName);
  allItems.forEach(item => {
    item.distScore = Math.pow(item.lat - lat, 2) + Math.pow(item.lng - lng, 2);
  });
  allItems.sort((a, b) => a.distScore - b.distScore);
  
  const nearby = allItems.slice(0, 4); // top 4 nearby
  if (nearby.length === 0) return '';
  
  let html = `<div style="margin-top:20px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
    <h4 style="color:var(--gold); margin-bottom:10px;"><i class="fas fa-map-signs"></i> Nearby Recommendations</h4>
    <div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:10px;" class="h-scroll">`;
    
  nearby.forEach(item => {
    let icon = item.category === 'hotel' ? 'fa-bed' : item.category === 'restaurant' ? 'fa-utensils' : 'fa-camera';
    let clickHandler = '';
    if (item.category === 'hotel') clickHandler = `showHotelModal(${item.idx})`;
    if (item.category === 'restaurant') clickHandler = `showMenuModal(${item.idx})`;
    if (item.category === 'place') clickHandler = `showPlaceModal(${item.idx})`;
    
    html += `
      <div style="min-width:140px; background:rgba(255,255,255,0.05); border-radius:8px; cursor:pointer; transition: transform 0.2s;" onclick="${clickHandler}" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
        <img src="${item.img}" style="width:100%; height:80px; object-fit:cover; border-radius:8px 8px 0 0;">
        <div style="padding:8px; font-size:0.85rem; text-align:center;">
          <i class="fas ${icon}" style="color:var(--gold); margin-bottom:5px;"></i><br>
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; display:block;">${item.name}</span>
        </div>
      </div>
    `;
  });
  
  html += `</div></div>`;
  return html;
}

function showHotelModal(index) {
  document.getElementById('menuModal').classList.remove('active');
  if(document.getElementById('placeModal')) document.getElementById('placeModal').classList.remove('active');
  const h = currentLocData.hotels[index];
  const container = document.getElementById('hotelModal');
  
  // Prepare gallery images string for the onclick function
  const gStr = encodeURIComponent(JSON.stringify(h.gallery));

  container.innerHTML = `
    <div class="f-modal-content">
      <button class="f-modal-close" onclick="document.getElementById('hotelModal').classList.remove('active')"><i class="fas fa-times"></i></button>
      <h3 style="color:var(--gold); margin-top:0;">${h.name} - 360° Room Viewer & Details</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-top:20px;">
        <img src="${h.gallery[0]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="openGlobalGallery(decodeURIComponent('${gStr}'), 0)">
        <img src="${h.gallery[1]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="openGlobalGallery(decodeURIComponent('${gStr}'), 1)">
        <img src="${h.gallery[2]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="openGlobalGallery(decodeURIComponent('${gStr}'), 2)">
      </div>
      <div style="margin-top:20px; color:#ccc;">
        <p><strong>Price:</strong> ₹${parseInt(h.price).toLocaleString()} &nbsp; | &nbsp; <strong>Rating:</strong> <i class="fas fa-star" style="color:#FFD700;"></i> ${h.rating}</p>
        <p>${h.desc}</p>
        <p><strong>Check-in:</strong> ${h.checkIn} &nbsp; | &nbsp; <strong>Check-out:</strong> ${h.checkOut}</p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin:15px 0;">
          ${h.amenities.map(a => `<span style="background:var(--gold); color:#000; padding:4px 10px; border-radius:20px; font-size:0.8rem;">${a}</span>`).join('')}
        </div>
        <button class="util-btn" style="background:var(--gold); color:#000; margin-top:10px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('hotels', 'Hotel', '${h.name}', ${h.price}); showToast('Hotel added to plan!', 'fa-check'); setTimeout(() => window.location.href='booking.html?tour=' + encodeURIComponent('${h.name}'), 1500);"><i class="fas fa-check-circle"></i> Book Room & Add to Plan</button>
        ${getNearbyPlacesHtml(h.lat, h.lng, h.name)}
      </div>
    </div>
  `;
  container.classList.add('active');
}

function showMenuModal(index) {
  document.getElementById('hotelModal').classList.remove('active');
  if(document.getElementById('placeModal')) document.getElementById('placeModal').classList.remove('active');
  const r = currentLocData.restaurants[index];
  const container = document.getElementById('menuModal');
  const menuList = r.menu && Array.isArray(r.menu) ? r.menu.map(m => `
    <div class="menu-item">
      <div style="width:60px; height:60px; border-radius:50%; background:rgba(255,215,0,0.1); display:flex; justify-content:center; align-items:center; color:var(--gold);"><i class="fas fa-utensils"></i></div>
      <div class="menu-item-info" style="flex:1;">
        <h4>${m.name} <span style="float:right; color:var(--gold);">${m.price}</span></h4>
        <p>${m.desc}</p>
        <div>${(m.tags||[]).map(t => `<span class="diet-tag tag-${t.toLowerCase().replace(/[^a-z]/g,'')}">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('') : '<p>Menu not available.</p>';

  container.innerHTML = `
    <div class="f-modal-content">
      <button class="f-modal-close" onclick="document.getElementById('menuModal').classList.remove('active')"><i class="fas fa-times"></i></button>
      <h3 style="color:var(--gold); margin-top:0;">${r.name} - Interactive Menu</h3>
      <p style="color:#aaa;">${r.type} • ${r.timing} • ${r.reviews}</p>
      
      <div class="menu-grid">
        ${menuList}
      </div>

      <button class="util-btn" style="background:var(--gold); color:#000; margin-top:25px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('food', 'Dining', '${r.name}', ${r.cost}); showToast('Table Reserved & Added!', 'fa-calendar-check'); setTimeout(() => window.location.href='booking.html?tour=' + encodeURIComponent('${r.name}'), 1500);"><i class="fas fa-calendar-check"></i> Reserve Table</button>
      ${getNearbyPlacesHtml(r.lat, r.lng, r.name)}
    </div>
  `;
  container.classList.add('active');
}

function showPlaceModal(index) {
  document.getElementById('hotelModal').classList.remove('active');
  document.getElementById('menuModal').classList.remove('active');
  const p = currentLocData.places[index];
  const container = document.getElementById('placeModal');
  
  container.innerHTML = `
    <div class="f-modal-content">
      <button class="f-modal-close" onclick="document.getElementById('placeModal').classList.remove('active')"><i class="fas fa-times"></i></button>
      <h3 style="color:var(--gold); margin-top:0;">${p.name} - Attraction Details</h3>
      <div style="margin-top:15px;">
        <img src="${p.img}" style="width:100%; height:300px; object-fit:cover; border-radius:12px; margin-bottom:15px; cursor:pointer;" onclick="openGlobalGallery(encodeURIComponent(JSON.stringify(['${p.img}'])), 0)">
        <p><strong>Location:</strong> ${p.loc} &nbsp; | &nbsp; <strong>Entry Fee:</strong> ₹${p.fee}</p>
        <p>${p.desc}</p>
        <div style="display:flex; justify-content:space-between; color:#aaa; margin-top:15px;">
          <span><i class="fas fa-clock"></i> Recommended: ${p.tour}</span>
          <span><i class="fas fa-users"></i> Crowd: ${p.crowd.toUpperCase()}</span>
        </div>
        <button class="util-btn" style="background:var(--gold); color:#000; margin-top:20px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('activities', 'Activity', '${p.name}', ${p.fee}); showToast('Activity added to plan!', 'fa-ticket-alt'); setTimeout(() => window.location.href='booking.html?tour=' + encodeURIComponent('${p.name}'), 1500);"><i class="fas fa-ticket-alt"></i> Book Tickets & Add to Plan</button>
        ${getNearbyPlacesHtml(p.lat, p.lng, p.name)}
      </div>
    </div>
  `;
  container.classList.add('active');
}

/* ── GLOBAL IMAGE GALLERY ── */
let currentGalleryImages = [];
let currentGalleryIndex = 0;

function openGlobalGallery(encodedArr, index) {
  try {
    currentGalleryImages = JSON.parse(decodeURIComponent(encodedArr));
    currentGalleryIndex = parseInt(index) || 0;
    
    let galleryContainer = document.getElementById('globalGalleryModal');
    if (!galleryContainer) {
      galleryContainer = document.createElement('div');
      galleryContainer.id = 'globalGalleryModal';
      galleryContainer.className = 'f-modal';
      document.body.appendChild(galleryContainer);
    }
    
    updateGalleryView();
  } catch(e) {
    console.error("Gallery failed to open", e);
  }
}

function updateGalleryView() {
  const container = document.getElementById('globalGalleryModal');
  const imgUrl = currentGalleryImages[currentGalleryIndex];
  
  container.innerHTML = `
    <div style="position:fixed; inset:0; background:rgba(0,0,0,0.95); display:flex; justify-content:center; align-items:center; z-index:99999; flex-direction:column;">
      <button onclick="document.getElementById('globalGalleryModal').classList.remove('active')" style="position:absolute; top:30px; right:30px; background:transparent; border:none; color:white; font-size:2rem; cursor:pointer;"><i class="fas fa-times"></i></button>
      
      <div style="position:relative; width:90%; max-width:1000px; display:flex; justify-content:center; align-items:center;">
        ${currentGalleryImages.length > 1 ? `<button onclick="prevGalleryImg(event)" style="position:absolute; left:-50px; background:rgba(255,255,255,0.1); border:none; color:white; font-size:2rem; width:50px; height:50px; border-radius:50%; cursor:pointer;"><i class="fas fa-chevron-left"></i></button>` : ''}
        
        <img src="${imgUrl}" style="max-width:100%; max-height:80vh; object-fit:contain; box-shadow:0 0 30px rgba(0,0,0,0.8); border: 2px solid var(--gold);">
        
        ${currentGalleryImages.length > 1 ? `<button onclick="nextGalleryImg(event)" style="position:absolute; right:-50px; background:rgba(255,255,255,0.1); border:none; color:white; font-size:2rem; width:50px; height:50px; border-radius:50%; cursor:pointer;"><i class="fas fa-chevron-right"></i></button>` : ''}
      </div>
      
      ${currentGalleryImages.length > 1 ? `<div style="color:#aaa; margin-top:20px; font-size:1.2rem; font-weight:bold;">${currentGalleryIndex + 1} / ${currentGalleryImages.length}</div>` : ''}
    </div>
  `;
  container.classList.add('active');
}

window.nextGalleryImg = function(e) {
  if (e) e.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
  updateGalleryView();
};

window.prevGalleryImg = function(e) {
  if (e) e.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  updateGalleryView();
};


/* ── CUSTOM ITINERARY, BUDGET & PIE CHART ── */
function addToCustom(cat, type, name, cost) {
  const c = parseInt(cost) || 0;
  customItinerary.push({ cat, type, name, cost: c });
  allocatedBudget += c;
  
  if(globalCostBreakdown[cat] !== undefined) {
    globalCostBreakdown[cat] += c;
  }
  
  updateCustomUI();
}

function removeFromCustom(index) {
  const item = customItinerary[index];
  allocatedBudget -= item.cost;
  if(globalCostBreakdown[item.cat] !== undefined) {
    globalCostBreakdown[item.cat] = Math.max(0, globalCostBreakdown[item.cat] - item.cost);
  }
  customItinerary.splice(index, 1);
  updateCustomUI();
}

function updateCustomUI() {
  const rem = totalBudgetLimit - allocatedBudget;
  const pct = Math.min((allocatedBudget / totalBudgetLimit) * 100, 100);
  
  document.getElementById('spentAmount').innerText = '₹' + allocatedBudget.toLocaleString();
  document.getElementById('remAmount').innerText = '₹' + rem.toLocaleString();
  
  // Calculate Splits
  const sInput = document.getElementById('splitInput');
  const travelersCount = sInput ? parseInt(sInput.value) || 1 : 1;
  const perPerson = Math.round(allocatedBudget / travelersCount);
  if(document.getElementById('perPersonCost')) {
    document.getElementById('perPersonCost').innerText = '₹' + perPerson.toLocaleString();
  }
  
  // Calculate Carbon (Rough estimate: 0.1t per 10000 rupees spent)
  if(document.getElementById('co2Print')) {
    document.getElementById('co2Print').innerText = (allocatedBudget / 100000).toFixed(2) + 't';
  }

  // Update Pie Chart Data
  let totalTracked = globalCostBreakdown.flights + globalCostBreakdown.hotels + globalCostBreakdown.food + globalCostBreakdown.activities;
  if(totalTracked === 0) totalTracked = 1; // avoid div 0

  let pf = (globalCostBreakdown.flights / totalTracked) * 100;
  let ph = (globalCostBreakdown.hotels / totalTracked) * 100;
  let pfd = (globalCostBreakdown.food / totalTracked) * 100;
  let pa = (globalCostBreakdown.activities / totalTracked) * 100;

  if(document.getElementById('pctFlight')) document.getElementById('pctFlight').innerText = Math.round(pf);
  if(document.getElementById('pctHotel')) document.getElementById('pctHotel').innerText = Math.round(ph);
  if(document.getElementById('pctFood')) document.getElementById('pctFood').innerText = Math.round(pfd);
  if(document.getElementById('pctAct')) document.getElementById('pctAct').innerText = Math.round(pa);

  const pie = document.getElementById('pieChartElement');
  if(pie) {
    let p1 = pf;
    let p2 = p1 + ph;
    let p3 = p2 + pfd;
    pie.style.background = `conic-gradient(
      #FFD700 0% ${p1}%, 
      #6C63FF ${p1}% ${p2}%, 
      #ff6b6b ${p2}% ${p3}%, 
      #4ecdc4 ${p3}% 100%
    )`;
    document.getElementById('pieInnerTxt').innerText = Math.round(pct) + '%';
  }
  
  const list = document.getElementById('customItineraryList');
  if(list) {
    if(customItinerary.length === 0) {
      list.innerHTML = '<p>Your custom itinerary is empty. Add hotels and places to build your trip.</p>';
    } else {
      list.innerHTML = customItinerary.map((item, i) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px;">
          <div><strong style="color:var(--gold);">${item.type}:</strong> ${item.name}</div>
          <div style="display:flex; gap:10px; align-items:center;">
            <span>₹${item.cost.toLocaleString()}</span>
            <i class="fas fa-trash" style="cursor:pointer; color:#ff8080;" onclick="removeFromCustom(${i})"></i>
          </div>
        </div>
      `).join('');
    }
  }
}

/* ── DIETARY FILTER PILLS ── */
function filterDiet(tag, btnElem) {
  // UI update
  document.querySelectorAll('#dietPills .filter-pill').forEach(b => b.classList.remove('active'));
  btnElem.classList.add('active');

  // Filter Logic
  const rests = document.querySelectorAll('#hScrollRests .item-card');
  rests.forEach(card => {
    if(tag === 'All') {
      card.style.display = 'inline-block';
    } else {
      const tags = card.getAttribute('data-tags') || '';
      if(tags.includes(tag)) card.style.display = 'inline-block';
      else card.style.display = 'none';
    }
  });
}

/* ── COMPARE TRIPS ── */
function openCompareModal(currentDest) {
  const dest = currentDest || 'newyork';
  document.getElementById('compareModal').classList.add('active');
  const sel = document.getElementById('compareSelect');
  sel.value = dest === 'newyork' ? 'paris' : 'newyork';
  renderCompare(dest);
}

function closeCompareModal() {
  document.getElementById('compareModal').classList.remove('active');
}

function renderCompare(currentDest) {
  const target = document.getElementById('compareSelect').value;
  const dest1 = getGenericData(currentDest);
  const dest2 = getGenericData(target);
  
  document.getElementById('compareGrid').innerHTML = `
    <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px;">
      <h3 style="color:var(--gold); text-transform:uppercase; margin-bottom:15px;">${currentDest}</h3>
      <p><strong>Currency Rate:</strong> 1 INR = ${(1/dest1.currency.rate).toFixed(3)} ${dest1.currency.symbol}</p>
      <p><strong>Top Hotel:</strong> ${dest1.hotels[0].name} (₹${dest1.hotels[0].price})</p>
      <p><strong>Top Attraction:</strong> ${dest1.places[0].name}</p>
    </div>
    <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px;">
      <h3 style="color:var(--gold); text-transform:uppercase; margin-bottom:15px;">${target}</h3>
      <p><strong>Currency Rate:</strong> 1 INR = ${(1/dest2.currency.rate).toFixed(3)} ${dest2.currency.symbol}</p>
      <p><strong>Top Hotel:</strong> ${dest2.hotels[0].name} (₹${dest2.hotels[0].price})</p>
      <p><strong>Top Attraction:</strong> ${dest2.places[0].name}</p>
    </div>
  `;
}

/* ── MAP & ANIMATION ENGINE ── */
function initRealMap() {
  if(!currentLocData) return;
  const mapEl = document.getElementById('realMap');
  if(!mapEl) return;

  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  mapInstance = L.map('realMap').setView([currentLocData.centerLat, currentLocData.centerLng], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(mapInstance);

  // Add all markers
  [...currentLocData.hotels, ...currentLocData.restaurants, ...currentLocData.places].forEach(item => {
    L.marker([item.lat, item.lng]).addTo(mapInstance)
      .bindPopup(`<b>${item.name}</b><br><a href="https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}" target="_blank" style="color:#6C63FF; text-decoration:none;">Get Directions <i class="fas fa-external-link-alt"></i></a>`);
  });
}

function routeTo(lat, lng, name) {
  if (!mapInstance) return;
  if (routingControl) mapInstance.removeControl(routingControl);
  if (window.photoSpotLayer) mapInstance.removeLayer(window.photoSpotLayer);
  
  document.getElementById('realMap').scrollIntoView({behavior: 'smooth', block: 'center'});

  routingControl = L.Routing.control({
    waypoints: [ L.latLng(currentLocData.centerLat, currentLocData.centerLng), L.latLng(lat, lng) ],
    routeWhileDragging: false,
    lineOptions: { styles: [{color: '#D4AF37', weight: 4}] },
    createMarker: function(i, wp) {
      return L.marker(wp.latLng).bindPopup(i === 0 ? "City Center" : name);
    }
  }).addTo(mapInstance);
}

function showPhotoSpots(lat, lng, name) {
  if (!mapInstance) return;
  
  if (routingControl) mapInstance.removeControl(routingControl);
  if (window.photoSpotLayer) mapInstance.removeLayer(window.photoSpotLayer);
  
  document.getElementById('realMap').scrollIntoView({behavior: 'smooth', block: 'center'});
  
  // Zoom into the specific location to show roads and landmarks clearly
  mapInstance.setView([lat, lng], 17);
  
  window.photoSpotLayer = L.layerGroup().addTo(mapInstance);
  
  const cameraIcon = L.divIcon({
    html: '<div style="background-color: #FFD700; color: #000; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(255, 215, 0, 0.9); border: 2px solid #fff;"><i class="fas fa-camera"></i></div>',
    className: 'custom-camera-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  // Main location marker
  L.marker([lat, lng]).addTo(window.photoSpotLayer)
    .bindPopup(`<b>${name}</b><br>Main Attraction`).openPopup();
    
  // Mock photo spots around the attraction
  const spots = [
    { offsetLat: 0.0012, offsetLng: 0.0015, title: 'Panoramic Viewpoint', desc: 'Capture the whole scene from this elevated spot.' },
    { offsetLat: -0.0010, offsetLng: -0.0012, title: 'Historic Angle', desc: 'Great framing with historical architecture.' },
    { offsetLat: 0.0008, offsetLng: -0.0015, title: 'Street Level Portrait', desc: 'Perfect lighting for portraits.' },
    { offsetLat: -0.0005, offsetLng: 0.0014, title: 'Scenic Landscape Shot', desc: 'Wide open views for landscape photography.' }
  ];
  
  spots.forEach((spot) => {
    L.marker([lat + spot.offsetLat, lng + spot.offsetLng], { icon: cameraIcon }).addTo(window.photoSpotLayer)
      .bindPopup(`<div style="text-align:center;"><b>${spot.title}</b><br><span style="font-size:0.8rem;color:#555;">${spot.desc}</span><br><br><span style="color:#6C63FF;font-weight:bold;">Great photo spot near ${name}</span></div>`);
  });
  
  if (typeof showToast === 'function') {
    showToast(`Showing photo spots for ${name}`, 'fa-camera');
  }
}

function animateRouteDay(dayIndex) {
  if (!mapInstance) return;
  if (routingControl) mapInstance.removeControl(routingControl);
  
  const activities = currentLocData.itinerary[dayIndex].activities;
  if(!activities || activities.length < 2) {
    if (typeof showToast === 'function') showToast('Not enough activities to route this day.', 'fa-exclamation-triangle');
    return;
  }

  document.getElementById('realMap').scrollIntoView({behavior: 'smooth', block: 'center'});

  // Mock waypoints from Places (since itinerary items dont have strict lats in this mock)
  const wp = [
    L.latLng(currentLocData.centerLat, currentLocData.centerLng),
    L.latLng(currentLocData.places[0].lat, currentLocData.places[0].lng)
  ];

  routingControl = L.Routing.control({
    waypoints: wp,
    routeWhileDragging: false,
    lineOptions: { styles: [{color: '#6C63FF', weight: 5, className: 'animated-route'}] },
    createMarker: function() { return null; }
  }).addTo(mapInstance);
  
  if (typeof showToast === 'function') {
    showToast('Day Route Animated! (Mock Waypoints used)', 'fa-route');
  }
}

/* ── UTILITIES ── */
function toggleDarkMode() { document.body.classList.toggle('light-mode'); }
function scrollH(id, amount) { document.getElementById(id).scrollBy({ left: amount, behavior: 'smooth' }); }
function filterCards(val) {
  const lower = val.toLowerCase();
  document.querySelectorAll('.item-card').forEach(card => {
    const title = card.querySelector('.item-title').textContent.toLowerCase();
    card.style.display = title.includes(lower) ? 'inline-block' : 'none';
  });
}
function highlightLocationOnMap(lat, lng, name) {
  if (!mapInstance) return;
  if (routingControl) mapInstance.removeControl(routingControl);
  
  document.getElementById('realMap').scrollIntoView({behavior: 'smooth', block: 'center'});
  
  mapInstance.flyTo([lat, lng], 16, { animate: true, duration: 1.5 });
  
  // Clear previous highlighted markers (if any custom logic needed, or just add one)
  L.marker([lat, lng]).addTo(mapInstance)
    .bindPopup(`<div style="text-align:center;"><b>${name}</b><br><span style="color:var(--gold);">Itinerary Stop</span></div>`).openPopup();
    
  if (typeof showToast === 'function') {
    showToast(`Navigating to ${name}`, 'fa-map-marker-alt');
  }
}

function downloadPDF() {
  const element = document.getElementById('downloadableContent');
  
  // Apply print styles temporarily
  document.body.classList.add('pdf-export-mode');
  
  const opt = { 
    margin: 0.3, 
    filename: 'My_Premium_Itinerary.pdf', 
    image: { type: 'jpeg', quality: 0.98 }, 
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: 1200 }, 
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } 
  };
  
  html2pdf().set(opt).from(element).save().then(() => {
    document.body.classList.remove('pdf-export-mode');
  });
}
function simulateOfflineDownload(event) {
  const btn = event.currentTarget;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
  setTimeout(() => { btn.innerHTML = '<i class="fas fa-check"></i> Map Saved'; }, 1500);
}
function playMockAudio() {
  if (typeof showToast === 'function') {
    showToast('Playing audio guide...', 'fa-headphones');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursorSleek');
  if(cursor) {
    document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
    document.querySelectorAll('button, a, input, select').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  /* ── AI TRAVEL CONCIERGE LOGIC ── */
  window.toggleAiChat = function() {
    const chat = document.getElementById('aiChatWindow');
    if (chat) chat.classList.toggle('active');
  };
  window.handleAiKeyPress = function(e) {
    if (e.key === 'Enter') window.sendAiMessage();
  };
  window.sendAiMessage = function() {
    const input = document.getElementById('aiInput');
    const body = document.getElementById('aiChatBody');
    if (!input || !input.value.trim()) return;
    
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg user';
    userMsg.innerText = input.value;
    body.appendChild(userMsg);
    
    const query = input.value;
    input.value = '';
    body.scrollTop = body.scrollHeight;
    
    const typing = document.createElement('div');
    typing.className = 'ai-msg typing';
    typing.innerHTML = '<i class="fas fa-ellipsis-h fa-fade"></i>';
    body.appendChild(typing);
    
    setTimeout(() => {
      body.removeChild(typing);
      const aiMsg = document.createElement('div');
      aiMsg.className = 'ai-msg';
      if (query.toLowerCase().includes('weather')) {
        aiMsg.innerText = "The weather looks great for your trip! Expect mostly sunny days.";
      } else if (query.toLowerCase().includes('translate')) {
        aiMsg.innerText = "Sure! 'Thank you' is 'Merci' in French, or 'Arigato' in Japanese.";
      } else {
        aiMsg.innerText = "That's a great question! Our premium concierges are reviewing your itinerary and will have an answer shortly.";
      }
      body.appendChild(aiMsg);
      body.scrollTop = body.scrollHeight;
    }, 1200);
  };

  /* ── TOAST NOTIFICATION UTILITY ── */
  window.showToast = function(msg, iconClass = 'fa-info-circle') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    const toastIcon = document.getElementById('toastIcon');
    if (!toast || !toastMsg) return;
    toastMsg.innerText = msg;
    if (toastIcon) toastIcon.className = `fas ${iconClass}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  };

  document.body.classList.add('ready');
});
