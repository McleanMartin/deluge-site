import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-content">
      <div className="intro-hero">
        <div className="intro-hero-content">
          <span className="intro-badge">Est. 2025</span>
          <h1 className="intro-headline">IoT & Automation<br/><span>Solutions</span> That Connect</h1>
          <p className="intro-subtext">Specializing in custom IoT development, industrial automation, PLC systems, and educational training for schools and colleges.</p>
          <div className="intro-cta-group">
            <Link to="/services" className="intro-cta-primary">Our Services</Link>
            <Link to="/training" className="intro-cta-secondary">View Training</Link>
          </div>
        </div>
        <div className="intro-hero-visual">
          <div className="intro-floating-card card-1">
            <span className="card-icon">📱</span>
            <span className="card-text">IoT Development</span>
          </div>
          <div className="intro-floating-card card-2">
            <span className="card-icon">🎓</span>
            <span className="card-text">Educational Training</span>
          </div>
          <div className="intro-floating-card card-3">
            <span className="card-icon">⚙️</span>
            <span className="card-text">PLC Components</span>
          </div>
          <div className="intro-orb"></div>
        </div>
      </div>

      <div className="intro-values">
        <div className="value-card">
          <div className="value-number">01</div>
          <h3>Custom IoT Solutions</h3>
          <p>We design and develop bespoke IoT systems tailored to your specific needs, from sensor networks to cloud integration.</p>
        </div>
        <div className="value-card">
          <div className="value-number">02</div>
          <h3>Educational Excellence</h3>
          <p>Providing comprehensive IoT and automation training programs for schools, colleges, and institutions.</p>
        </div>
        <div className="value-card">
          <div className="value-number">03</div>
          <h3>Quality Components</h3>
          <p>Supplying reliable Arduino PLC components and automation hardware for both education and industry.</p>
        </div>
      </div>

      <div className="intro-tech">
        <p className="tech-label">Technologies We Specialize In</p>
        <div className="tech-marquee">
          <div className="tech-track">
            <span className="tech-item">Arduino PLC</span>
            <span className="tech-item">ESP32</span>
            <span className="tech-item">Raspberry Pi</span>
            <span className="tech-item">Node-RED</span>
            <span className="tech-item">MQTT</span>
            <span className="tech-item">LoRaWAN</span>
            <span className="tech-item">Modbus</span>
            <span className="tech-item">PLC Programming</span>
            <span className="tech-item">Arduino PLC</span>
            <span className="tech-item">ESP32</span>
            <span className="tech-item">Raspberry Pi</span>
            <span className="tech-item">Node-RED</span>
          </div>
        </div>
      </div>

      <div className="stats-section" style={{marginTop: '80px', marginBottom: '80px'}}>
        <div className="section-header">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Driving innovation in IoT and automation across Zimbabwe</p>
        </div>
        <div className="stats-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '50px'}}>
          <div className="stat-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
            <div className="stat-number" style={{fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px'}}>50+</div>
            <div className="stat-label" style={{color: 'var(--secondary)', fontSize: '16px'}}>Projects Completed</div>
          </div>
          <div className="stat-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
            <div className="stat-number" style={{fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px'}}>200+</div>
            <div className="stat-label" style={{color: 'var(--secondary)', fontSize: '16px'}}>Students Trained</div>
          </div>
          <div className="stat-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
            <div className="stat-number" style={{fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px'}}>25+</div>
            <div className="stat-label" style={{color: 'var(--secondary)', fontSize: '16px'}}>Educational Institutions</div>
          </div>
          <div className="stat-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
            <div className="stat-number" style={{fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px'}}>98%</div>
            <div className="stat-label" style={{color: 'var(--secondary)', fontSize: '16px'}}>Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="testimonials-section" style={{marginTop: '80px', marginBottom: '80px'}}>
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Testimonials from satisfied customers and partners</p>
        </div>
        <div className="testimonials-grid" style={{marginTop: '50px'}}>
          <div className="testimonial-card">
            <div className="testimonial-quote" style={{fontSize: '24px', color: 'var(--primary)', marginBottom: '20px'}}>"</div>
            <p className="testimonial-text">Deluge Solutions transformed our school's STEM program. Their IoT training curriculum has inspired our students to pursue careers in technology. The hands-on approach and quality components made all the difference.</p>
            <div className="testimonial-author" style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div className="author-avatar" style={{width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>👨‍🏫</div>
              <div>
                <div className="author-name" style={{fontWeight: 'bold', color: 'var(--primary)'}}>Dr. Tawanda Muzondo</div>
                <div className="author-role" style={{color: 'var(--secondary)', fontSize: '14px'}}>Principal, Mutare High School</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote" style={{fontSize: '24px', color: 'var(--primary)', marginBottom: '20px'}}>"</div>
            <p className="testimonial-text">Working with Deluge Solutions was a game-changer for our manufacturing facility. Their PLC automation system increased our production efficiency by 35% and reduced downtime significantly. Professional service from start to finish.</p>
            <div className="testimonial-author" style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div className="author-avatar" style={{width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>👨‍💼</div>
              <div>
                <div className="author-name" style={{fontWeight: 'bold', color: 'var(--primary)'}}>John Sibanda</div>
                <div className="author-role" style={{color: 'var(--secondary)', fontSize: '14px'}}>Operations Manager, Industrial Solutions Ltd</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote" style={{fontSize: '24px', color: 'var(--primary)', marginBottom: '20px'}}>"</div>
            <p className="testimonial-text">The IoT development course provided by Deluge Solutions gave our engineering students practical skills they couldn't get anywhere else. The instructors were knowledgeable, and the equipment was top-quality.</p>
            <div className="testimonial-author" style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div className="author-avatar" style={{width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>👩‍🔬</div>
              <div>
                <div className="author-name" style={{fontWeight: 'bold', color: 'var(--primary)'}}>Prof. Sarah Chikomo</div>
                <div className="author-role" style={{color: 'var(--secondary)', fontSize: '14px'}}>Dean of Engineering, Midlands State University</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section" style={{marginTop: '80px', marginBottom: '80px'}}>
        <div className="section-header">
          <h2 className="section-title">Why Choose Deluge Solutions?</h2>
          <p className="section-subtitle">Your trusted partner for IoT and automation excellence</p>
        </div>
        <div className="features-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px'}}>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>🎯</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Expert Team</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Our team consists of certified engineers and experienced educators with deep expertise in IoT, automation, and industrial systems.</p>
          </div>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>🔧</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Quality Components</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We source and supply only the highest quality Arduino PLC components, sensors, and automation hardware from trusted manufacturers.</p>
          </div>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>📚</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Comprehensive Training</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>From beginner workshops to advanced certification programs, we provide education solutions that prepare students for real-world challenges.</p>
          </div>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>⚡</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Custom Solutions</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Every project is unique. We design and develop custom IoT and automation solutions tailored to your specific requirements and goals.</p>
          </div>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>🚀</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Proven Track Record</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>With over 50 successful projects and 200+ trained professionals, we have a proven track record of delivering excellence.</p>
          </div>
          <div className="feature-card" style={{background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <div className="feature-icon" style={{fontSize: '40px', marginBottom: '20px'}}>🤝</div>
            <h3 style={{color: 'var(--primary)', marginBottom: '15px', fontSize: '20px'}}>Ongoing Support</h3>
            <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We provide continuous support and maintenance services to ensure your systems operate at peak performance long after deployment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

