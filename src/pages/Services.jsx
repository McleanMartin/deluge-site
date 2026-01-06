import { useState } from 'react'

function Services() {
  const [activeTab, setActiveTab] = useState('development')

  const switchTab = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive IoT and automation solutions organized by category</p>
      </div>

      <div className="tabs-container">
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'development' ? 'active' : ''}`}
            onClick={() => switchTab('development')}
          >
            Development
          </button>
          <button 
            className={`tab-btn ${activeTab === 'automation' ? 'active' : ''}`}
            onClick={() => switchTab('automation')}
          >
            Automation
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => switchTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-btn ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => switchTab('support')}
          >
            Support
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'development' && (
            <div className="tab-pane active" id="development">
              <div className="services-group">
                <h3 className="services-group-title"><i className="fas fa-code"></i> IoT & Software Development</h3>
                <div className="services-list">
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Custom IoT Solutions</h4>
                      <p>End-to-end IoT system development including hardware selection, firmware programming, and cloud platform integration.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Sensor Networks</h4>
                      <p>Design and deployment of wireless sensor networks for environmental monitoring, smart buildings, and industrial applications.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>IoT Prototyping</h4>
                      <p>Rapid prototyping services to validate IoT concepts before full-scale development and deployment.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Mobile App Integration</h4>
                      <p>Development of companion mobile apps for IoT device control and monitoring.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="tab-pane active" id="automation">
              <div className="services-group">
                <h3 className="services-group-title"><i className="fas fa-robot"></i> Industrial & Home Automation</h3>
                <div className="services-list">
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>PLC System Design</h4>
                      <p>Custom PLC programming and system design for industrial automation and process control applications.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Home & Building Automation</h4>
                      <p>Smart home and building automation solutions integrating lighting, security, HVAC, and energy management.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Industrial Control Systems</h4>
                      <p>SCADA systems, HMI development, and industrial network design for manufacturing and processing facilities.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Process Optimization</h4>
                      <p>Analyzing and optimizing industrial processes with automation technology for increased efficiency.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="tab-pane active" id="education">
              <div className="services-group">
                <h3 className="services-group-title"><i className="fas fa-graduation-cap"></i> Educational Services</h3>
                <div className="services-list">
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>IoT Curriculum Development</h4>
                      <p>Creating customized IoT and automation curricula for schools, colleges, and training centers.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Workshop & Training Sessions</h4>
                      <p>Hands-on workshops and training sessions for students, teachers, and industry professionals.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Lab Setup & Equipment</h4>
                      <p>Setting up IoT labs with all necessary equipment, software, and learning materials.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Teacher Certification Programs</h4>
                      <p>Certification programs for educators to become certified IoT and automation instructors.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="tab-pane active" id="support">
              <div className="services-group">
                <h3 className="services-group-title"><i className="fas fa-headset"></i> Support & Consulting</h3>
                <div className="services-list">
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>24/7 Technical Support</h4>
                      <p>Round-the-clock technical support for IoT systems, including remote monitoring and troubleshooting.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>System Maintenance</h4>
                      <p>Regular maintenance, updates, and performance optimization for deployed IoT and automation systems.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>IoT Strategy Consulting</h4>
                      <p>Expert guidance on IoT implementation, technology selection, and digital transformation strategies.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Upgrade & Migration Services</h4>
                      <p>Upgrading legacy systems to modern IoT platforms and migrating between technology stacks.</p>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Services

