function Training() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Educational Training Programs</h2>
        <p className="section-subtitle">Comprehensive IoT and automation training for educational institutions</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="card-icon" style={{fontSize: '40px', marginBottom: '15px'}}>🏫</div>
          <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>School Programs</h3>
          <p className="testimonial-text">Hands-on IoT workshops and STEM programs for secondary schools. Curriculum aligned with national education standards.</p>
          <div style={{marginTop: '15px'}}>
            <span className="intro-badge" style={{marginRight: '10px'}}>Ages 11-16</span>
            <span className="intro-badge">Beginner Level</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-icon" style={{fontSize: '40px', marginBottom: '15px'}}>🎓</div>
          <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>College & University</h3>
          <p className="testimonial-text">Advanced IoT and automation courses for engineering and computer science students. Industry-relevant skill development.</p>
          <div style={{marginTop: '15px'}}>
            <span className="intro-badge" style={{marginRight: '10px'}}>Ages 17-22</span>
            <span className="intro-badge">Advanced Level</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-icon" style={{fontSize: '40px', marginBottom: '15px'}}>👨‍🏫</div>
          <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Teacher Training</h3>
          <p className="testimonial-text">Professional development programs for educators to effectively teach IoT and automation concepts in the classroom.</p>
          <div style={{marginTop: '15px'}}>
            <span className="intro-badge" style={{marginRight: '10px'}}>CPD Accredited</span>
            <span className="intro-badge">Certification</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-icon" style={{fontSize: '40px', marginBottom: '15px'}}>📦</div>
          <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Lab Kits & Materials</h3>
          <p className="testimonial-text">Complete training kits including Arduino PLC components, sensors, and learning materials for classroom use.</p>
          <div style={{marginTop: '15px'}}>
            <span className="intro-badge" style={{marginRight: '10px'}}>Ready-to-Use</span>
            <span className="intro-badge">Curriculum Included</span>
          </div>
        </div>
      </div>

      <div className="about-content" style={{marginTop: '50px'}}>
        <div className="about-text">
          <h3>Training Curriculum</h3>
          <p>Our comprehensive training programs cover:</p>
          <ul style={{color: 'var(--secondary)', lineHeight: '1.8', marginTop: '15px'}}>
            <li><strong>Introduction to IoT:</strong> Basic concepts, components, and applications</li>
            <li><strong>Arduino Programming:</strong> Microcontroller basics and coding fundamentals</li>
            <li><strong>PLC Systems:</strong> Industrial automation with Arduino-based PLCs</li>
            <li><strong>Sensor Integration:</strong> Working with various sensors and data acquisition</li>
            <li><strong>Wireless Communication:</strong> Wi-Fi, Bluetooth, and LoRa networks</li>
            <li><strong>Cloud Integration:</strong> Connecting devices to cloud platforms</li>
            <li><strong>Project Development:</strong> Hands-on project building and deployment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Training

