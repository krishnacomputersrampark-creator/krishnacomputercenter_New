import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Monitor,
  Cpu,
  Briefcase,
  Baby,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
  MessageCircle,
  X as CloseIcon,
  Calculator,
  UserPlus,
  Code,
  FileText,
  Database,
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showFeeEnquiry, setShowFeeEnquiry] = useState(false);

  const heroSlides = [
    {
      title: 'Empowering Future Through Quality IT Education',
      subtitle: 'Authorised Facilitation Center of NIELIT',
      image: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=720',
    },
    {
      title: 'Bridging the Digital Divide',
      subtitle: 'Making IT Education Accessible for All',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=720',
    },
    {
      title: 'Building Careers, Shaping Futures',
      subtitle: 'Join Our Network of Authorized Study Centres',
      image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=720',
    },
  ];

  const courses = [
    {
      title: 'DCA - Diploma in Computer Applications',
      icon: <GraduationCap className="w-12 h-12" />,
      description: 'Comprehensive 1-year diploma covering MS Office, Internet, Tally, and programming basics.',
      image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1 Year',
      fee: 'Rs. 15,000',
    },
    {
      title: 'ADCA - Advanced Diploma',
      icon: <Award className="w-12 h-12" />,
      description: 'Advanced diploma with specialization in programming, web design, and accounting.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '18 Months',
      fee: 'Rs. 25,000',
    },
    {
      title: 'Tally with GST',
      icon: <Calculator className="w-12 h-12" />,
      description: 'Complete accounting course with Tally Prime, GST, TDS, and payroll management.',
      image: 'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6 Months',
      fee: 'Rs. 8,000',
    },
    {
      title: 'Python Programming',
      icon: <Code className="w-12 h-12" />,
      description: 'Learn Python from basics to advanced with real-world projects and applications.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '4 Months',
      fee: 'Rs. 10,000',
    },
    {
      title: 'Computer Hardware & Networking',
      icon: <Cpu className="w-12 h-12" />,
      description: 'Hardware maintenance, networking, troubleshooting and server administration.',
      image: 'https://images.pexels.com/photos/177548/pexels-photo-177548.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6 Months',
      fee: 'Rs. 12,000',
    },
    {
      title: 'Web Design & Development',
      icon: <Monitor className="w-12 h-12" />,
      description: 'HTML, CSS, JavaScript, React - Build modern responsive websites.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6 Months',
      fee: 'Rs. 15,000',
    },
  ];

  const features = [
    {
      icon: <Users className="w-14 h-14 text-blue-600" />,
      title: 'Expert Teachers',
      description: 'Industry professionals and certified trainers with years of experience.',
    },
    {
      icon: <BookOpen className="w-14 h-14 text-blue-600" />,
      title: 'Course Material',
      description: 'Well-structured courses with study material in both Hindi & English.',
    },
    {
      icon: <Star className="w-14 h-14 text-blue-600" />,
      title: 'Student-Centered Learning',
      description: 'Doubt-clearing sessions, extra practice hours, personal attention.',
    },
    {
      icon: <Briefcase className="w-14 h-14 text-blue-600" />,
      title: 'Affordable Price',
      description: 'Flexible installments and scholarship facilities available.',
    },
  ];

  const centers = [
    { name: 'City Centre', location: 'Delhi', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'North Branch', location: 'Lucknow', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'South Extension', location: 'Patna', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'East Wing', location: 'Kolkata', image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  const students = [
    { name: 'Rahul Kumar', course: 'DCA', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Priya Singh', course: 'ADCA', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Amit Verma', course: 'Tally', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Sunita Devi', course: 'Python', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  const notices = [
    'New batch for DCA & ADCA starting from 20th June 2026',
    'Online examination registration for NIELIT courses now open',
    'Free workshop on Python Programming this weekend',
    'Admissions open for Tally with GST course',
  ];

  const stats = [
    { icon: <BookOpen className="w-10 h-10" />, value: 50, label: 'Total Courses', suffix: '+' },
    { icon: <GraduationCap className="w-10 h-10" />, value: 15000, label: 'Our Students', suffix: '+' },
    { icon: <Users className="w-10 h-10" />, value: 100, label: 'Expert Trainers', suffix: '+' },
    { icon: <Award className="w-10 h-10" />, value: 25, label: 'Years Experience', suffix: '+' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setTimeout(() => setStatsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (statsAnimated) {
        const duration = 2000;
        const steps = 50;
        const stepValue = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, [statsAnimated, value]);
    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              +91 9876543210
            </a>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              info@krishnacomputercenter.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Mon - Sat: 9:00 AM - 7:00 PM
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-2xl">KCC</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                KRISHNA COMPUTER CENTER
              </h1>
              <p className="text-xs md:text-sm text-blue-600">
                An Institute of IT &amp; Management
              </p>
              <p className="text-xs text-gray-500">
                Authorised Facilitation Center of NIELIT
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={() => setShowRegistrationForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              Register Now
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-blue-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-4 gap-3">
              {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { setShowRegistrationForm(true); setMobileMenuOpen(false); }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-center mt-2"
              >
                Register Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{slide.title}</h2>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100">{slide.subtitle}</p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setShowRegistrationForm(true)}
                      className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg"
                    >
                      Register Now
                    </button>
                    <button
                      onClick={() => setShowFeeEnquiry(true)}
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all"
                    >
                      Fee Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                <div className="w-12 h-1 bg-blue-600 rounded" />
                About Us
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Krishna Computer Center</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Krishna Computer Center is an Authorised Facilitation Center of NIELIT (National Institute of Electronics &amp; Information Technology), dedicated to making Information Technology education accessible to students from all backgrounds.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our inception, we have been committed to providing quality IT education as a basic skill for both rural and urban communities, empowering every section of society with technology-driven opportunities.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, title: 'NIELIT Certified', sub: 'Authorized Facilitation Center' },
                  { icon: <Users className="w-5 h-5 text-blue-600" />, title: 'Expert Faculty', sub: 'Industry professionals' },
                  { icon: <BookOpen className="w-5 h-5 text-blue-600" />, title: 'Quality Education', sub: 'Bilingual study materials' },
                  { icon: <Award className="w-5 h-5 text-blue-600" />, title: 'Recognized Center', sub: 'Government certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowRegistrationForm(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                >
                  <UserPlus className="w-5 h-5" />
                  Register Now
                </button>
                <button
                  onClick={() => setShowFeeEnquiry(true)}
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  Fee Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-semibold mb-2 flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-blue-600 rounded" />
              Our Courses
              <div className="w-12 h-1 bg-blue-600 rounded" />
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let&apos;s Check Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of courses designed to equip you with industry-relevant skills</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">{course.icon}</div>
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-bold text-lg">{course.fee}</span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <button
                    onClick={() => setShowRegistrationForm(true)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowFeeEnquiry(true)}
              className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              <FileText className="w-5 h-5" />
              Request Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-semibold mb-2 flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-blue-600 rounded" />
              Why Choose Us
              <div className="w-12 h-1 bg-blue-600 rounded" />
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We Are Expert &amp; Do Our Best For Your Goal</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <div className="group-hover:text-white transition-colors">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centers & Students */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                <div className="w-12 h-1 bg-blue-600 rounded" />
                Recently Joined Centres
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Growing Network</h2>
              <div className="grid grid-cols-2 gap-4">
                {centers.map((center, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <img src={center.image} alt={center.name} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800">{center.name}</h4>
                      <p className="text-sm text-gray-500">{center.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                <div className="w-12 h-1 bg-blue-600 rounded" />
                Recently Joined Students
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Success Stories</h2>
              <div className="grid grid-cols-2 gap-4">
                {students.map((student, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-all">
                    <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{student.name}</h4>
                      <p className="text-sm text-blue-600">{student.course}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Bar */}
      <section className="py-6 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg flex-shrink-0">
              <BookOpen className="w-6 h-6" />
              Notice / News
            </div>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap">
                {notices.map((notice, index) => (
                  <span key={index} className="inline-block mx-8 text-white">{notice}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-semibold mb-2 flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-blue-600 rounded" />
              Contact Us
              <div className="w-12 h-1 bg-blue-600 rounded" />
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Course Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="">Select Course</option>
                      <option value="dca">DCA - Diploma in Computer Applications</option>
                      <option value="adca">ADCA - Advanced Diploma</option>
                      <option value="tally">Tally with GST</option>
                      <option value="python">Python Programming</option>
                      <option value="hardware">Computer Hardware</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-6 h-6 text-blue-600" />, title: 'Our Address', lines: ['Krishna Computer Center, Main Road, City Center, District - 123456'] },
                { icon: <Phone className="w-6 h-6 text-blue-600" />, title: 'Phone Number', lines: ['+91 9876543210', '+91 9876543211'] },
                { icon: <Mail className="w-6 h-6 text-blue-600" />, title: 'Email Address', lines: ['info@krishnacomputercenter.com', 'admission@krishnacomputercenter.com'] },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">{card.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                    <a key={index} href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">KCC</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">KRISHNA COMPUTER CENTER</h3>
                  <p className="text-xs text-blue-200">An Institute of IT &amp; Management</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">Authorised Facilitation Center of NIELIT, dedicated to providing quality IT education and skill development programs.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Courses', 'Gallery', 'Contact Us'].map((link) => (
                  <li key={link}><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Our Courses</h4>
              <ul className="space-y-2">
                {['DCA - Diploma', 'ADCA - Advanced Diploma', 'Tally with GST', 'Python Programming', 'Web Development', 'Hardware & Networking'].map((link) => (
                  <li key={link}><a href="#courses" className="text-blue-200 hover:text-white transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-blue-200">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  Krishna Computer Center, Main Road, City Center
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-200">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 9876543210
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-200">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@krishnacomputercenter.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              &copy; Copyright 2026 KRISHNA COMPUTER CENTER. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                <a key={link} href="#" className="text-blue-200 hover:text-white text-sm transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Student Registration Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-blue-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <UserPlus className="w-6 h-6" />
                <h3 className="text-xl font-bold">Student Registration Form</h3>
              </div>
              <button onClick={() => setShowRegistrationForm(false)} className="hover:bg-blue-700 p-1 rounded-full">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Father&apos;s Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter father's name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                  <input type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Education Qualification *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="">Select Qualification</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Post Graduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Select Course *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="">Select Course</option>
                    <option value="dca">DCA - Diploma in Computer Applications</option>
                    <option value="adca">ADCA - Advanced Diploma in Computer Applications</option>
                    <option value="tally">Tally Prime with GST</option>
                    <option value="python">Python Programming</option>
                    <option value="web">Web Design & Development</option>
                    <option value="hardware">Computer Hardware & Networking</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Address *</label>
                <textarea required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Enter your complete address" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" required id="terms" className="w-4 h-4 text-blue-600" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms and conditions and confirm that the information provided is accurate.
                </label>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all">
                  Submit Registration
                </button>
                <button type="button" onClick={() => setShowRegistrationForm(false)} className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fee Enquiry Modal */}
      {showFeeEnquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
            <div className="bg-blue-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6" />
                <h3 className="text-xl font-bold">Fee Enquiry Form</h3>
              </div>
              <button onClick={() => setShowFeeEnquiry(false)} className="hover:bg-blue-700 p-1 rounded-full">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Select Course(s) for Fee Details *</label>
                <div className="space-y-2">
                  {['DCA - Diploma in Computer Applications', 'ADCA - Advanced Diploma', 'Tally with GST', 'Python Programming', 'Web Design & Development', 'Computer Hardware & Networking'].map((course) => (
                    <label key={course} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="text-gray-700">{course}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Any Specific Query</label>
                <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Enter your query (optional)" />
              </div>
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all">
                  Get Fee Details
                </button>
                <button type="button" onClick={() => setShowFeeEnquiry(false)} className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/919876543210?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default App;
