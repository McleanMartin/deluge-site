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

      <div className="training-programs" style={{marginTop: '60px'}}>
        <div className="section-header">
          <h2 className="section-title">Detailed Training Programs</h2>
          <p className="section-subtitle">Comprehensive curricula designed for different skill levels</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginTop: '40px'}}>
          <div style={{background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <h3 style={{color: 'var(--primary)', marginBottom: '20px', fontSize: '24px'}}>📘 Beginner Level (40 hours)</h3>
            <p style={{color: 'var(--secondary)', marginBottom: '20px'}}>Perfect for students and beginners with no prior experience in IoT or programming.</p>
            <ul style={{color: 'var(--secondary)', lineHeight: '2', marginBottom: '20px', paddingLeft: '20px'}}>
              <li>Introduction to IoT concepts and applications</li>
              <li>Arduino Uno basics and IDE setup</li>
              <li>Basic programming (C/C++)</li>
              <li>Working with LEDs, buttons, and simple sensors</li>
              <li>Serial communication and debugging</li>
              <li>5 hands-on projects</li>
            </ul>
            <div style={{padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginTop: '20px'}}>
              <strong style={{color: 'var(--primary)'}}>Duration:</strong> 5 weeks (2 sessions/week) | <strong style={{color: 'var(--primary)'}}>Certificate:</strong> Yes
            </div>
          </div>

          <div style={{background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <h3 style={{color: 'var(--primary)', marginBottom: '20px', fontSize: '24px'}}>📗 Intermediate Level (60 hours)</h3>
            <p style={{color: 'var(--secondary)', marginBottom: '20px'}}>For those with basic Arduino knowledge looking to build real-world IoT solutions.</p>
            <ul style={{color: 'var(--secondary)', lineHeight: '2', marginBottom: '20px', paddingLeft: '20px'}}>
              <li>Advanced sensor integration (DHT, PIR, ultrasonic)</li>
              <li>Wireless communication (Wi-Fi, Bluetooth)</li>
              <li>ESP32 microcontroller programming</li>
              <li>Data logging and storage</li>
              <li>Introduction to MQTT and cloud platforms</li>
              <li>8 hands-on projects including smart home devices</li>
            </ul>
            <div style={{padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginTop: '20px'}}>
              <strong style={{color: 'var(--primary)'}}>Duration:</strong> 8 weeks (2 sessions/week) | <strong style={{color: 'var(--primary)'}}>Certificate:</strong> Yes
            </div>
          </div>

          <div style={{background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
            <h3 style={{color: 'var(--primary)', marginBottom: '20px', fontSize: '24px'}}>📕 Advanced Level (80 hours)</h3>
            <p style={{color: 'var(--secondary)', marginBottom: '20px'}}>Comprehensive program for engineering students and professionals.</p>
            <ul style={{color: 'var(--secondary)', lineHeight: '2', marginBottom: '20px', paddingLeft: '20px'}}>
              <li>PLC programming and industrial automation</li>
              <li>LoRaWAN and long-range communication</li>
              <li>Cloud platforms (AWS IoT, Azure IoT)</li>
              <li>Mobile app development for IoT</li>
              <li>Security and best practices</li>
              <li>Capstone project development</li>
            </ul>
            <div style={{padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginTop: '20px'}}>
              <strong style={{color: 'var(--primary)'}}>Duration:</strong> 10 weeks (2 sessions/week) | <strong style={{color: 'var(--primary)'}}>Certificate:</strong> Advanced Certification
            </div>
          </div>
        </div>
      </div>

      <div className="about-content" style={{marginTop: '60px'}}>
        <div className="about-text">
          <h3>Core Training Modules</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px'}}>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>1. Introduction to IoT</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>IoT architecture and components</li>
                <li>Real-world applications and use cases</li>
                <li>Hardware vs. software in IoT</li>
                <li>Industry trends and future directions</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>2. Arduino Programming</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>C/C++ programming fundamentals</li>
                <li>Digital and analog I/O operations</li>
                <li>Libraries and code organization</li>
                <li>Debugging and troubleshooting</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>3. PLC Systems</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>PLC architecture and operation</li>
                <li>Ladder logic programming</li>
                <li>Industrial automation concepts</li>
                <li>HMI integration and SCADA systems</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>4. Sensor Integration</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>Temperature, humidity, and environmental sensors</li>
                <li>Motion and proximity detection</li>
                <li>Analog signal processing</li>
                <li>Sensor calibration and accuracy</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>5. Wireless Communication</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>Wi-Fi connectivity with ESP32</li>
                <li>Bluetooth Low Energy (BLE)</li>
                <li>LoRaWAN for long-range IoT</li>
                <li>Protocols: MQTT, HTTP, WebSocket</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>6. Cloud Integration</h4>
              <ul style={{color: 'var(--secondary)', lineHeight: '1.8', paddingLeft: '20px'}}>
                <li>Connecting devices to cloud platforms</li>
                <li>Data visualization and dashboards</li>
                <li>RESTful APIs and webhooks</li>
                <li>Real-time data processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="training-benefits" style={{marginTop: '60px', background: 'var(--glass-bg)', padding: '40px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '30px', textAlign: 'center'}}>Training Benefits</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>🎯</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Hands-On Learning</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>Practical projects and real-world applications ensure you learn by doing</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>📜</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Certification</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>Receive industry-recognized certificates upon program completion</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>👨‍🏫</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Expert Instructors</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>Learn from experienced engineers and educators</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>🛠️</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>All Equipment Provided</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>No need to purchase components - everything included in training</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>🤝</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Ongoing Support</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>Post-training support and community access for continued learning</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>💼</div>
            <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Career Opportunities</h4>
            <p style={{color: 'var(--secondary)', fontSize: '14px'}}>Skills that open doors in growing IoT and automation industries</p>
          </div>
        </div>
      </div>

      <div className="pricing-info" style={{marginTop: '60px', textAlign: 'center'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '20px'}}>Training Pricing</h3>
        <p style={{color: 'var(--secondary)', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px'}}>
          We offer competitive pricing for educational institutions, with special rates for schools and bulk enrollments. 
          All training programs include materials, equipment use during sessions, and certification. 
          Contact us for detailed pricing based on your requirements and group size.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
          <a href="/contact" className="intro-cta-primary" style={{textDecoration: 'none', display: 'inline-block'}}>Request Quote</a>
          <a href="/contact" className="intro-cta-secondary" style={{textDecoration: 'none', display: 'inline-block'}}>Schedule Consultation</a>
        </div>
      </div>
    </div>
  )
}

export default Training

