// Data source for Ishema rya Abato School Website

const schoolData = {
  info: {
    name: "Ishema rya Abato School",
    tagline: "Nurturing Young Minds, Cultivating Excellence & Cultural Values",
    kinyarwandaTagline: "Kurera Neza, Kurerera u Rwanda n'Ejo Hazaza",
    frenchTagline: "Nourrir les Jeunes Esprits, Cultiver l'Excellence et les Valeurs",
    motto: "Excellence • Integrity • Innovation • Culture",
    established: 2012,
    code: "IRA-KGL-2012",
    accreditation: "Rwanda Ministry of Education (MINEDUC) & REB Certified",
    curriculum: "Rwanda Competence-Based Curriculum (CBC) Integrated with Modern STEM & Early Coding",
    address: {
      street: "KG 19 Ave, Rebero / Kicukiro Hill",
      city: "Kigali",
      country: "Rwanda",
      coordinates: "-1.9706, 30.0844",
      landmark: "Near Rebero Cultural Village, 10 Mins from Kigali CBD"
    },
    contact: {
      phonePrimary: "+250 788 123 456",
      phoneSecondary: "+250 788 654 321",
      whatsapp: "+250788123456",
      email: "info@ishemaryaabato.ac.rw",
      admissionsEmail: "admissions@ishemaryaabato.ac.rw",
      workingHours: "Monday - Friday: 7:00 AM - 5:30 PM | Saturday: 8:00 AM - 1:00 PM"
    },
    stats: [
      { label: "PLE Examination Pass Rate", value: "100%", subtext: "10-Year Consistent Division 1 & 2" },
      { label: "Happy Students Enrolled", value: "850+", subtext: "From Daycare to Primary P6" },
      { label: "Certified Expert Educators", value: "48+", subtext: "Passionate, CBC & Early Years Trained" },
      { label: "Student-to-Teacher Ratio", value: "15:1", subtext: "Personalized attention for every child" },
      { label: "Active Co-Curricular Clubs", value: "14+", subtext: "Robotics, Itorero, Ballet, Chess, Coding" }
    ]
  },

  programs: [
    {
      id: "daycare",
      title: "Daycare & Crèche",
      rwTitle: "Amasomero y'Ibitambambuga",
      frTitle: "Crèche & Garderie",
      ages: "3 Months - 2.5 Years",
      icon: "fa-baby",
      color: "from-amber-400 to-orange-500",
      description: "A tender, hygienic, sensory-rich haven designed to stimulate early cognitive development, language discovery, motor skills, and emotional bonding under certified pediatric caregivers.",
      features: [
        "Safe, padded sensory discovery playrooms",
        "Trained pediatric nurses & caregivers (1:4 ratio)",
        "Organic baby meals & monitored sleep sanctuary",
        "Daily digital parent milestone updates"
      ],
      hours: "7:00 AM - 5:30 PM",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nursery",
      title: "Nursery & Kindergarten",
      rwTitle: "Amashuri y'Incuke (Baby, Middle, Top)",
      frTitle: "Maternelle & Jardin d'Enfants",
      ages: "3 - 5 Years (Baby, Middle & Top Class)",
      icon: "fa-shapes",
      color: "from-sky-400 to-blue-600",
      description: "Play-based inquiry learning fostering early phonics, numeracy, social cooperation, spatial reasoning, bilingual immersion (English & Kinyarwanda), and creative arts.",
      features: [
        "Phonics, Jolly Phonics & Early Reading mastery",
        "Hands-on Montessori & CBC experiential stations",
        "Introduction to computational thinking & puzzles",
        "Spacious outdoor playground with safety soft-turf"
      ],
      hours: "7:30 AM - 1:00 PM (or Full Day till 5:00 PM)",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "primary",
      title: "Primary School (P1 - P6)",
      rwTitle: "Amashuri Abanza (P1 kugeza P6)",
      frTitle: "École Primaire (P1 à P6)",
      ages: "6 - 12 Years",
      icon: "fa-graduation-cap",
      color: "from-emerald-400 to-teal-700",
      description: "Rigorous academic excellence aligned with the Rwanda CBC framework and enriched with international STEM, robotics, digital literacy, French, and deep cultural heritage (Itorero ry'Abato).",
      features: [
        "High-performance PLE national examination preparation",
        "Modern ICT & Robotics lab with 1:1 tablet sessions",
        "Trilingual fluency: English, Kinyarwanda & French",
        "Intensive math, science discovery & debates"
      ],
      hours: "7:30 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "enrichment",
      title: "STEM, Arts & Culture",
      rwTitle: "Ikoranabuhanga, Umuco n'Imikino",
      frTitle: "STEM, Arts & Culture",
      ages: "All Grades (4 - 12 Years)",
      icon: "fa-robot",
      color: "from-purple-500 to-indigo-600",
      description: "Equipping children with future-ready skills, critical thinking, creativity, and love for Rwandan values through clubs, sports tournaments, and performing arts.",
      features: [
        "Robotics, Lego Engineering & Scratch coding",
        "Traditional Rwandan Dance troupe (Itorero ry'Abato)",
        "Music academy: Piano, Guitar & Traditional Inanga",
        "Swimming, Martial arts, Football & Basketball leagues"
      ],
      hours: "Co-curricular Afternoons & Weekends",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    }
  ],

  facilities: [
    {
      title: "Interactive Smart Classrooms",
      rwTitle: "Ibyumba By'amashuri Bigezweho",
      description: "Ergonomic seating, digital smart boards, natural ventilation, and child-safe learning corners designed for collaborative learning.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      tag: "Academics"
    },
    {
      title: "Kids STEM & Robotics Lab",
      rwTitle: "Laboratwari y'Ikoranabuhanga na Roboti",
      description: "Equipped with interactive tablets, Lego robotics kits, electronic circuit blocks, and high-speed safe filtered internet for young coders.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      tag: "Technology"
    },
    {
      title: "Children's Sanctuary Library",
      rwTitle: "Isomero Ry'Abana Ryuje Ibitabo",
      description: "Over 5,000 age-graded illustrated books in English, French, and Kinyarwanda, reading pods, and storytelling amphitheater.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      tag: "Literacy"
    },
    {
      title: "Safe Turf Playground & Sports Arena",
      rwTitle: "Ikibuga cy'Imikino n'Ubusitani Butekanye",
      description: "Multi-sport turf for football, mini-basketball court, modern jungle gyms, swing sets, and monitored rubber-padded zones.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      tag: "Recreation"
    },
    {
      title: "Nutritious Dining Hall & Cafeteria",
      rwTitle: "Icyumba cy'Amafunguro Ateguye Neza",
      description: "Certified nutritionists craft warm, balanced meals, fresh Rwandan fruits, and wholesome snacks tailored to growing children.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      tag: "Wellness"
    },
    {
      title: "Campus Infirmary & Medical Care",
      rwTitle: "Ivuriro ry'Ishuri n'Ubutabazi bw'Ibanze",
      description: "Full-time licensed registered nurse on-site, regular pediatric health screening, and dedicated isolation resting quarters.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      tag: "Health & Safety"
    },
    {
      title: "GPS-Tracked School Bus Fleet",
      rwTitle: "Imodoka Z'ishuri Zifite GPS Zizewe",
      description: "Modern, seat-belt equipped school buses covering all major Kigali neighborhoods with real-time parent tracking updates and adult chaperones.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      tag: "Transport"
    },
    {
      title: "Cultural & Performing Arts Amphitheater",
      rwTitle: "Ihema ry'Umuco n'Ubuhanzi",
      description: "Dedicated stage for Itorero traditional dance, drama, musical performances, debates, and annual graduation celebrations.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      tag: "Culture"
    }
  ],

  gallery: [
    {
      title: "STEM Discovery & Coding Day",
      category: "academics",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      caption: "Primary 4 pupils programming autonomous obstacle-avoidance robots."
    },
    {
      title: "Traditional Dance Troupe - Itorero ry'Abato",
      category: "culture",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      caption: "Celebrating Rwandan cultural heritage and artistic expression."
    },
    {
      title: "Early Reading & Phonics Circle",
      category: "nursery",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      caption: "Nursery Top class enjoying interactive storytelling session."
    },
    {
      title: "Annual Inter-House Sports Gala",
      category: "sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      caption: "Young athletes sprinting to the finish line with spirit and joy."
    },
    {
      title: "Science Fair & Environmental Innovation",
      category: "academics",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      caption: "Demonstrating renewable solar energy models made from recycled items."
    },
    {
      title: "Creative Arts, Pottery & Painting",
      category: "arts",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      caption: "Unleashing fine motor skills and creative expression in the art studio."
    },
    {
      title: "Kindergarten Graduation Ceremony",
      category: "events",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      caption: "Celebrating our proud graduates stepping forward into Primary 1."
    },
    {
      title: "Organic Campus Garden & Eco Club",
      category: "campus",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=800&q=80",
      caption: "Learners planting organic vegetables and understanding agriculture."
    }
  ],

  feeStructure: {
    tuition: {
      "daycare-half": { label: "Daycare (Half Day)", termRwf: 220000, termUsd: 170 },
      "daycare-full": { label: "Daycare (Full Day)", termRwf: 320000, termUsd: 245 },
      "nursery-baby": { label: "Nursery - Baby Class", termRwf: 260000, termUsd: 200 },
      "nursery-middle": { label: "Nursery - Middle Class", termRwf: 280000, termUsd: 215 },
      "nursery-top": { label: "Nursery - Top Class", termRwf: 295000, termUsd: 225 },
      "primary-lower": { label: "Primary Lower (P1 - P3)", termRwf: 340000, termUsd: 260 },
      "primary-upper": { label: "Primary Upper (P4 - P6)", termRwf: 380000, termUsd: 290 }
    },
    mealPlans: {
      "none": { label: "Self Packed Lunch (No meal fee)", termRwf: 0, termUsd: 0 },
      "break-only": { label: "Morning Break Snack & Milk / Porridge", termRwf: 45000, termUsd: 35 },
      "hot-lunch": { label: "Full Balanced Hot Lunch + Fruit", termRwf: 95000, termUsd: 75 },
      "complete": { label: "Complete Nutrition Plan (Morning Snack + Lunch + Evening Fruit)", termRwf: 130000, termUsd: 100 }
    },
    transportZones: {
      "none": { label: "Self / Parent Drop & Pick (No Transport)", termRwf: 0, termUsd: 0 },
      "zone-1": { label: "Zone 1: Rebero, Gikondo, Kicukiro Centre, Niboye", termRwf: 90000, termUsd: 70 },
      "zone-2": { label: "Zone 2: Kanombe, Remera, Kabeza, Sonatubes", termRwf: 120000, termUsd: 90 },
      "zone-3": { label: "Zone 3: Kimironko, Kibagabaga, Nyarutarama, Gishushu", termRwf: 145000, termUsd: 110 },
      "zone-4": { label: "Zone 4: Nyamirambo, Kigali CBD, Kiyovu, Muhima", termRwf: 155000, termUsd: 120 },
      "zone-5": { label: "Zone 5: Masaka, Rusororo, Kagugu, Gisozi", termRwf: 180000, termUsd: 140 }
    },
    oneTimeFees: {
      registration: { label: "New Student Registration & Assessment", rwf: 30000, usd: 25 },
      uniformPack: { label: "Complete Uniform Set (2 Daily, 1 Sports, Sweater & Hat)", rwf: 65000, usd: 50 },
      materialsFee: { label: "Term Learning Materials & Stationery Kit", rwf: 35000, usd: 28 },
      insurance: { label: "Annual Child Medical & Accident Insurance", rwf: 15000, usd: 12 }
    }
  },

  upcomingEvents: [
    {
      id: 1,
      title: "Term 2 Grand Open Day & Parents Assembly",
      rwTitle: "Umunsi w'Amarembo Afunguye n'Inama y'Ababyeyi",
      date: "November 28, 2026",
      time: "9:00 AM - 1:00 PM",
      location: "Main Assembly Hall & Classrooms",
      category: "Academic",
      badge: "Upcoming",
      description: "One-on-one progress consultation with homeroom educators, student science project walkthroughs, and school development dialogue."
    },
    {
      id: 2,
      title: "Inter-School Junior Robotics Championship",
      rwTitle: "Amarushanwa ya Roboti n'Ikoranabuhanga mu Mashuri",
      date: "December 05, 2026",
      time: "10:00 AM - 3:30 PM",
      location: "Ishema STEM Innovation Center",
      category: "STEM",
      badge: "Competition",
      description: "Our Primary 4-6 coding teams square off with 8 invited Kigali schools in Lego Mindstorms line tracking and automated maze solving."
    },
    {
      id: 3,
      title: "Rwandan Cultural Heritage Day (Umunsi w'Umuco)",
      rwTitle: "Umunsi Mpuzamashuri wo Kwizihiza Umuco Nyarwanda",
      date: "December 12, 2026",
      time: "8:30 AM - 4:00 PM",
      location: "School Amphitheater",
      category: "Culture",
      badge: "Cultural",
      description: "Traditional poetry (Ibisigo), dance performances (Intore & Umushayayo), exhibition of handmade crafts, and traditional cuisine tasting."
    },
    {
      id: 4,
      title: "Annual Christmas Carols & Kids Festival",
      rwTitle: "Iserukiramuco rya Noheli n'Ibyishimo by'Abana",
      date: "December 18, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "School Amphitheater & Green Lawn",
      category: "Celebration",
      badge: "Festival",
      description: "Musical choir presentations, nativity play, gift exchange, and closing of Term 2 for holidays."
    }
  ],

  news: [
    {
      id: 101,
      title: "Ishema rya Abato Achieves 100% Division 1 in National Primary Examinations",
      rwTitle: "Ishema rya Abato Ryatsindishije 100% mu Bizamini bya Leta bisoza Amashuri Abanza",
      date: "October 14, 2026",
      author: "Academic Dean Office",
      category: "Academic Excellence",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      excerpt: "For the fifth consecutive year, all 54 P6 candidates attained premier marks, placing the school among Kigali's top ten performing primary schools."
    },
    {
      id: 102,
      title: "Expanding Early Years Coding & AI Discovery in Nursery Top & Primary",
      rwTitle: "Kwagura Isomo rya Mudasobwa n'Ubwenge bw'Ubuhangano mu Mashuri y'Incuke n'Abanza",
      date: "September 29, 2026",
      author: "ICT & Innovation Dept",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      excerpt: "We have upgraded our lab with 40 new interactive touch terminals and introduced block-based algorithmic thinking starting at age 5."
    },
    {
      id: 103,
      title: "Green School Initiative: Young Eco-Warriors Win Kigali Eco Award",
      rwTitle: "Ishema rya Abato Ryegukanye Igihembo cyo Kubungabunga Ibidukikije mu Mujyi wa Kigali",
      date: "September 15, 2026",
      author: "Environment Club",
      category: "Community",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      excerpt: "Our pupils' rainwater harvesting and organic vegetable garden project earned high commendations from the City of Kigali environmental board."
    }
  ],

  testimonials: [
    {
      name: "Dr. Diane Umutoni",
      role: "Parent of Keza (Primary 3) & Mugisha (Nursery Top)",
      quote: "Enrolling our children at Ishema rya Abato was the best decision we ever made. The balance between academic rigor, bilingual fluency in English and Kinyarwanda, and caring teachers is unmatched. My daughter looks forward to school every morning!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Eng. Emmanuel Karenzi",
      role: "Parent of Ganza (Primary 6 - 2025 PLE Candidate)",
      quote: "The teachers genuinely know each child's strengths. In addition to scoring Division 1, my son gained immense confidence in public speaking, robotics, and respect for our Rwandan cultural values through Itorero.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Solange Mukamana",
      role: "Parent of Baby Class Learner",
      quote: "As a working mother, peace of mind is priceless. The nursery care team is exceptionally loving, the hygiene is spotless, and I receive clear daily updates on my son's milestones and meals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80"
    }
  ],

  leadership: [
    {
      name: "Marie-Claire Uwera, M.Ed",
      title: "Head of School / Umuyobozi Mukuru",
      bio: "22+ years of educational leadership in early childhood and primary education across East Africa. Advocate for inclusive, child-centered CBC learning.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jean-Damascène Habimana",
      title: "Dean of Academics & CBC Coordinator",
      bio: "Specialist in Competence-Based Curriculum, curriculum differentiation, and teacher mentoring certified by the Rwanda Basic Education Board.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aline Gasana",
      title: "Head of Early Childhood Development (ECD)",
      bio: "Montessori certified early years specialist with deep expertise in sensory integration, socio-emotional learning, and foundational phonics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Ntwali, B.Sc.",
      title: "Head of STEM & Digital Innovation",
      bio: "Robotics engineer and educator dedicated to demystifying technology, algorithmic thinking, and hands-on maker skills for young minds.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],

  demoStudent: {
    id: "IRA-2024-0482",
    fullName: "Keza Ineza Briella",
    grade: "Primary 3 - Amber Class",
    homeroomTeacher: "Tr. Claudine Mukandayisenga",
    parentName: "Dr. Diane Umutoni",
    parentPhone: "+250 788 456 789",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    academicStatus: "Top 5% in Class (Division 1 Honor Roll)",
    overallAverage: "94.6%",
    attendanceRate: "98.5%",
    termSummary: {
      term: "Term 2, Academic Year 2026",
      conduct: "Excellent (Indangagaciro Ntamahemuka)",
      feeStatus: "Fully Cleared (Paid)",
      busRoute: "Bus #04 - Route Rebero / Kicukiro"
    },
    subjects: [
      { name: "Mathematics", score: 96, grade: "A", remark: "Exceptional speed in mental math & word problem reasoning" },
      { name: "English Language & Phonics", score: 94, grade: "A", remark: "Expressive vocabulary, creative story composition" },
      { name: "Ikinyarwanda", score: 98, grade: "A+", remark: "Imvugo iboneye, ubuhanga mu misomere no kwandika" },
      { name: "Science & Elementary Technology (SET)", score: 92, grade: "A", remark: "Inquisitive experimenter, great curiosity in living things" },
      { name: "Social Studies & Cultural Values", score: 95, grade: "A", remark: "Exemplary understanding of community, history & citizenship" },
      { name: "French Language", score: 90, grade: "A", remark: "Good oral comprehension, active in dialogue exercises" },
      { name: "Creative Arts & Physical Education", score: 97, grade: "A+", remark: "Enthusiastic dancer in Itorero and talented painter" }
    ],
    upcomingAssignments: [
      { subject: "Mathematics", task: "Workbook Ch. 5: Multi-digit multiplication puzzles", due: "Tomorrow, 8:00 AM", status: "Submitted" },
      { subject: "SET (Science)", task: "Collect 3 types of dried leaves for botany chart", due: "In 2 Days", status: "Pending" },
      { subject: "Ikinyarwanda", task: "Kwandika umwandiko ku mugani wa Nyirarunyonga", due: "Friday", status: "In Progress" }
    ],
    busTracking: {
      route: "Bus 04 - Kicukiro Rebero Circuit",
      driver: "Jean-Pierre Uwimana (+250 788 333 222)",
      currentStatus: "En Route to School",
      currentStop: "Stop 4: Sonatubes Roundabout",
      estimatedArrival: "7:22 AM (On Schedule)",
      speed: "34 km/h",
      batteryGps: "Optimal (Signal 100%)"
    }
  }
};

// Export to window for global access
window.schoolData = schoolData;
