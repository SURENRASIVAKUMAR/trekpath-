// dashboard.js - Final Polish UI Update with 20 Advanced Features

const globalData = {
  newyork: {
    heroImg: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
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
        activities: [
          { time: '08:00 AM', place: 'Ess-a-Bagel', duration: '1 hr', dist: '-', transport: 'Walk', cost: '1200', icon: 'fa-coffee' },
          { time: '09:30 AM', place: 'Empire State Building', duration: '2.5 hrs', dist: '1.2 km', transport: 'Walk', cost: '3500', icon: 'fa-building' },
          { time: '01:00 PM', place: 'Katz\'s Deli', duration: '1.5 hrs', dist: '3.5 km', transport: 'Subway', cost: '2500', icon: 'fa-utensils' },
          { time: '03:00 PM', place: 'Times Square', duration: '2 hrs', dist: '4.0 km', transport: 'Subway', cost: '0', icon: 'fa-camera' }
        ]
      },
      {
        dayLabel: 'Day 2: Downtown & Brooklyn Bridges',
        activities: [
          { time: '09:00 AM', place: '9/11 Memorial & Museum', duration: '3 hrs', dist: '-', transport: 'Subway', cost: '2800', icon: 'fa-landmark' },
          { time: '12:30 PM', place: 'Los Tacos No.1', duration: '1 hr', dist: '2.0 km', transport: 'Walk', cost: '1500', icon: 'fa-utensils' },
          { time: '02:00 PM', place: 'Brooklyn Bridge Walk', duration: '2 hrs', dist: '3.0 km', transport: 'Walk', cost: '0', icon: 'fa-walking' },
          { time: '05:00 PM', place: 'Juliana\'s Pizza (Brooklyn)', duration: '1.5 hrs', dist: '1.0 km', transport: 'Walk', cost: '3000', icon: 'fa-pizza-slice' }
        ]
      },
      {
        dayLabel: 'Day 3: Art & Central Park',
        activities: [
          { time: '10:00 AM', place: 'The Metropolitan Museum of Art', duration: '4 hrs', dist: '-', transport: 'Subway', cost: '2500', icon: 'fa-palette' },
          { time: '02:00 PM', place: 'Central Park Picnic', duration: '2 hrs', dist: '0.5 km', transport: 'Walk', cost: '1500', icon: 'fa-tree' },
          { time: '05:00 PM', place: 'The Plaza Hotel (High Tea)', duration: '2 hrs', dist: '1.5 km', transport: 'Cab', cost: '8000', icon: 'fa-mug-hot' }
        ]
      }
    ],
    hotels: [
      { name: 'The Plaza Hotel', price: '45000', rating: '4.9', lat: 40.7644, lng: -73.9744, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=400&q=80', distance: '100m to Central Park', desc: 'Luxury stay overlooking Central Park. Features Spa, Fine Dining, and historic architecture.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Deluxe, Suite, Royal', amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Valet'], gallery: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'] },
      { name: 'YOTEL New York', price: '15000', rating: '4.5', lat: 40.7590, lng: -73.9934, img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80', distance: '300m to Times Square', desc: 'Modern cabins in Times Square. Perfect for solo travelers or couples on a budget.', checkIn: '03:00 PM', checkOut: '11:00 AM', rooms: 'Premium Queen, VIP View', amenities: ['Smart TV', 'Terrace', 'Gym', 'Robot Luggage'], gallery: ['https://images.unsplash.com/photo-1542314831-c6a420325142?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&q=80'] },
      { name: 'The Standard High Line', price: '28000', rating: '4.7', lat: 40.7409, lng: -74.0078, img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80', distance: 'Meatpacking District', desc: 'Boutique hotel with panoramic views of the Hudson River and High Line.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'Standard Queen, King, Corner Suite', amenities: ['Rooftop Bar', 'Free WiFi', 'Gym', 'Pet Friendly'], gallery: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80','https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80','https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80'] },
      { name: '1 Hotel Brooklyn Bridge', price: '35000', rating: '4.8', lat: 40.7020, lng: -73.9950, img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=400&q=80', distance: 'Brooklyn Bridge Park', desc: 'Eco-luxury waterfront hotel featuring unparalleled views of the Manhattan skyline.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'King, Double, Riverhouse Suite', amenities: ['Rooftop Pool', 'Spa', 'Organic Cafe', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80','https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'] },
      { name: 'Arlo SoHo', price: '20000', rating: '4.4', lat: 40.7243, lng: -74.0072, img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=400&q=80', distance: 'SoHo', desc: 'Micro-hotel offering smartly designed rooms and vibrant communal spaces.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'City King, Courtyard Queen', amenities: ['Courtyard', 'Bar', 'Free Bikes', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80','https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80','https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80'] },
      { name: 'The Beekman', price: '40000', rating: '4.8', lat: 40.7114, lng: -74.0069, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80', distance: 'Financial District', desc: 'Historic 19th-century luxury hotel with a stunning nine-story atrium.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior King, Studio, Premium Suite', amenities: ['Fine Dining', 'Bar', 'Gym', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80','https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80','https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'] },
      { name: 'Lotte New York Palace', price: '50000', rating: '4.9', lat: 40.7580, lng: -73.9749, img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=400&q=80', distance: 'Midtown East', desc: 'Grand luxury hotel combining historic mansions with a modern high-rise tower.', checkIn: '04:00 PM', checkOut: '11:00 AM', rooms: 'Superior, Tower Room, Suite', amenities: ['Spa', 'Room Service', 'Bar', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80','https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80','https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80'] },
      { name: 'Pod 51 Hotel', price: '12000', rating: '4.3', lat: 40.7562, lng: -73.9687, img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80', distance: 'Midtown East', desc: 'Budget-friendly micro hotel with colorful decor and a rooftop deck.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Bunk Bed, Queen, Studio', amenities: ['Rooftop Deck', 'Cafe', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80','https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80','https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&q=80'] },
      { name: 'Crosby Street Hotel', price: '55000', rating: '4.9', lat: 40.7233, lng: -73.9975, img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80', distance: 'SoHo', desc: 'Vibrant, art-filled luxury boutique hotel set on a quiet cobblestone street.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior, Luxury, Suite', amenities: ['Cinema', 'Sculpture Garden', 'Gym', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80','https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'] },
      { name: 'Moxy NYC Times Square', price: '18000', rating: '4.4', lat: 40.7523, lng: -73.9880, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80', distance: 'Times Square', desc: 'Energetic, millennial-focused hotel with a massive rooftop bar and mini-golf.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'King, Double Double, Bunk', amenities: ['Magic Hour Rooftop', 'Bar', 'Gym', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80','https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80'] },
      { name: 'The Langham', price: '48000', rating: '4.8', lat: 40.7501, lng: -73.9837, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=400&q=80', distance: 'Fifth Avenue', desc: 'Refined modern luxury with oversized rooms and Michelin-starred dining.', checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Superior, Executive, Penthouse', amenities: ['Spa', 'Michelin Dining', 'Gym', 'Valet'], gallery: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80','https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80','https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80'] },
      { name: 'Row NYC Hotel', price: '14000', rating: '4.0', lat: 40.7589, lng: -73.9870, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80', distance: 'Times Square', desc: 'Hip, artsy hotel in the heart of the theater district with a food hall.', checkIn: '04:00 PM', checkOut: '12:00 PM', rooms: 'Standard, Premium, Suite', amenities: ['Food Hall', 'Gym', 'Lounge', 'Free WiFi'], gallery: ['https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80','https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'] }
    ],
    restaurants: [
      { name: 'Le Bernardin', type: 'Fine Dining', lat: 40.7614, lng: -73.9816, img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', locText: 'Near Times Square', travel: '10 min walk', timing: '12:00 PM - 10:30 PM', cost: '15000', tags: ['Fine Dining', 'Seafood'], menu: [{ name: 'Caviar Tasting', desc: 'Imperial Ossetra with classic garnish', price: '$120', tags: ['GF'] }, { name: 'Poached Halibut', desc: 'With wild mushroom consommé', price: '$65', tags: ['GF', 'Halal'] }], reviews: '"Best seafood in NY." - FoodCrit' },
      { name: 'Katz\'s Delicatessen', type: 'Iconic Deli', lat: 40.7222, lng: -73.9874, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80', locText: 'Lower East Side', travel: '15 min cab', timing: '08:00 AM - 11:00 PM', cost: '2500', tags: ['Casual', 'Meat'], menu: [{ name: 'Pastrami Sandwich', desc: 'Legendary hand-carved pastrami on rye', price: '$25', tags: [] }, { name: 'Matzo Ball Soup', desc: 'Classic Jewish comfort food', price: '$10', tags: [] }], reviews: '"A historic must-visit." - NYT' },
      { name: 'Peter Luger Steak House', type: 'Steakhouse', lat: 40.7099, lng: -73.9625, img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=80', locText: 'Brooklyn', travel: '20 min subway', timing: '11:45 AM - 09:45 PM', cost: '12000', tags: ['Steak', 'Iconic'], menu: [{ name: 'Steak for Two', desc: 'Dry-aged porterhouse', price: '$115', tags: ['GF'] }, { name: 'Thick Cut Bacon', desc: 'Extra thick sizzling bacon', price: '$8', tags: [] }], reviews: '"Best steak in the world." - Critic' },
      { name: 'Balthazar', type: 'French Brasserie', lat: 40.7226, lng: -73.9981, img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80', locText: 'SoHo', travel: '15 min subway', timing: '08:00 AM - 11:00 PM', cost: '5000', tags: ['French', 'Bustling'], menu: [{ name: 'Steak Frites', desc: 'Classic steak with French fries', price: '$42', tags: [] }, { name: 'Onion Soup', desc: 'Traditional French onion soup', price: '$18', tags: [] }], reviews: '"A slice of Paris in NY." - Foodie' },
      { name: 'Halal Guys', type: 'Street Food', lat: 40.7618, lng: -73.9793, img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=400&q=80', locText: 'Midtown (53rd & 6th)', travel: '10 min walk', timing: '10:00 AM - 04:00 AM', cost: '1000', tags: ['Street Food', 'Halal'], menu: [{ name: 'Chicken & Gyro Platter', desc: 'Over rice with white sauce', price: '$10', tags: ['Halal'] }], reviews: '"Legendary street cart." - Local' },
      { name: 'Carmine\'s', type: 'Italian Family Style', lat: 40.7575, lng: -73.9868, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80', locText: 'Times Square', travel: '5 min walk', timing: '11:30 AM - 11:00 PM', cost: '4000', tags: ['Italian', 'Groups'], menu: [{ name: 'Penne Alla Vodka', desc: 'Massive family portion', price: '$35', tags: ['Vegetarian'] }, { name: 'Chicken Parm', desc: 'Crispy chicken with mozzarella', price: '$40', tags: [] }], reviews: '"Huge portions, great flavor." - Eater' },
      { name: 'Ippudo NY', type: 'Ramen', lat: 40.7309, lng: -73.9904, img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80', locText: 'East Village', travel: '15 min subway', timing: '11:00 AM - 10:00 PM', cost: '2000', tags: ['Japanese', 'Noodles'], menu: [{ name: 'Akamaru Modern', desc: 'Tonkotsu broth with special garlic oil', price: '$18', tags: [] }, { name: 'Pork Buns', desc: 'Steamed buns with pork chashu', price: '$9', tags: [] }], reviews: '"Best ramen hands down." - Yelp' },
      { name: 'Joe\'s Pizza', type: 'Pizzeria', lat: 40.7305, lng: -74.0021, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', locText: 'Greenwich Village', travel: '15 min subway', timing: '10:00 AM - 04:00 AM', cost: '500', tags: ['Pizza', 'Casual'], menu: [{ name: 'Cheese Slice', desc: 'Classic NY style cheese slice', price: '$4', tags: ['Vegetarian'] }], reviews: '"The quintessential NY slice." - Timeout' },
      { name: 'Gramercy Tavern', type: 'New American', lat: 40.7386, lng: -73.9882, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80', locText: 'Flatiron', travel: '10 min subway', timing: '12:00 PM - 10:00 PM', cost: '10000', tags: ['Fine Dining', 'American'], menu: [{ name: 'Tasting Menu', desc: 'Seasonal ingredients', price: '$150', tags: [] }], reviews: '"Impeccable service and food." - Zagat' },
      { name: 'Los Tacos No.1', type: 'Mexican', lat: 40.7423, lng: -74.0060, img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80', locText: 'Chelsea Market', travel: '20 min walk', timing: '11:00 AM - 10:00 PM', cost: '1500', tags: ['Tacos', 'Fast Casual'], menu: [{ name: 'Adobada Taco', desc: 'Marinated pork taco', price: '$4.50', tags: [] }, { name: 'Carne Asada', desc: 'Grilled steak taco', price: '$5', tags: ['GF'] }], reviews: '"Most authentic tacos in NY." - Local' },
      { name: 'Veselka', type: 'Ukrainian Diner', lat: 40.7289, lng: -73.9870, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80', locText: 'East Village', travel: '15 min subway', timing: '08:00 AM - 11:00 PM', cost: '2000', tags: ['Diner', 'Comfort'], menu: [{ name: 'Pierogi', desc: 'Potato and cheese dumplings', price: '$12', tags: ['Vegetarian'] }, { name: 'Borscht', desc: 'Classic beet soup', price: '$9', tags: [] }], reviews: '"Late night comfort food haven." - Eater' },
      { name: 'Eleven Madison Park', type: 'Fine Dining', lat: 40.7416, lng: -73.9872, img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=400&q=80', locText: 'Flatiron', travel: '10 min subway', timing: '05:30 PM - 10:00 PM', cost: '30000', tags: ['Fine Dining', 'Vegan'], menu: [{ name: 'Plant-based Tasting', desc: 'Multi-course vegan journey', price: '$335', tags: ['Vegan'] }], reviews: '"A culinary masterpiece." - NYT' }
    ],
    places: [
      { name: 'Statue of Liberty', img: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=400&q=80', desc: 'Iconic monument representing freedom and democracy.', fee: '2000', loc: 'Battery Park', lat: 40.6892, lng: -74.0445, crowd: 'high', tour: '10:00 AM' },
      { name: 'Central Park', img: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=400&q=80', desc: 'Massive urban park offering lakes, trails, and a zoo.', fee: '0', loc: 'Manhattan', lat: 40.7812, lng: -73.9665, crowd: 'low', tour: 'Free' },
      { name: 'Empire State Building', img: 'https://images.unsplash.com/photo-1518882174711-1de40238921b?auto=format&fit=crop&w=400&q=80', desc: 'Famous Art Deco skyscraper with 360-degree views of the city.', fee: '3500', loc: 'Midtown', lat: 40.7484, lng: -73.9857, crowd: 'high', tour: '04:00 PM' },
      { name: 'The Metropolitan Museum of Art', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80', desc: 'One of the world\'s largest and finest art museums.', fee: '2500', loc: 'Upper East Side', lat: 40.7794, lng: -73.9632, crowd: 'high', tour: '11:00 AM' },
      { name: 'Times Square', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=400&q=80', desc: 'Bustling intersection renowned for its neon lights and billboards.', fee: '0', loc: 'Midtown', lat: 40.7580, lng: -73.9855, crowd: 'high', tour: 'Free' },
      { name: 'Brooklyn Bridge', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80', desc: 'Historic suspension bridge connecting Manhattan and Brooklyn.', fee: '0', loc: 'Lower Manhattan', lat: 40.7061, lng: -73.9969, crowd: 'medium', tour: 'Free' },
      { name: 'The High Line', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80', desc: 'Elevated linear park built on a historic freight rail line.', fee: '0', loc: 'Chelsea', lat: 40.7480, lng: -74.0048, crowd: 'medium', tour: 'Free' },
      { name: 'One World Observatory', img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=400&q=80', desc: 'Observation deck at the top of the tallest building in the Western Hemisphere.', fee: '3800', loc: 'Financial District', lat: 40.7130, lng: -74.0131, crowd: 'high', tour: '02:00 PM' },
      { name: 'Museum of Modern Art (MoMA)', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80', desc: 'Leading museum showcasing contemporary and modern art.', fee: '2000', loc: 'Midtown', lat: 40.7614, lng: -73.9776, crowd: 'medium', tour: '01:00 PM' },
      { name: 'Grand Central Terminal', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80', desc: 'Iconic beaux-arts train station with a celestial ceiling.', fee: '0', loc: 'Midtown', lat: 40.7527, lng: -73.9772, crowd: 'high', tour: 'Free' },
      { name: 'Top of the Rock', img: 'https://images.unsplash.com/photo-1542314831-c6a420325142?auto=format&fit=crop&w=400&q=80', desc: 'Observation deck offering spectacular skyline views, including the Empire State Building.', fee: '3400', loc: 'Rockefeller Center', lat: 40.7593, lng: -73.9794, crowd: 'medium', tour: '05:00 PM (Sunset)' },
      { name: '9/11 Memorial & Museum', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=400&q=80', desc: 'Memorial and museum honoring the victims of the September 11 attacks.', fee: '2800', loc: 'Financial District', lat: 40.7115, lng: -74.0133, crowd: 'high', tour: '10:00 AM' }
    ]
  },
  paris: {
    heroImg: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
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
        activities: [
          { time: '09:00 AM', place: 'Louvre Museum', duration: '3 hrs', dist: '2 km', transport: 'Metro', cost: '1500', icon: 'fa-landmark' },
          { time: '12:30 PM', place: 'Cafe de Flore', duration: '1.5 hrs', dist: '1.5 km', transport: 'Walk', cost: '2000', icon: 'fa-coffee' }
        ]
      }
    ],
    hotels: [
      { name: 'Ritz Paris', price: '90000', rating: '5.0', lat: 48.8683, lng: 2.3284,
        img: 'https://images.unsplash.com/photo-1542314831-c6a420325142?auto=format&fit=crop&w=400&q=80', distance: 'Place Vendôme', 
        desc: 'Legendary hotel with exquisite decor, fine dining, and unmatched luxury.',
        checkIn: '03:00 PM', checkOut: '12:00 PM', rooms: 'Deluxe, Grand Suite',
        amenities: ['Spa', 'Michelin Star Dining', 'Indoor Pool', 'Butler'],
        gallery: ['https://images.unsplash.com/photo-1542314831-c6a420325142?w=800&q=80','https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80','https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80'] }
    ],
    restaurants: [
      { name: 'Le Jules Verne', type: 'Fine Dining', lat: 48.8584, lng: 2.2945, img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80', 
        locText: 'Eiffel Tower', travel: 'Elevator', timing: '12:00 PM - 9:30 PM', cost: '25000', tags: ['Fine Dining', 'Romantic'],
        menu: [{name: 'Lobster Souffle', desc:'Tender lobster with rich cream sauce', price:'€110', tags:['GF']}], reviews: '"Dining in the clouds." - Guide' }
    ],
    places: [
      { name: 'Eiffel Tower', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=400&q=80', desc: 'Iron Lady of Paris.', fee: '2500', loc: 'Champ de Mars', lat: 48.8584, lng: 2.2945, crowd: 'high', tour: '06:00 PM' }
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
          <div style="display:flex; gap:10px; margin:10px 0;">
            <button class="item-btn" onclick="routeTo(${p.lat}, ${p.lng}, '${p.name}')">Map Route</button>
            <button class="item-btn" onclick="alert('Mock booking initiated for ${p.tour}')"><i class="fas fa-ticket-alt"></i> ${p.tour}</button>
          </div>
          <button class="item-btn" style="border-color:#6C63FF; color:#6C63FF;" onclick="addToCustom('activities', 'Activity', '${p.name}', ${p.fee})"><i class="fas fa-plus"></i> Add to Itinerary</button>
        </div>
      </div>
  `).join('');

  // Build Itinerary
  let itinHtml = currentLocData.itinerary.map((day, idx) => `
    <div class="day-block">
      <div class="day-title">${day.dayLabel} <button class="btn-sm" style="float:right;" onclick="animateRouteDay(${idx})"><i class="fas fa-route"></i> Animate Route</button></div>
      ${day.activities.map(act => `
        <div class="it-card">
          <div class="it-time">${act.time}</div>
          <div class="it-icon"><i class="fas ${act.icon}"></i></div>
          <div class="it-details">
            <h4>${act.place}</h4>
            <p><i class="fas fa-hourglass-half"></i> ${act.duration} &nbsp;|&nbsp; <i class="fas fa-car"></i> ${act.transport} (${act.dist})</p>
            <div class="it-meta">
              <span>Cost: ₹${parseInt(act.cost).toLocaleString()}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // HTML Structure Injection
  const dashHtml = `
    <div id="premiumDashboard">
      
      <div class="utility-bar">
        <div>
          <button class="util-btn" onclick="toggleDarkMode()"><i class="fas fa-moon"></i> Theme</button>
          <button class="util-btn" onclick="downloadPDF()"><i class="fas fa-file-pdf"></i> Export PDF</button>
          <button class="util-btn" onclick="openCompareModal('${destinationKey}')"><i class="fas fa-exchange-alt"></i> Compare Trips</button>
          <button class="util-btn" onclick="simulateOfflineDownload(event)"><i class="fas fa-download"></i> Offline Map</button>
          <button class="util-btn" onclick="alert('Metro Map overlay mocked!')"><i class="fas fa-subway"></i> Transport</button>
        </div>
        <div>
          <div id="google_translate_element" style="display:inline-block;"></div>
          <input type="text" class="search-filter" placeholder="Search places..." onkeyup="filterCards(this.value)">
        </div>
      </div>

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
              <button class="btn-sm" style="background:#2ecc71;" onclick="alert('Redirecting to Carbon Offset partners...')">Offset</button>
            </div>
          </div>
        </div>

        <div class="widget-box" style="border-color:#6C63FF;">
          <div class="widget-head" style="color:#6C63FF;"><i class="fas fa-list-check"></i> Custom Itinerary</div>
          <div id="customItineraryList" style="max-height: 220px; overflow-y: auto; font-size:0.85rem; color:#ccc;">
            <p>Your custom itinerary is empty. Add hotels and places to build your trip.</p>
          </div>
        </div>
      </div>

      <div id="downloadableContent" style="width:100%;">
        
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
              <button class="util-btn" onclick="alert('Photo spots overlaid on Map!')"><i class="fas fa-camera-retro"></i> Photo Spots</button>
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
  container.innerHTML = `
    <div class="f-modal-content">
      <button class="f-modal-close" onclick="document.getElementById('hotelModal').classList.remove('active')"><i class="fas fa-times"></i></button>
      <h3 style="color:var(--gold); margin-top:0;">${h.name} - 360° Room Viewer & Details</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-top:20px;">
        <img src="${h.gallery[0]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
        <img src="${h.gallery[1]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
        <img src="${h.gallery[2]}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      </div>
      <div style="margin-top:20px; color:#ccc;">
        <p><strong>Price:</strong> ₹${parseInt(h.price).toLocaleString()} &nbsp; | &nbsp; <strong>Rating:</strong> <i class="fas fa-star" style="color:#FFD700;"></i> ${h.rating}</p>
        <p>${h.desc}</p>
        <p><strong>Check-in:</strong> ${h.checkIn} &nbsp; | &nbsp; <strong>Check-out:</strong> ${h.checkOut}</p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin:15px 0;">
          ${h.amenities.map(a => `<span style="background:var(--gold); color:#000; padding:4px 10px; border-radius:20px; font-size:0.8rem;">${a}</span>`).join('')}
        </div>
        <button class="util-btn" style="background:var(--gold); color:#000; margin-top:10px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('hotels', 'Hotel', '${h.name}', ${h.price}); alert('Hotel added to plan!');"><i class="fas fa-check-circle"></i> Book Room & Add to Plan</button>
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

      <button class="util-btn" style="background:var(--gold); color:#000; margin-top:25px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('food', 'Dining', '${r.name}', ${r.cost}); alert('Table Reserved & Added!');"><i class="fas fa-calendar-check"></i> Reserve Table</button>
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
        <img src="${p.img}" style="width:100%; height:300px; object-fit:cover; border-radius:12px; margin-bottom:15px;">
        <p><strong>Location:</strong> ${p.loc} &nbsp; | &nbsp; <strong>Entry Fee:</strong> ₹${p.fee}</p>
        <p>${p.desc}</p>
        <div style="display:flex; justify-content:space-between; color:#aaa; margin-top:15px;">
          <span><i class="fas fa-clock"></i> Recommended: ${p.tour}</span>
          <span><i class="fas fa-users"></i> Crowd: ${p.crowd.toUpperCase()}</span>
        </div>
        <button class="util-btn" style="background:var(--gold); color:#000; margin-top:20px; width:100%; font-size:1.1rem; padding:12px;" onclick="addToCustom('activities', 'Activity', '${p.name}', ${p.fee}); alert('Activity added to plan!');"><i class="fas fa-ticket-alt"></i> Book Tickets & Add to Plan</button>
        ${getNearbyPlacesHtml(p.lat, p.lng, p.name)}
      </div>
    </div>
  `;
  container.classList.add('active');
}


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

function animateRouteDay(dayIndex) {
  if (!mapInstance) return;
  if (routingControl) mapInstance.removeControl(routingControl);
  
  const activities = currentLocData.itinerary[dayIndex].activities;
  if(!activities || activities.length < 2) return alert('Not enough activities to route this day.');

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
  alert('Day Route Animated! (Mock Waypoints used)');
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
function downloadPDF() {
  const element = document.getElementById('downloadableContent');
  const opt = { 
    margin: 0.5, 
    filename: 'My_Trip_Itinerary.pdf', 
    image: { type: 'jpeg', quality: 0.98 }, 
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#1E1E1E', letterRendering: true }, 
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } 
  };
  html2pdf().set(opt).from(element).save();
}
function simulateOfflineDownload(event) {
  const btn = event.currentTarget;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
  setTimeout(() => { btn.innerHTML = '<i class="fas fa-check"></i> Map Saved'; }, 1500);
}
function playMockAudio() {
  alert('Playing audio guide: "Welcome to this historic monument. Built centuries ago..."');
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
  document.body.classList.add('ready');
});
