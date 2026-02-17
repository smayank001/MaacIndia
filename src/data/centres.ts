export interface Centre {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  courses: string[];
}

export interface StateData {
  slug: string;
  name: string;
  cities: string[];
}

export const states: StateData[] = [
  { slug: "maharashtra", name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik"] },
  { slug: "delhi", name: "Delhi", cities: ["New Delhi"] },
  { slug: "karnataka", name: "Karnataka", cities: ["Bangalore", "Mysore"] },
  { slug: "tamil-nadu", name: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] },
  { slug: "telangana", name: "Telangana", cities: ["Hyderabad"] },
  { slug: "west-bengal", name: "West Bengal", cities: ["Kolkata"] },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", cities: ["Lucknow", "Noida", "Varanasi"] },
  { slug: "rajasthan", name: "Rajasthan", cities: ["Jaipur", "Jodhpur"] },
  { slug: "gujarat", name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", cities: ["Bhopal", "Indore"] },
  { slug: "kerala", name: "Kerala", cities: ["Kochi", "Thiruvananthapuram"] },
  { slug: "punjab", name: "Punjab", cities: ["Chandigarh", "Ludhiana"] },
  { slug: "odisha", name: "Odisha", cities: ["Bhubaneswar"] },
  { slug: "assam", name: "Assam", cities: ["Guwahati"] },
  { slug: "jharkhand", name: "Jharkhand", cities: ["Ranchi"] },
  { slug: "bihar", name: "Bihar", cities: ["Patna"] },
];

export const centres: Centre[] = [
  { slug: "maac-andheri", name: "MAAC Andheri", city: "Mumbai", state: "Maharashtra", address: "201, Ackruti Centre Point, MIDC, Andheri East, Mumbai - 400093", phone: "+91-22-40101234", email: "andheri@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Art & Design", "ADIDG Plus"] },
  { slug: "maac-dadar", name: "MAAC Dadar", city: "Mumbai", state: "Maharashtra", address: "3rd Floor, Shivaji Mandir Marg, Dadar West, Mumbai - 400028", phone: "+91-22-40105678", email: "dadar@maacindia.com", courses: ["D3D", "VFX Prime", "Digital Filmmaking", "DGWA"] },
  { slug: "maac-thane", name: "MAAC Thane", city: "Mumbai", state: "Maharashtra", address: "5th Floor, Kapil Complex, Thane West, Mumbai - 400601", phone: "+91-22-40109012", email: "thane@maacindia.com", courses: ["AD3D EDGE Plus", "VFX Prime", "Graphic & Web Design"] },
  { slug: "maac-aundh", name: "MAAC Aundh", city: "Pune", state: "Maharashtra", address: "5th Floor, ICC Trade Tower, Senapati Bapat Road, Pune - 411016", phone: "+91-20-40101234", email: "aundh@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Digital Filmmaking"] },
  { slug: "maac-fc-road", name: "MAAC FC Road", city: "Pune", state: "Maharashtra", address: "2nd Floor, Dnyaneshwar Paduka Chowk, FC Road, Pune - 411004", phone: "+91-20-40105678", email: "fcroad@maacindia.com", courses: ["D3D", "Game Art & Design", "ADIDG Plus"] },
  { slug: "maac-sitabuldi", name: "MAAC Sitabuldi", city: "Nagpur", state: "Maharashtra", address: "1st Floor, Central Bazaar Road, Sitabuldi, Nagpur - 440012", phone: "+91-712-4010123", email: "nagpur@maacindia.com", courses: ["D3D", "VFX Prime", "DGWA"] },
  { slug: "maac-nashik", name: "MAAC Nashik", city: "Nashik", state: "Maharashtra", address: "3rd Floor, Sarda Circle, College Road, Nashik - 422005", phone: "+91-253-4010123", email: "nashik@maacindia.com", courses: ["D3D", "ADIDG Plus", "Video Editing Pro"] },
  { slug: "maac-connaught-place", name: "MAAC Connaught Place", city: "New Delhi", state: "Delhi", address: "3rd Floor, Statesman House, Barakhamba Road, New Delhi - 110001", phone: "+91-11-40101234", email: "cp@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "IPVAD XR", "Game Development"] },
  { slug: "maac-rajouri-garden", name: "MAAC Rajouri Garden", city: "New Delhi", state: "Delhi", address: "2nd Floor, J-Block Market, Rajouri Garden, New Delhi - 110027", phone: "+91-11-40105678", email: "rajouri@maacindia.com", courses: ["D3D", "VFX Prime", "Digital Filmmaking", "ADIDG Plus"] },
  { slug: "maac-koramangala", name: "MAAC Koramangala", city: "Bangalore", state: "Karnataka", address: "1st Floor, HM Tower, 100 Feet Road, Koramangala, Bangalore - 560034", phone: "+91-80-40101234", email: "koramangala@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Art & Design", "AR/VR Development"] },
  { slug: "maac-jayanagar", name: "MAAC Jayanagar", city: "Bangalore", state: "Karnataka", address: "4th Floor, 11th Main Road, 4th Block, Jayanagar, Bangalore - 560011", phone: "+91-80-40105678", email: "jayanagar@maacindia.com", courses: ["D3D", "VFX Prime", "ADIDG Plus"] },
  { slug: "maac-mysore", name: "MAAC Mysore", city: "Mysore", state: "Karnataka", address: "2nd Floor, Saraswathipuram Main Road, Mysore - 570009", phone: "+91-821-4010123", email: "mysore@maacindia.com", courses: ["D3D", "ADIDG Plus", "DGWA"] },
  { slug: "maac-t-nagar", name: "MAAC T Nagar", city: "Chennai", state: "Tamil Nadu", address: "2nd Floor, Spencer Plaza, Mount Road, Chennai - 600002", phone: "+91-44-40101234", email: "tnagar@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Digital Filmmaking"] },
  { slug: "maac-adyar", name: "MAAC Adyar", city: "Chennai", state: "Tamil Nadu", address: "1st Floor, LB Road, Adyar, Chennai - 600020", phone: "+91-44-40105678", email: "adyar@maacindia.com", courses: ["D3D", "Game Art & Design", "ADIDG Plus"] },
  { slug: "maac-coimbatore", name: "MAAC Coimbatore", city: "Coimbatore", state: "Tamil Nadu", address: "3rd Floor, RS Puram, Coimbatore - 641002", phone: "+91-422-4010123", email: "coimbatore@maacindia.com", courses: ["D3D", "VFX Prime", "DGWA"] },
  { slug: "maac-hitech-city", name: "MAAC Hitech City", city: "Hyderabad", state: "Telangana", address: "4th Floor, Cyber Towers, Hitech City, Hyderabad - 500081", phone: "+91-40-40101234", email: "hitechcity@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Development", "IPVAD XR"] },
  { slug: "maac-ameerpet", name: "MAAC Ameerpet", city: "Hyderabad", state: "Telangana", address: "2nd Floor, SR Nagar Cross Road, Ameerpet, Hyderabad - 500038", phone: "+91-40-40105678", email: "ameerpet@maacindia.com", courses: ["D3D", "VFX Prime", "Digital Filmmaking"] },
  { slug: "maac-salt-lake", name: "MAAC Salt Lake", city: "Kolkata", state: "West Bengal", address: "Block EP, Sector V, Salt Lake City, Kolkata - 700091", phone: "+91-33-40101234", email: "saltlake@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Art & Design"] },
  { slug: "maac-park-street", name: "MAAC Park Street", city: "Kolkata", state: "West Bengal", address: "3rd Floor, Park Street Area, Kolkata - 700016", phone: "+91-33-40105678", email: "parkstreet@maacindia.com", courses: ["D3D", "ADIDG Plus", "Digital Filmmaking"] },
  { slug: "maac-gomti-nagar", name: "MAAC Gomti Nagar", city: "Lucknow", state: "Uttar Pradesh", address: "2nd Floor, TDI Mall, Vibhuti Khand, Gomti Nagar, Lucknow - 226010", phone: "+91-522-4010123", email: "gomtinagar@maacindia.com", courses: ["AD3D EDGE Plus", "VFX Prime", "ADIDG Plus"] },
  { slug: "maac-noida", name: "MAAC Noida", city: "Noida", state: "Uttar Pradesh", address: "4th Floor, Sector 18, Noida - 201301", phone: "+91-120-4010123", email: "noida@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Development", "AR/VR Development"] },
  { slug: "maac-varanasi", name: "MAAC Varanasi", city: "Varanasi", state: "Uttar Pradesh", address: "1st Floor, Sigra Chowk, Varanasi - 221010", phone: "+91-542-4010123", email: "varanasi@maacindia.com", courses: ["D3D", "VFX Prime", "DGWA"] },
  { slug: "maac-jaipur", name: "MAAC Jaipur", city: "Jaipur", state: "Rajasthan", address: "3rd Floor, MI Road, Jaipur - 302001", phone: "+91-141-4010123", email: "jaipur@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "ADIDG Plus"] },
  { slug: "maac-jodhpur", name: "MAAC Jodhpur", city: "Jodhpur", state: "Rajasthan", address: "2nd Floor, Sardarpura, Jodhpur - 342003", phone: "+91-291-4010123", email: "jodhpur@maacindia.com", courses: ["D3D", "ADIDG Plus", "DGWA"] },
  { slug: "maac-ahmedabad", name: "MAAC Ahmedabad", city: "Ahmedabad", state: "Gujarat", address: "5th Floor, SG Highway, Ahmedabad - 380054", phone: "+91-79-40101234", email: "ahmedabad@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "Game Art & Design"] },
  { slug: "maac-surat", name: "MAAC Surat", city: "Surat", state: "Gujarat", address: "3rd Floor, Ring Road, Surat - 395002", phone: "+91-261-4010123", email: "surat@maacindia.com", courses: ["D3D", "VFX Prime", "ADIDG Plus"] },
  { slug: "maac-vadodara", name: "MAAC Vadodara", city: "Vadodara", state: "Gujarat", address: "2nd Floor, Race Course Circle, Vadodara - 390007", phone: "+91-265-4010123", email: "vadodara@maacindia.com", courses: ["D3D", "ADIDG Plus", "DGWA"] },
  { slug: "maac-bhopal", name: "MAAC Bhopal", city: "Bhopal", state: "Madhya Pradesh", address: "1st Floor, MP Nagar Zone II, Bhopal - 462011", phone: "+91-755-4010123", email: "bhopal@maacindia.com", courses: ["AD3D EDGE Plus", "VFX Prime", "ADIDG Plus"] },
  { slug: "maac-indore", name: "MAAC Indore", city: "Indore", state: "Madhya Pradesh", address: "3rd Floor, Vijay Nagar, Indore - 452010", phone: "+91-731-4010123", email: "indore@maacindia.com", courses: ["D3D", "VFX Prime", "Digital Filmmaking"] },
  { slug: "maac-kochi", name: "MAAC Kochi", city: "Kochi", state: "Kerala", address: "2nd Floor, MG Road, Kochi - 682035", phone: "+91-484-4010123", email: "kochi@maacindia.com", courses: ["AD3D EDGE Plus", "ADVFX Plus", "ADIDG Plus"] },
  { slug: "maac-trivandrum", name: "MAAC Thiruvananthapuram", city: "Thiruvananthapuram", state: "Kerala", address: "1st Floor, Statue Junction, Thiruvananthapuram - 695001", phone: "+91-471-4010123", email: "trivandrum@maacindia.com", courses: ["D3D", "VFX Prime", "DGWA"] },
  { slug: "maac-chandigarh", name: "MAAC Chandigarh", city: "Chandigarh", state: "Punjab", address: "SCO 375, Sector 34A, Chandigarh - 160022", phone: "+91-172-4010123", email: "chandigarh@maacindia.com", courses: ["AD3D EDGE Plus", "VFX Prime", "Game Art & Design"] },
  { slug: "maac-ludhiana", name: "MAAC Ludhiana", city: "Ludhiana", state: "Punjab", address: "2nd Floor, Ferozpur Road, Ludhiana - 141001", phone: "+91-161-4010123", email: "ludhiana@maacindia.com", courses: ["D3D", "ADIDG Plus", "DGWA"] },
  { slug: "maac-bhubaneswar", name: "MAAC Bhubaneswar", city: "Bhubaneswar", state: "Odisha", address: "3rd Floor, Jaydev Vihar, Bhubaneswar - 751013", phone: "+91-674-4010123", email: "bhubaneswar@maacindia.com", courses: ["AD3D EDGE Plus", "VFX Prime", "Digital Filmmaking"] },
  { slug: "maac-guwahati", name: "MAAC Guwahati", city: "Guwahati", state: "Assam", address: "1st Floor, GS Road, Guwahati - 781005", phone: "+91-361-4010123", email: "guwahati@maacindia.com", courses: ["D3D", "VFX Prime", "ADIDG Plus"] },
  { slug: "maac-ranchi", name: "MAAC Ranchi", city: "Ranchi", state: "Jharkhand", address: "2nd Floor, Main Road, Ranchi - 834001", phone: "+91-651-4010123", email: "ranchi@maacindia.com", courses: ["D3D", "ADIDG Plus", "DGWA"] },
  { slug: "maac-patna", name: "MAAC Patna", city: "Patna", state: "Bihar", address: "3rd Floor, Fraser Road, Patna - 800001", phone: "+91-612-4010123", email: "patna@maacindia.com", courses: ["D3D", "VFX Prime", "ADIDG Plus"] },
];

export const getCentresByState = (stateName: string): Centre[] =>
  centres.filter(c => c.state === stateName);

export const getCentresByCity = (city: string): Centre[] =>
  centres.filter(c => c.city === city);

export const getCentreBySlug = (slug: string): Centre | undefined =>
  centres.find(c => c.slug === slug);

export const getStateBySlug = (slug: string): StateData | undefined =>
  states.find(s => s.slug === slug);
