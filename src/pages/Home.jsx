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
    </div>
  )
}

export default Home

