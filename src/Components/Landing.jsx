import React, { useState } from 'react';
import { Menu, X, ChevronRight, Rocket, Users, Lightbulb, Calendar, Award, Mail, Linkedin, Github, Instagram, Twitter, ArrowRight, ExternalLink } from 'lucide-react';

// Mock Data
const events = [
  {
    id: 1,
    title: "Startup Weekend",
    date: "2024-03-15",
    description: "48-hour hackathon to build your startup idea",
    status: "upcoming",
    category: "Workshop"
  },
  {
    id: 2,
    title: "Pitch Perfect Series",
    date: "2024-02-28",
    description: "Learn the art of pitching your ideas to investors",
    status: "upcoming",
    category: "Training"
  },
  {
    id: 3,
    title: "Innovation Summit 2024",
    date: "2024-01-20",
    description: "Annual gathering of entrepreneurs and innovators",
    status: "past",
    category: "Summit"
  },
  {
    id: 4,
    title: "Business Model Canvas Workshop",
    date: "2023-12-10",
    description: "Master the fundamentals of business planning",
    status: "past",
    category: "Workshop"
  }
];

const projects = [
  {
    id: 1,
    name: "AgriTech Solutions",
    problem: "Farmers lack real-time data for crop management",
    solution: "IoT-based monitoring system with mobile app",
    status: "Prototype",
    team: "4th Year CSE"
  },
  {
    id: 2,
    name: "EduConnect",
    problem: "Gap in personalized learning for rural students",
    solution: "AI-powered adaptive learning platform",
    status: "MVP",
    team: "3rd Year ECE"
  },
  {
    id: 3,
    name: "WasteWise",
    problem: "Inefficient waste segregation in urban areas",
    solution: "Smart bins with automated sorting mechanism",
    status: "Startup",
    team: "Alumni"
  },
  {
    id: 4,
    name: "HealthHub",
    problem: "Limited access to health monitoring in remote areas",
    solution: "Portable diagnostic device with telemedicine",
    status: "Idea",
    team: "2nd Year ME"
  }
];

const team = [
  { id: 1, name: "Dr. Rajesh Kumar", role: "Faculty Coordinator", department: "Computer Science", year: "Professor", image: "" },
  { id: 2, name: "Muhammed Luthfi T P", role: "CEO", department: "Computer Science", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456655/IMG_7096_-_Luthfi_Tp_qdfbt1.jpg" },
  { id: 3, name: "Faseen Anvar", role: "CTO", department: "Computer Science", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456668/InShot_20251231_003554120_wsdprm.jpg" },
  { id: 4, name: "Asif Subair", role: "CPO", department: "Mechanical", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/asif_id_card_-_ASIF_SUBAIR_uxjovh.jpg" },
  { id: 5, name: "Ann Theres Thomas", role: "CFO", department: "Computer Science", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456670/IMG-20250405-WA0033_-_Anntheres_Thomas_xcthrv.jpg" },
  { id: 6, name: "Sneha Krishnan", role: "Marketing Lead", department: "Civil", year: "2nd Year", image: "" },
  { id: 7, name: "Rahul Varma", role: "Finance Head", department: "Electronics", year: "3rd Year", image: "" },
  { id: 6, name: "Athul P", role: "CCO", department: "Computer Science", year: "2nd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456680/1000331524_-_Film_d3wqhw.jpg" },
  { id: 7, name: "Elisha Varghese", role: "CAO", department: "Mechanical", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456665/IMG-20250325-WA0072_1_-_Elisha_Varghese_mk1964.jpg" },
  { id: 8, name: "Mohammed Ashkar N A", role: "CIO", department: "Civil", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456674/IMG-20250607-WA0262_-_Mohammed_Ashkar_N.A_evr6s7.jpg" },
  { id: 9, name: "Reshmi S Panicker", role: "WEL", department: "Electronics", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456659/IMG-20240410-WA0015_-_Reshmi_S_Panicker_byqynp.jpg" },
  { id: 10, name: "CP Saniya", role: "COO", department: "Computer Science", year: "2nd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/IMG_20250531_231846_-_Saniya_CP_a871lq.jpg" },
  { id: 11, name: "Shifa Rabiya", role: "CCO", department: "Mechanical", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456673/Shifa_-_Shifa_Rabiya_qgrore.jpg" },
  { id: 12, name: "Abin Baby", role: "CSO", department: "Civil", year: "4th Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456652/abyy_-_ABIN_BABY_cgvfrq.jpg" },
  { id: 13, name: "Zana Noushad", role: "BML", department: "Electronics", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/IMG_0222_-_ZANA_NOUSHAD_ncqf2n.jpg" },
  { id: 14, name: "Akash Sundar", role: "CMO", department: "Electronics", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767457303/3e768674-1d4a-41e3-80a1-e4bd003ede6d_-_Akash_Sundar_ndqmoc.jpg" },
  { id: 15, name: "Naveen V R", role: "DL", department: "Electronics", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456676/20250315_132334_-_Naveen_rylpgg.jpg" },
  { id: 16, name: "Haripriya K Parveen", role: "SMH", department: "Electronics", year: "3rd Year", image: "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456669/IMG-20250601-WA0095_-_Haripriya_Praveen_qnglbg.jpg" }
];


const gallery = [
  { id: 1, category: "Events", alt: "Startup pitch competition" },
  { id: 2, category: "Workshops", alt: "Design thinking workshop" },
  { id: 3, category: "Team", alt: "IEDC team meeting" },
  { id: 4, category: "Events", alt: "Innovation summit keynote" },
  { id: 5, category: "Workshops", alt: "Coding bootcamp session" },
  { id: 6, category: "Team", alt: "Team brainstorming session" }
];

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    year: '',
    email: '',
    ideaTitle: '',
    problem: '',
    solution: '',
    stage: 'Idea'
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Submitting...' });
    
    try {
      const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || 'YOUR_APPS_SCRIPT_URL';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setFormStatus({ type: 'success', message: 'Idea submitted successfully! We\'ll get back to you soon.' });
      setFormData({
        name: '', department: '', year: '', email: '',
        ideaTitle: '', problem: '', solution: '', stage: 'Idea'
      });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-[#101827]" />
              <span className="ml-2 text-xl font-bold text-[#101827]">IEDC CEC</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Events', 'Projects', 'Team', 'Gallery', 'Submit Idea'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-[#101827] hover:text-gray-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Events', 'Projects', 'Team', 'Gallery', 'Submit Idea'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-[#101827] hover:text-gray-600 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#101827] mb-6 leading-tight">
            Innovation.<br />Entrepreneurship.<br />Leadership.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Empowering future entrepreneurs at College of Engineering Cherthala through innovation, mentorship, and real-world startup experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('submit-idea')}
              className="bg-[#101827] text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Submit Your Idea <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="border-2 border-[#101827] text-[#101827] px-8 py-4 rounded-lg hover:bg-[#101827] hover:text-white transition-all text-lg font-semibold"
            >
              View Events
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Active Members' },
              { value: '25+', label: 'Projects Launched' },
              { value: '40+', label: 'Events Conducted' },
              { value: '5+', label: 'Startups Incubated' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#101827] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-12 text-center">About IEDC CEC</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="h-12 w-12 text-[#101827] mb-4" />
              <h3 className="text-2xl font-bold text-[#101827] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To foster a culture of innovation and entrepreneurship among students at Government College of Engineering, Cherthala, established in 2004, by providing resources, mentorship, and opportunities to transform ideas into impactful ventures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Rocket className="h-12 w-12 text-[#101827] mb-4" />
              <h3 className="text-2xl font-bold text-[#101827] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Kerala's leading student-driven innovation hub, creating entrepreneurs who solve real-world problems and contribute to economic growth and social development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-[#101827] mb-4" />
              <h3 className="text-2xl font-bold text-[#101827] mb-4">What We Do</h3>
              <p className="text-gray-600 leading-relaxed">
                We organize workshops, hackathons, mentorship programs, and provide seed funding opportunities. Our community supports students from ideation to launching successful startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-12 text-center">Events & Programs</h2>
          
          <h3 className="text-2xl font-bold text-[#101827] mb-6">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {events.filter(e => e.status === 'upcoming').map(event => (
              <div key={event.id} className="bg-[#f9fafb] p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#101827] text-white px-3 py-1 rounded-full text-sm">{event.category}</span>
                  <Calendar className="h-5 w-5 text-gray-600" />
                </div>
                <h4 className="text-xl font-bold text-[#101827] mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <button className="text-[#101827] font-semibold hover:underline flex items-center gap-1">
                    Register <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-[#101827] mb-6">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.status === 'past').map(event => (
              <div key={event.id} className="bg-[#f9fafb] p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">{event.category}</span>
                  <Calendar className="h-5 w-5 text-gray-600" />
                </div>
                <h4 className="text-xl font-bold text-[#101827] mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <button className="text-[#101827] font-semibold hover:underline flex items-center gap-1">
                    View Gallery <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-4 text-center">Projects & Startups</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Student innovations making a difference</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#101827]">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Startup' ? 'bg-green-100 text-green-700' :
                    project.status === 'MVP' ? 'bg-blue-100 text-blue-700' :
                    project.status === 'Prototype' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">PROBLEM</p>
                  <p className="text-gray-700">{project.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">SOLUTION</p>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">{project.team}</span>
                  <button className="text-[#101827] font-semibold hover:underline flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-4 text-center">Executive Team</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Meet the leaders driving innovation at CEC</p>
          
          {/* Manual scrolling carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8" style={{ scrollBehavior: 'smooth' }}>
              <div className="flex gap-6 w-max px-4">
                {team.map(member => (
                  <div key={member.id} className="flex-shrink-0 w-72 bg-[#f9fafb] p-6 rounded-2xl hover:shadow-lg transition-all text-center border border-gray-200">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="h-16 w-16 text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#101827] mb-2">{member.name}</h3>
                    <p className="text-[#101827] font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.department} • {member.year}</p>
                    <div className="flex justify-center gap-3">
                      <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <Linkedin className="h-5 w-5 text-[#101827]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">← Scroll to view all team members →</p>
            </div>
          </div>
        </div>
        
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-12 text-center">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map(image => (
              <div key={image.id} className="relative aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">{image.category}</p>
                  <p className="text-white/80 text-xs">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section id="submit-idea" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101827] mb-4 text-center">Submit Your Idea</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Have a brilliant idea? Share it with us and let's bring it to life together</p>
          
          <form onSubmit={handleSubmit} className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#101827] font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
                />
              </div>
              <div>
                <label className="block text-[#101827] font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#101827] font-semibold mb-2">Department *</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
                />
              </div>
              <div>
                <label className="block text-[#101827] font-semibold mb-2">Year *</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#101827] font-semibold mb-2">Idea Title *</label>
              <input
                type="text"
                name="ideaTitle"
                value={formData.ideaTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#101827] font-semibold mb-2">Problem Statement *</label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#101827] font-semibold mb-2">Proposed Solution *</label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#101827] font-semibold mb-2">Current Stage *</label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#101827] bg-white"
              >
                <option value="Idea">Idea</option>
                <option value="Prototype">Prototype</option>
                <option value="MVP">MVP</option>
              </select>
            </div>

            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-700' :
                formStatus.type === 'error' ? 'bg-red-100 text-red-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.type === 'loading'}
              className="w-full bg-[#101827] text-white py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg disabled:opacity-50"
            >
              {formStatus.type === 'loading' ? 'Submitting...' : 'Submit Idea'}
            </button>
          </form>
        </div>
      </section>

      {/* Join IEDC Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#101827] to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Innovation Journey</h2>
          <p className="text-xl text-gray-300 mb-10">
            Be part of a vibrant community of innovators, entrepreneurs, and changemakers. Whether you have an idea or just the passion to learn, there's a place for you at IEDC CEC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#101827] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg">
              Become a Member
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#101827] transition-all font-semibold text-lg">
              Volunteer with IEDC
            </button>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-[#101827] text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      
      {/* Brand */}
      <div>
        <div className="flex items-center mb-4">
          <Rocket className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold">IEDC CEC</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Innovation and Entrepreneurship Development Cell of Government College
          of Engineering, Cherthala. Empowering students to build impactful
          solutions and startups.
        </p>
      </div>

      {/* College */}
      <div>
        <h4 className="font-bold mb-4">College</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          Government College of Engineering<br />
          Cherthala, Alappuzha<br />
          Kerala, India
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {[
            { label: 'About IEDC', id: 'about' },
            { label: 'Events', id: 'events' },
            { label: 'Projects', id: 'projects' },
            { label: 'Team', id: 'team' },
            { label: 'Submit Idea', id: 'submit-idea' }
          ].map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & Social */}
      <div>
        <h4 className="font-bold mb-4">Contact</h4>
        <div className="space-y-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>iedc@cecherthala.ac.in</span>
          </div>

          <div className="flex items-center gap-4 pt-3">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} IEDC CEC. All rights reserved.</p>
      <p className="mt-2 md:mt-0">
        Built by IEDC CEC Tech Team
      </p>
    </div>
  </div>
</footer>
</div>
  );
};

export default Landing;