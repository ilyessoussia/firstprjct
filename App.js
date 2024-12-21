import React, { useEffect, useState } from 'react';
import "./App.css";
import SimpleBot from './components/Chatbot/SimpleBot';
import AccountForm from './components/AccountForm';
import LoginForm from './components/LoginForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import catLarg1 from './assets/images/cat-larg1.jpg';
import catLarg2 from './assets/images/cat-larg2.jpg';
import catLarg3 from './assets/images/cat-larg3.jpg';
import catLarg4 from './assets/images/cat-larg4.jpg';
import blogCat1 from './assets/images/blog-cat1.jpg';
import blogCat2 from './assets/images/blog-cat2.jpg';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleCardClick = (e) => {
    const videoLink = e.currentTarget.getAttribute("data-video");
    setVideoUrl(videoLink);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setVideoUrl("");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  useEffect(() => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');
    let currentSlide = 0;
    let autoSlideInterval;
  
    function showSlide(n) {
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
  
      slides[n].classList.add('active');
      dots[n].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 5000); // Restart auto-slide timer
    }
  
    // Add event listeners
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetAutoSlide(); // Reset timer on dot click
      });
    });
  
    prevButton.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide(); // Reset timer on arrow click
    });
  
    nextButton.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide(); // Reset timer on arrow click
    });
  
    // Auto advance slides
    autoSlideInterval = setInterval(nextSlide, 5000);
  
    // Show first slide
    showSlide(0);
  
    // Cleanup
    return () => {
      clearInterval(autoSlideInterval);
      prevButton.removeEventListener('click', prevSlide);
      nextButton.removeEventListener('click', nextSlide);
      dots.forEach(dot => dot.removeEventListener('click', resetAutoSlide));
    };
  }, []);

  return (
    <div className="App">
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <div>
          {/* Header */}
          <header className="header">
            <div className="logo">TUNICONSULTING</div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <div className="dropdown">
                <a href="#services" className="dropbtn">Our Services</a>
                <div className="dropdown-content">
                  <a href="#iso9001">ISO 9001</a>
                  <a href="#iso14001">ISO 14001</a>
                  <a href="#iso45001">ISO 45001</a>
                  <a href="#iso27001">ISO 27001</a>
                  <a href="#iso50001">ISO 50001</a>
                  <a href="#iso22301">ISO 22301</a>
                </div>
              </div>
              <div className="dropdown">
                <a href="#mission" className="dropbtn">Our Mission</a>
                <div className="dropdown-content">
                  <a href="#Lead Sessions">Lead Sessions</a>
                  <a href="#Tailored Programs">Tailored Programs </a>
                  <a href="#Experience Emphasized">Experience Emphasized</a>
                  <a href="#Continuous Support">Continuous Support </a>
                  <a href="#Proven Results">Proven Results</a>
                </div>
              </div>
              <div className="dropdown">
                <a href="#services" className="dropbtn">Blogs</a>
                <div className="dropdown-content">
                  <a href="#Design Trends">Design Trends</a>
                  <a href="#Web Development">Web Development</a>
                  <a href="#SEO Strategies">SEO Strategies</a>
                  <a href="#Digital Marketing">Digital Marketing</a>
                </div>
              </div>
              <a href="#team">Our Team</a>
            </nav>
            <button 
              className="contact-button" 
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </header>

          {/* Hero Section */}
          <section className="hero" id="home">
            <div className="carousel">
              <div className="carousel-inner">
                {/* First Slide */}
                <div className="carousel-slide active">
                  <div className="hero-content">
                    <h1>
                      Ready to take your <span className="highlight">Business Growth</span> to the next level?
                    </h1>
                    <button className="cta-button"><a href="#contact-form">Start your Free Trial</a></button>
                  </div>
                  <img 
                    src="https://www.mbbmanagement.com/wp-content/uploads/2023/10/business-consulting.jpg" 
                    alt="Slide 1"
                    className="carousel-image"
                  />
                </div>

                {/* Second Slide */}
                <div className="carousel-slide">
                  <div className="hero-content">
                    <h1>
                      Transform your <span className="highlight">Business</span> with us
                    </h1>
                    <button className="cta-button"><a href="#contact-form">Learn More</a></button>
                  </div>
                  <img 
                    src="https://www.thehechtmangroup.com/wp-content/uploads/2018/11/business-consulting.jpg"
                    className="carousel-image"
                    alt="Slide 2"
                  />
                </div>

                {/* Third Slide */}
                <div className="carousel-slide">
                  <div className="hero-content">
                    <h1>
                      Expert <span className="highlight">Solutions</span> for Your Success
                    </h1>
                    <button className="cta-button"><a href="#contact-form">Get Started</a></button>
                  </div>
                  <img 
                    src="https://www.bip-group.com/wp-content/uploads/2021/08/general_junior-scaled.jpeg" 
                    alt="Slide 3"
                    className="carousel-image"
                  />
                </div>

                {/* Fourth Slide */}
                <div className="carousel-slide">
                  <div className="hero-content">
                    <h1>
                      Your Path to <span className="highlight">Excellence</span>
                    </h1>
                    <button className="cta-button"><a href="#contact-form">Contact Us</a></button>
                  </div>
                  <img 
                    src="https://opexsociety.org/wp-content/uploads/2022/03/Consult.jpg" 
                    alt="Slide 4"
                    className="carousel-image"
                  />
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              {/* Navigation Arrows */}
              <button className="carousel-arrow prev">❮</button>
              <button className="carousel-arrow next">❯</button>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section" id="services">
            <div className="services-container">
              <h2 className="section-title">Our Services</h2>
              <div className="service-cards">
                {/* Service Cards */}
                <div className="service-card dark-card" data-video="https://www.youtube.com/embed/O5T4H8K_rwQ" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 9001</h4>
                  <p>Quality Management Systems</p>
                  <p>
                    Ensures consistent product quality, increases customer satisfaction,
                    improves efficiency, and boosts long-term growth.
                  </p>
                </div>
                <div className="service-card" data-video="https://www.youtube.com/embed/jERk13d_v74" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 14001</h4>
                  <p>Environmental Management Systems</p>
                  <p>
                    Reduces environmental impact, enhances brand reputation, and opens
                    opportunities in eco-conscious markets.
                  </p>
                </div>
                <div className="service-card" data-video="https://www.youtube.com/embed/n4JnUOc78hg" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 45001</h4>
                  <p>Occupational Health and Safety</p>
                  <p>
                    Creates a safer workplace, reduces accidents, and boosts productivity.
                  </p>
                </div>
                <div className="service-card" data-video="https://www.youtube.com/embed/SHp41xcK0Bg" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 27001</h4>
                  <p>Information Security Management</p>
                  <p>
                    Protects sensitive data, reduces cyber threats, and builds trust with
                    clients, giving a competitive edge.
                  </p>
                </div>
                <div className="service-card" data-video="https://www.youtube.com/embed/MCPL3qk2qKI" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 50001</h4>
                  <p>Energy Management Systems</p>
                  <p>
                    Optimizes energy use, cuts costs, and improves operational efficiency.
                  </p>
                </div>
                <div className="service-card" data-video="https://www.youtube.com/embed/g-wtjrbdAbg" onClick={handleCardClick}>
                  <h4 className="service-title">ISO 22301</h4>
                  <p>Business Continuity Management</p>
                  <p>
                    Ensures business resilience during disruptions, minimizes downtime,
                    and builds client confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>
            {/* Modal */}
      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="100%"
              height="400px"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
             </div>
              )}

          {/* Our Mission Section */}
          <section className="mission-section" id="mission">
            <div className="mission-container">
              {/* Text Section */}
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <h3 className="mission-heading">Boost your business with.</h3>
                <p className="mission-description">
                  At TUNICONSULTING we are committed to delivering exceptional quality in everything we do.
                </p>
                <ul className="mission-list">
                  <li>
                    <span className="icon"></span> Expert instructors lead sessions.
                  </li>
                  <li>
                    <span className="icon"></span> Tailored programs for success.
                  </li>
                  <li>
                    <span className="icon"></span> Hands-on experience emphasized.
                  </li>
                  <li>
                    <span className="icon"></span> Continuous support for learners.
                  </li>
                  <li>
                    <span className="icon"></span> Proven methods drive results.
                  </li>
                  <li>
                    <span className="icon"></span> Commitment to excellence guaranteed.
                  </li>
                </ul>
              </div>
              {/* Image and Stats Section */}
          <div className="mission-visuals">
            <div className="mission-images">
              <img
              src="https://www.thebalancemoney.com/thmb/xeQVW22FX5PhqlPc4rhD502R-ms=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/business-people-cheering-in-office-468839615-59e64882845b340011bbc743.jpg"
              alt="Team discussion"
              className="mission-image"
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/490/350/small/young-attractive-girl-making-a-report-in-front-of-her-colleagues-working-meeting-in-the-office-photo.JPG"
              alt="Office collaboration"
              className="mission-image"
            />
          </div>
          <div className="stats">
            <div className="stat">
              <h3>10k</h3>
              <p>Great conversations per month</p>
            </div>
            <div className="stat">
              <h3>95+</h3>
              <p>Projects Complete</p>
            </div>
          </div>
        </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="our-team-section" id="team">
            <h2 className="section-title">Our Team</h2>
            <div className="team-images">
              <div className="team-member">
                <img src="https://media.licdn.com/dms/image/v2/C4D03AQFK6Hv1S_212Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1654013057631?e=2147483647&v=beta&t=5hFozdIWWsaung2Mb1dAUiC_0JEIjPCm3u_bD1nd-mo  " alt="Team Member 1" />
                <p>Dr khaled ben ali</p>
                <p>CEO</p>
              </div>
              <div className="team-member">
                <img src="https://nextlevelwardrobe.com/wp-content/uploads/2023/07/NEXT-LEVEL-WARDROBE-VIRTUAL-HOME.png" alt="Team Member 2" />
                <p>Mme samira magroun </p>
                <p>CTO</p>
              </div>
              <div className="team-member">
                <img src="https://www.imageconsultinginstitute.com/wp-content/uploads/2020/10/Mihika-Bhanot-testimonial-img.jpg" alt="Team Member 3" />
                <p>Mme amira othmen </p>
                <p>CFO</p>
              </div>
              <div className="team-member">
                <img src="https://rabih.dev/static/media/istockphoto-1016761216-612x612.effb7da8b64eafed5ec3.jpeg" alt="Team Member 4" />
                <p>Dr ahmed ben ahmed</p>
                <p>CMO</p>
              </div>
            </div>

            <div className="team-banner">
              <h3>Enough talk, let's get to work!</h3>
              <button className="cta-button">
                <a href="#contact-form" style={{ color: "white", textDecoration: "none" }}>
                  Get in touch
                </a>
              </button>
            </div>
          </section>

        {/* Blog Section */}
          <div className="blog-section">
            <div className="container">
            <h2 className="section-title">Blogs</h2>
              <div className="blog-columns">
                <div className="blog-posts">
                  {/* Blog Post 1 */}
                  <div className="blog-post">
                    <div className="image-container">
                      <a href="#Design Trends"><img src={catLarg1} alt="Design Trends" /></a>
                    </div>
                    <h2 className="blog-title"> Why Every Business Needs Them for Growth and Success</h2>
                    <div className="blog-meta">
                      <span className="blog-date">15 October, 2023</span>
                      <span className="blog-comments">5 comments</span>
                    </div>
                    <p className="blog-description">
                    Explore the importance of ISO standards in improving business operations, increasing customer trust, and gaining a competitive edge. Learn how these international standards act as a roadmap to quality, safety, and efficiency.
                    </p>
                    <a href="#Design Trends" className="blog-read-more">Read More</a>
                  </div>
                  {/* Blog Post 2 */}
                  <div className="blog-post">
                    <div className="image-container">
                      <a href="#Web Development"><img src={catLarg2} alt="Web Development" /></a>
                    </div>
                    <h2 className="blog-title">A Beginner's Guide to ISO Consulting</h2>
                    <div className="blog-meta">
                      <span className="blog-date">10 October, 2023</span>
                      <span className="blog-comments">8 comments</span>
                    </div>
                    <p className="blog-description">
                    Curious about ISO consulting? This blog breaks down the role of ISO consultants in helping businesses achieve certification, streamline processes, and comply with international standards effortlessly.
                    </p>
                    <a href="#Web Development" className="blog-read-more">Read More</a>
                  </div>
                  {/* Blog Post 3 */}
                  <div className="blog-post">
                    <div className="image-container">
                      <a href="#SEO Strategies"><img src={catLarg3} alt="SEO Strategies" /></a>
                    </div>
                    <h2 className="blog-title">Top 5 ISO Standards Every Company Should Consider Implementing</h2>
                    <div className="blog-meta">
                      <span className="blog-date">5 October, 2023</span>
                      <span className="blog-comments">12 comments</span>
                    </div>
                    <p className="blog-description">
                    Discover the most impactful ISO standards, from ISO 9001 for quality management to ISO 27001 for information security, and understand how they can transform your organization's productivity and credibility.
                    </p>
                    <a href="#SEO Strategies" className="blog-read-more">Read More</a>
                  </div>
                  {/* Blog Post 4 */}
                  <div className="blog-post">
                    <div className="image-container">
                      <a href="#Digital Marketing"><img src={catLarg4} alt="Digital Marketing" /></a>
                    </div>
                    <h2 className="blog-title">How ISO Certification Can Open New Markets for Your Business</h2>
                    <div className="blog-meta">
                      <span className="blog-date">1 October, 2023</span>
                      <span className="blog-comments">3 comments</span>
                    </div>
                    <p className="blog-description">
                    Learn how obtaining ISO certification helps businesses gain international recognition, enter new markets, and attract larger clients by demonstrating quality, compliance, and global standards adherence.
                    </p>
                    <a href="#Digital Marketing" className="blog-read-more">Read More</a>
                  </div>
                </div>
                <div className="blog-sidebar">
                  {/* Sidebar content */}
                  <div className="blog-search">
                    <form>
                      <input type="text" className="form-control" placeholder="Search..." />
                      <button type="submit" className="btn btn-search">Search</button>
                    </form>
                  </div>
                  <div className="blog-categories mt-4">
                    <h2>Categories</h2>
                    <ul>
                      <li><a href="#Design">Design</a></li>
                      <li><a href="#Development">Development</a></li>
                      <li><a href="#Marketing">Marketing</a></li>
                      <li><a href="#SEO">SEO</a></li>
                      <li><a href="#Business">Business</a></li>
                    </ul>
                  </div>
                  <div className="recent-posts mt-4">
                    <h2>Recent Posts</h2>
                    <div className="recent-post">
                      <a href="#Design Trends"><img src={blogCat1} alt="Recent Post 1" className="img-fluid" /></a>
                      <a href="#Design Trends" className="blog-smaller-head">Why ISO Standards Are Key to Business Success</a>
                      <p className="blog-date-cat">15 October, 2023</p>
                    </div>
                    <div className="recent-post">
                      <a href="#Web Development"><img src={blogCat2} alt="Recent Post 2" className="img-fluid" /></a>
                      <a href="#Web Development" className="blog-smaller-head">What Is ISO Consulting and Why It Matters</a>
                      <p className="blog-date-cat">10 October, 2023</p>
                    </div>
                  </div>
                  <div className="blog-tags mt-4">
                    <h2>Tags</h2>
                    <ul>
                      <li><a href="#Design">Design</a></li>
                      <li><a href="#SEO">SEO</a></li>
                      <li><a href="#Marketing">Marketing</a></li>
                      <li><a href="#Development">Development</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <section id="contact-form" className="account-section">
            <div className="contact-container">
              <div className="left">
                <img
                  src="https://burst.shopifycdn.com/photos/contact-us-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                  alt="Create Account"
                  className="left-image"
                />
              </div>
              <div className="right">
                <div className="form-container">
                  <h2 className="form-title">Create Your Account</h2>
                  <AccountForm />
                </div>
              </div>
            </div>
          </section>

          {/* Chat Component */}
          <div className="chat-wrapper">
            {!isChatOpen && (
              <div className="chat-note">Wanna chat?</div>
            )}
            <SimpleBot 
              isOpen={isChatOpen} 
              setIsOpen={setIsChatOpen}
            />
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3 className="footer-title">TUNICONSULTING</h3>
            <p className="footer-description">
              Your partner in ISO certification, business growth, and continuous improvement.
            </p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.1425557453277!2d10.1815284!3d36.8428128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd359f19cff1a1%3A0x71a7d4d04a5b1ef2!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1647955987654"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 TUNICONSULTING. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;