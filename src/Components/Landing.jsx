import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Rocket,
  Users,
  Lightbulb,
  Calendar,
  Award,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Startup Weekend",
    date: "2024-03-15",
    description: "48-hour hackathon to build your startup idea",
    status: "upcoming",
    category: "Workshop",
  },
  {
    id: 2,
    title: "Pitch Perfect Series",
    date: "2024-02-28",
    description: "Learn the art of pitching your ideas to investors",
    status: "upcoming",
    category: "Training",
  },
  {
    id: 3,
    title: "MCA Orientation",
    date: "2025-09-17",
    description:
      "Orientation program for MCA students introducing innovation, entrepreneurship, and IEDC initiatives at CEC.",
    status: "past",
    category: "Orientation",
  },
  {
    id: 4,
    title: "ECHO CLASH 2025++",
    date: "2025-09-12",
    description:
      "Where every word echoed strength, wisdom, and courage. An unforgettable women-only debate that celebrated empowerment and brilliance! Proud of every participant who made this stage come alive!",
    status: "past",
    category: "Debate",
  },
];

const projects = [
  {
    id: 1,
    name: "NowUCme",
    problem:
      "People at events and public places find it difficult to connect with nearby like-minded individuals without awkward introductions.",
    solution:
      "A location-based social discovery platform that allows users to connect with nearby people when both enable Discover mode, featuring user profiles and social media link sharing.",
    status: "MVP",
    team: "Faseen Anvar – Founder & CTO (IEDC CEC)",
    website: "https://nowucme.in",
    instagram: "https://instagram.com/nowucme.in",
    linkedin: "https://www.linkedin.com/company/nowucme-official/",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767514079/form_photo_zgbjmb.png",
    bgImage: "",
  },
  {
    id: 2,
    name: "Availible",
    problem:
      "Students often struggle to find affordable second-hand books within their campus, while many useful books remain unused after each semester, leading to unnecessary expenses and limited access to study resources.",
    solution:
      "A community-based, CEC-exclusive platform that enables students to easily buy and sell second-hand books within the campus, making book discovery simpler, more affordable, and locally accessible.",
    status: "MVP",
    team: "Faseen Anvar – Founder & CTO (IEDC CEC)",
    website: "https://availible.in",
    instagram: "https://instagram.com/availible.in_",
    linkedin: "https://www.linkedin.com/company/availible",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767514089/Screenshot_2025-12-27_153050_fmc6p8.png",
    bgImage: "",
  },
];
const team = [
  {
    id: 1,
    name: "Irshad Ali T K",
    role: "Nodal Officer",
    department: "Electronics",
    year: "Professor",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767509749/WhatsApp_Image_2026-01-04_at_12.52.07_AM_tjgndg.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    id: 2,
    name: "Muhammed Luthfi T P",
    role: "CEO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456655/IMG_7096_-_Luthfi_Tp_qdfbt1.jpg",
    linkedin: "https://www.linkedin.com/in/luthfi-tp",
    instagram: "https://www.instagram.com/simply.lutherr",
  },
  {
    id: 3,
    name: "Faseen Anvar",
    role: "CTO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456668/InShot_20251231_003554120_wsdprm.jpg",
    linkedin: "https://www.linkedin.com/in/faseen-anvar-09058a275",
    instagram: "https://www.instagram.com/f.azy__",
  },
  {
    id: 4,
    name: "Asif Subair",
    role: "CPO",
    department: "Computer Science",
    year: "3rd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/asif_id_card_-_ASIF_SUBAIR_uxjovh.jpg",
    linkedin: "https://www.linkedin.com/in/asif-subair-63423b293",
    instagram: "https://www.instagram.com/_.asif._.ns._",
  },
  {
    id: 5,
    name: "Ann Theres Thomas",
    role: "CFO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456670/IMG-20250405-WA0033_-_Anntheres_Thomas_xcthrv.jpg",
    linkedin: "https://www.linkedin.com/in/anntheres-thomas-301b1a254",
    instagram: "https://www.instagram.com/a_nn.theres",
  },
  {
    id: 6,
    name: "Athul P",
    role: "CCO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456680/1000331524_-_Film_d3wqhw.jpg",
    linkedin: "https://www.linkedin.com/in/athul-p-86b286255",
    instagram: "https://www.instagram.com/_athul._10",
  },
  {
    id: 7,
    name: "Elisha Varghese",
    role: "CAO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456665/IMG-20250325-WA0072_1_-_Elisha_Varghese_mk1964.jpg",
    linkedin: "https://www.linkedin.com/in/elisha-varghese-429431256",
    instagram: "https://www.instagram.com/_.elishaaa_",
  },
  {
    id: 8,
    name: "Mohammed Ashkar N A",
    role: "CIO",
    department: "Computer Science",
    year: "3rd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456674/IMG-20250607-WA0262_-_Mohammed_Ashkar_N.A_evr6s7.jpg",
    linkedin: "https://www.linkedin.com/in/mohammed-ashkar-n-a-235492393",
    instagram: "https://www.instagram.com/ashkar.ashrf",
  },
  {
    id: 9,
    name: "Reshmi S Panicker",
    role: "WEL",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456659/IMG-20240410-WA0015_-_Reshmi_S_Panicker_byqynp.jpg",
    linkedin: "https://www.linkedin.com/in/reshmi-s-panicker-43a80423a",
    instagram: "https://www.instagram.com/__sreekutttyy__",
  },
  {
    id: 10,
    name: "CP Saniya",
    role: "COO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/IMG_20250531_231846_-_Saniya_CP_a871lq.jpg",
    linkedin: "https://www.linkedin.com/in/cp-saniya-86180b31b",
    instagram: "https://www.instagram.com/_saniya_prasannan_",
  },
  {
    id: 11,
    name: "Shifa Rabiya",
    role: "CCO",
    department: "Computer Science",
    year: "4th Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456673/Shifa_-_Shifa_Rabiya_qgrore.jpg",
    linkedin: "https://www.linkedin.com/in/shifa-rabiya-4871b2255",
    instagram: "https://www.instagram.com/shifa_rabiyaa",
  },
  {
    id: 12,
    name: "Abin Baby",
    role: "CSO",
    department: "Computer Science",
    year: "2nd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456652/abyy_-_ABIN_BABY_cgvfrq.jpg",
    linkedin: "https://www.linkedin.com/in/abin-baby-0001-",
    instagram: "https://www.instagram.com/_abin_baby___",
  },
  {
    id: 13,
    name: "Zana Noushad",
    role: "BML",
    department: "Computer Science",
    year: "3rd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456656/IMG_0222_-_ZANA_NOUSHAD_ncqf2n.jpg",
    linkedin: "https://www.linkedin.com/in/zana-noushad-24123b293",
    instagram: "https://www.instagram.com/za.naa._",
  },
  {
    id: 14,
    name: "Akash Sundar",
    role: "CMO",
    department: "Computer Science",
    year: "3rd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767631360/WhatsApp_Image_2026-01-05_at_8.32.59_PM_epmzkl.jpg",
    linkedin: "https://www.linkedin.com/in/akashsundarrr",
    instagram: "https://www.instagram.com/akashsundarr",
  },
  {
    id: 15,
    name: "Naveen V R",
    role: "DL",
    department: "Electronics",
    year: "3rd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767509910/WhatsApp_Image_2026-01-03_at_11.57.39_PM_u89x8d.jpg",
    linkedin: "https://www.linkedin.com/in/naveen-v-r-325a17285",
    instagram: "https://www.instagram.com/naveenvr._",
  },
  {
    id: 16,
    name: "Haripriya K Parveen",
    role: "SMH",
    department: "Electronics",
    year: "2nd Year",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767456669/IMG-20250601-WA0095_-_Haripriya_Praveen_qnglbg.jpg",
    linkedin: "https://www.linkedin.com/in/haripriya-k-praveen-91a1b4330",
    instagram: "https://www.instagram.com/__sreekutttyy__/",
  },
];

const gallery = [
  {
    id: 1,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767546323/WhatsApp_Image_2026-01-04_at_10.33.55_PM_1_rom5kr.jpg",
  },
  {
    id: 2,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767546322/WhatsApp_Image_2026-01-04_at_10.33.55_PM_2_jln5qh.jpg",
  },
  {
    id: 3,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767546323/WhatsApp_Image_2026-01-04_at_10.33.55_PM_w34xvf.jpg",
  },
  {
    id: 4,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767546323/WhatsApp_Image_2026-01-04_at_10.34.05_PM_abr3bw.jpg",
  },
  {
    id: 5,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767546323/WhatsApp_Image_2026-01-04_at_10.34.04_PM_tkmf5z.jpg",
  },
  {
    id: 6,
    category: "",
    alt: "",
    image:
      "https://res.cloudinary.com/dki3vvr8y/image/upload/v1767547238/WhatsApp_Image_2026-01-04_at_10.50.13_PM_nr0wuu.jpg",
  },
];

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    year: "",
    email: "",
    ideaTitle: "",
    problem: "",
    solution: "",
    stage: "Idea",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const WHATSAPP_GROUP_URL = import.meta.env.VITE_WHATSAPP_GROUP_URL;

  const [membershipData, setMembershipData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    semester: "",
    interest: "",
    reason: "",
    ideas: "",
  });
  const [membershipStatus, setMembershipStatus] = useState({
    type: "",
    message: "",
    showWhatsApp: false,
  });

  const handleMembershipChange = (e) => {
    setMembershipData({ ...membershipData, [e.target.name]: e.target.value });
  };

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    setMembershipStatus({
      type: "loading",
      message: "Submitting...",
      showWhatsApp: false,
    });

    try {
      const endpoint =
        import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "YOUR_APPS_SCRIPT_URL";

      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "membership",
          ...membershipData,
          timestamp: new Date().toISOString(),
        }),
      });

      setMembershipStatus({
        type: "success",
        message: "Application submitted successfully!",
        showWhatsApp: true,
      });
    } catch (error) {
      setMembershipStatus({
        type: "error",
        message: "Failed to submit. Please try again.",
        showWhatsApp: false,
      });
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Submitting..." });

    try {
      const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "URL";

      const response = await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormStatus({
        type: "success",
        message: "Idea submitted successfully! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        department: "",
        year: "",
        email: "",
        ideaTitle: "",
        problem: "",
        solution: "",
        stage: "Idea",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to submit. Please try again.",
      });
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gradient-to-br from-[#306bdd] to-blue-700 rounded-full flex items-center justify-center p-2">
                <img
                  src="https://res.cloudinary.com/dki3vvr8y/image/upload/v1767634842/IEDC_CEC_upscaled_tygkaq.png"
                  alt="IEDC CEC Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-black">
                IEDC CEC
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Events",
                "Projects",
                "Team",
                "Gallery",
                "Submit Idea",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-black hover:text-[#306bdd] transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {[
                "About",
                "Events",
                "Projects",
                "Team",
                "Gallery",
                "Submit Idea",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="block w-full text-left text-black hover:text-[#306bdd] py-2 font-medium"
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
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Innovation.
            <br />
            <span className="text-[#306bdd]">Entrepreneurship.</span>
            <br />
            Leadership.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Empowering future entrepreneurs at College of Engineering Cherthala
            through innovation, mentorship, and real-world startup experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("submit-idea")}
              className="bg-[#306bdd] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Submit Your Idea <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="border-2 border-[#306bdd] text-[#306bdd] px-8 py-4 rounded-lg hover:bg-[#306bdd] hover:text-white transition-all text-lg font-semibold"
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
              { value: "40+", label: "Active Members", icon: Users },
              { value: "20+", label: "Events Conducted", icon: Calendar },
              { value: "100+", label: "Students Impacted", icon: Award },
              { value: "2", label: "Active Startups", icon: Rocket },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f9fafb] rounded-full mb-4 group-hover:bg-[#306bdd] transition-colors">
                  <stat.icon className="h-8 w-8 text-[#306bdd] group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            About <span className="text-[#306bdd]">IEDC CEC</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#306bdd]">
              <Lightbulb className="h-12 w-12 text-[#306bdd] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To foster a culture of innovation and entrepreneurship among
                students at Government College of Engineering, Cherthala,
                established in 2004, by providing resources, mentorship, and
                opportunities to transform ideas into impactful ventures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#306bdd]">
              <Rocket className="h-12 w-12 text-[#306bdd] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Kerala's leading student-driven innovation hub, creating
                entrepreneurs who solve real-world problems and contribute to
                economic growth and social development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#306bdd]">
              <Users className="h-12 w-12 text-[#306bdd] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">What We Do</h3>
              <p className="text-gray-600 leading-relaxed">
                We organize workshops, hackathons, mentorship programs, and
                provide seed funding opportunities. Our community supports
                students from ideation to launching successful startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Events & <span className="text-[#306bdd]">Programs</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Celebrating our journey of innovation and learning
          </p>

          <h3 className="text-2xl font-bold text-black mb-6">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {events
              .filter((e) => e.status === "past")
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-[#f9fafb] p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#306bdd] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* project sec */}
      <section id="projects" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Our <span className="text-[#306bdd]">Startups</span>
          </h2>
        </div>

        <div className="snap-y snap-mandatory md:h-screen md:overflow-y-scroll">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="snap-start min-h-screen relative flex items-center justify-center py-12 md:py-0"
              style={{
                backgroundImage: project.bgImage
                  ? `url(${project.bgImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: project.bgImage
                  ? "transparent"
                  : index % 2 === 0
                  ? "#f9fafb"
                  : "#ffffff",
              }}
            >
              {project.bgImage && (
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
              )}

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    {project.image ? (
                      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-[#306bdd]">
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          className="w-full h-auto"
                        />
                      </div>
                    ) : (
                      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl bg-gradient-to-br from-[#306bdd] to-black aspect-video flex items-center justify-center border-2 md:border-4 border-[#306bdd]">
                        <Rocket className="h-20 w-20 md:h-32 md:w-32 text-white" />
                      </div>
                    )}
                  </div>

                  <div
                    className={`order-1 md:order-2 ${
                      project.bgImage ? "text-white" : "text-black"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <span
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold ${
                          project.status === "MVP"
                            ? "bg-[#306bdd] text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span
                        className={`text-xs md:text-sm font-semibold ${
                          project.bgImage ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {project.team}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                      {project.name}
                    </h2>

                    <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                      <div>
                        <h3
                          className={`text-sm md:text-lg font-bold mb-1.5 md:mb-2 ${
                            project.bgImage
                              ? "text-[#306bdd]"
                              : "text-[#306bdd]"
                          }`}
                        >
                          THE PROBLEM
                        </h3>
                        <p
                          className={`text-sm md:text-lg leading-relaxed ${
                            project.bgImage ? "text-gray-100" : "text-gray-600"
                          }`}
                        >
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h3
                          className={`text-sm md:text-lg font-bold mb-1.5 md:mb-2 ${
                            project.bgImage
                              ? "text-[#306bdd]"
                              : "text-[#306bdd]"
                          }`}
                        >
                          OUR SOLUTION
                        </h3>
                        <p
                          className={`text-sm md:text-lg leading-relaxed ${
                            project.bgImage ? "text-gray-100" : "text-gray-600"
                          }`}
                        >
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold flex items-center gap-2 transition-all ${
                          project.bgImage
                            ? "bg-[#306bdd] text-white hover:bg-blue-700"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        Visit Website{" "}
                        <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </div>

                    <div className="flex gap-3 md:gap-4">
                      <a
                        href={project.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 md:p-3 rounded-full transition-all ${
                          project.bgImage
                            ? "bg-[#306bdd]/80 hover:bg-[#306bdd] text-white"
                            : "bg-[#306bdd] hover:bg-blue-700 text-white"
                        }`}
                      >
                        <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                      </a>
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 md:p-3 rounded-full transition-all ${
                          project.bgImage
                            ? "bg-[#306bdd]/80 hover:bg-[#306bdd] text-white"
                            : "bg-[#306bdd] hover:bg-blue-700 text-white"
                        }`}
                      >
                        <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p
                      className={`text-sm mb-2 ${
                        project.bgImage ? "text-white" : "text-gray-600"
                      }`}
                    >
                      Scroll for next project
                    </p>
                    <ChevronRight
                      className={`h-6 w-6 mx-auto rotate-90 animate-bounce ${
                        project.bgImage ? "text-[#306bdd]" : "text-[#306bdd]"
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* team sec */}

      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Executive <span className="text-[#306bdd]">Team</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Meet the leaders driving innovation at CEC
          </p>

          <div className="relative">
            <div className="flex justify-center gap-2 mb-8">
              {team.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTeamIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentTeamIndex
                      ? "w-8 bg-[#306bdd]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentTeamIndex * 100}%)`,
                }}
              >
                {team.map((member) => (
                  <div key={member.id} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-md mx-auto bg-[#f9fafb] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-gray-200 hover:border-[#306bdd]">
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center ring-4 ring-[#306bdd] ring-opacity-20">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Users className="h-20 w-20 text-[#306bdd]" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#306bdd] font-bold mb-2 text-lg">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-6">
                        {member.department} • {member.year}
                      </p>
                      <div className="flex justify-center gap-4">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-200 hover:bg-[#0077b5] text-black hover:text-white rounded-full transition-all"
                          >
                            <Linkedin className="h-6 w-6" />
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-black hover:text-white rounded-full transition-all"
                          >
                            <Instagram className="h-6 w-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentTeamIndex(
                  (prev) => (prev - 1 + team.length) % team.length
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#306bdd] text-black hover:text-white p-3 rounded-full shadow-lg transition-all z-10 border-2 border-gray-200"
            >
              <ChevronRight className="h-6 w-6 rotate-180" />
            </button>
            <button
              onClick={() =>
                setCurrentTeamIndex((prev) => (prev + 1) % team.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#306bdd] text-black hover:text-white p-3 rounded-full shadow-lg transition-all z-10 border-2 border-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm font-medium">
                {currentTeamIndex + 1} / {team.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Our <span className="text-[#306bdd]">Gallery</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Capturing moments of innovation and collaboration
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group shadow-md border-2 border-transparent hover:border-[#306bdd]"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#306bdd] to-black flex items-center justify-center">
                    <Award className="h-16 w-16 text-white opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm font-semibold">
                      {item.category}
                    </p>
                    <p className="text-white/90 text-xs">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section id="submit-idea" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Submit Your <span className="text-[#306bdd]">Idea</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Have a brilliant idea? Share it with us and let's bring it to life
            together
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-[#f9fafb] p-8 rounded-2xl border-2 border-[#306bdd]"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black font-semibold mb-2">
                  Department *
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">
                  Year *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
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
              <label className="block text-black font-semibold mb-2">
                Idea Title *
              </label>
              <input
                type="text"
                name="ideaTitle"
                value={formData.ideaTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">
                Problem Statement *
              </label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">
                Proposed Solution *
              </label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">
                Current Stage *
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white"
              >
                <option value="Idea">Idea</option>
                <option value="Prototype">Prototype</option>
                <option value="MVP">MVP</option>
              </select>
            </div>

            {formStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : formStatus.type === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.type === "loading"}
              className="w-full bg-[#306bdd] text-white py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg disabled:opacity-50"
            >
              {formStatus.type === "loading" ? "Submitting..." : "Submit Idea"}
            </button>
          </form>
        </div>
      </section>

      {/* Join IEDC Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#101827] to-gray-800">
        <div className="max-w-4xl mx-auto">
          {!showMembershipForm ? (
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Innovation Journey
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Be part of a vibrant community of innovators, entrepreneurs, and
                changemakers. Whether you have an idea or just the passion to
                learn, there's a place for you at IEDC CEC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowMembershipForm(true)}
                  className="bg-white text-[#101827] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
                >
                  Become a Member
                </button>
              
              </div>
            </div>
          ) : (
            // Membership Form
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Become a Member
                </h2>
                <p className="text-xl text-gray-300">
                  Join IEDC CEC and start your innovation journey today
                </p>
              </div>

              <form
                onSubmit={handleMembershipSubmit}
                className="bg-white p-8 rounded-2xl shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={membershipData.name}
                      onChange={handleMembershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={membershipData.email}
                      onChange={handleMembershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={membershipData.phone}
                      onChange={handleMembershipChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={membershipData.department}
                      onChange={handleMembershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    >
                      <option value="">Select Department</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="Electrical">Electrical</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Semester *
                    </label>
                    <select
                      name="semester"
                      value={membershipData.semester}
                      onChange={handleMembershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    >
                      <option value="">Select Semester</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                      <option value="S4">S4</option>
                      <option value="S5">S5</option>
                      <option value="S6">S6</option>
                      <option value="S7">S7</option>
                      <option value="S8">S8</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Area of Interest *
                    </label>
                    <select
                      name="interest"
                      value={membershipData.interest}
                      onChange={handleMembershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                    >
                      <option value="">Select Interest</option>
                      <option value="Technology/Development">
                        Technology/Development
                      </option>
                      <option value="Design/UI-UX">Design/UI-UX</option>
                      <option value="Business/Marketing">
                        Business/Marketing
                      </option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Event Management">Event Management</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-black font-semibold mb-2">
                    Why do you want to join IEDC? *
                  </label>
                  <textarea
                    name="reason"
                    value={membershipData.reason}
                    onChange={handleMembershipChange}
                    required
                    rows="4"
                    placeholder="Tell us about your motivation and what you hope to achieve..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-black font-semibold mb-2">
                    Do you have any startup ideas or projects? (Optional)
                  </label>
                  <textarea
                    name="ideas"
                    value={membershipData.ideas}
                    onChange={handleMembershipChange}
                    rows="3"
                    placeholder="Share any ideas or projects you're working on..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#306bdd] bg-white text-black"
                  />
                </div>

                {membershipStatus.type === "success" &&
                  membershipStatus.showWhatsApp && (
                    <div className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                      <p className="text-green-800 font-semibold mb-4 text-lg">
                        Welcome to IEDC CEC!
                      </p>
                      <p className="text-gray-700 mb-4">
                        Join our WhatsApp community to stay updated with events,
                        workshops, and connect with fellow members.
                      </p>
                      <a
                        href={WHATSAPP_GROUP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all font-semibold"
                      >
                        📱 Join WhatsApp Group
                      </a>
                      <p className="text-gray-600 text-sm mt-3">
                        Using: +91 {membershipData.phone}
                      </p>
                    </div>
                  )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowMembershipForm(false);
                      setMembershipStatus({
                        type: "",
                        message: "",
                        showWhatsApp: false,
                      });
                      setMembershipData({
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                        semester: "",
                        interest: "",
                        reason: "",
                        ideas: "",
                      });
                    }}
                    className="flex-1 bg-gray-200 text-black px-6 py-4 rounded-lg hover:bg-gray-300 transition-all font-semibold text-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={membershipStatus.type === "loading"}
                    className="flex-1 bg-[#306bdd] text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg disabled:opacity-50"
                  >
                    {membershipStatus.type === "loading"
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="ml-2 text-xl font-bold">IEDC CEC</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Innovation and Entrepreneurship Development Cell of Government
                College of Engineering, Cherthala. Empowering students to build
                impactful solutions and startups.
              </p>
            </div>

            {/* College */}
            <div>
              <h4 className="font-bold mb-4 text-[#306bdd]">College</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Government College of Engineering
                <br />
                Cherthala, Alappuzha
                <br />
                Kerala, India
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-[#306bdd]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "About IEDC", id: "about" },
                  { label: "Events", id: "events" },
                  { label: "Projects", id: "projects" },
                  { label: "Team", id: "team" },
                  { label: "Submit Idea", id: "submit-idea" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-[#306bdd] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-bold mb-4 text-[#306bdd]">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#306bdd]" />
                  <span>iedc@cectl.ac.in</span>
                </div>

                <div className="flex items-center gap-4 pt-3">
                  <a
                    href="https://www.linkedin.com/company/iedc-cec"
                    className="hover:text-[#306bdd] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/iedc.cec?igsh=MTliNndjY2hienh4MA=="
                    className="hover:text-[#306bdd] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} IEDC CEC. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built by IEDC CEC Tech Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
