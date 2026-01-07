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
                      <p>End-to-end IoT system development including hardware selection, firmware programming, and cloud platform integration. We design scalable solutions tailored to your specific requirements, from smart agriculture systems to industrial monitoring platforms.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Benefits:</strong> Reduced operational costs, real-time monitoring, predictive maintenance, data-driven insights
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Sensor Networks</h4>
                      <p>Design and deployment of wireless sensor networks for environmental monitoring, smart buildings, and industrial applications. Our networks support LoRaWAN, Wi-Fi, and Bluetooth connectivity with robust data collection and transmission capabilities.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Use Cases:</strong> Smart agriculture, building automation, factory monitoring, environmental data collection
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>IoT Prototyping</h4>
                      <p>Rapid prototyping services to validate IoT concepts before full-scale development and deployment. We help you test ideas quickly and cost-effectively, reducing risk and time-to-market for your innovations.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Timeline:</strong> 2-4 weeks for proof of concept | Includes hardware selection, basic firmware, and testing
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Mobile App Integration</h4>
                      <p>Development of companion mobile apps for IoT device control and monitoring. Cross-platform apps for iOS and Android with intuitive interfaces, real-time notifications, and secure cloud connectivity.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Features:</strong> Remote control, data visualization, alerts, user management, offline capabilities
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Cloud Platform Integration</h4>
                      <p>Seamless integration with popular cloud platforms like AWS IoT, Azure IoT Hub, Google Cloud IoT, and custom MQTT brokers. We ensure secure, scalable data storage and analytics capabilities.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Includes:</strong> Data pipeline setup, dashboard creation, API development, security implementation
                      </div>
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
                      <p>Custom PLC programming and system design for industrial automation and process control applications. We work with Arduino-based PLCs and traditional industrial PLCs, creating reliable control systems for manufacturing, packaging, and process industries.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Capabilities:</strong> Ladder logic, structured text, function block programming | HMI integration | Safety systems
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Home & Building Automation</h4>
                      <p>Smart home and building automation solutions integrating lighting, security, HVAC, and energy management. Create intelligent environments that adapt to user preferences while maximizing energy efficiency and security.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Applications:</strong> Residential smart homes, commercial buildings, hotels, offices | Energy savings up to 30%
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Industrial Control Systems</h4>
                      <p>SCADA systems, HMI development, and industrial network design for manufacturing and processing facilities. Complete solutions from sensor level to enterprise integration with real-time monitoring and control capabilities.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Components:</strong> SCADA software, touchscreen HMIs, industrial networks (Modbus, Ethernet/IP), data logging
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Process Optimization</h4>
                      <p>Analyzing and optimizing industrial processes with automation technology for increased efficiency. We conduct audits, identify bottlenecks, and implement automation solutions that deliver measurable improvements in productivity and quality.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Results:</strong> Average 25-40% efficiency improvement | Reduced waste | Enhanced product quality
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Motor Control Systems</h4>
                      <p>Design and implementation of motor control systems including VFDs (Variable Frequency Drives), servo controllers, and stepper motor systems. Optimize motor performance and energy consumption.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Benefits:</strong> Energy savings, precise control, reduced mechanical stress, extended equipment life
                      </div>
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
                      <p>Creating customized IoT and automation curricula for schools, colleges, and training centers. Our curriculum aligns with national education standards and includes lesson plans, lab exercises, assessment tools, and project-based learning activities.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Deliverables:</strong> Complete curriculum package | Instructor guides | Student workbooks | Assessment rubrics
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Workshop & Training Sessions</h4>
                      <p>Hands-on workshops and training sessions for students, teachers, and industry professionals. From half-day introductions to week-long intensive programs, we deliver engaging, practical training that builds real-world skills.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Formats:</strong> On-site workshops | Online training | Hybrid programs | Group sizes: 10-30 participants
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Lab Setup & Equipment</h4>
                      <p>Setting up IoT labs with all necessary equipment, software, and learning materials. We provide complete turnkey solutions including hardware selection, installation, software configuration, and staff training.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Includes:</strong> Workstations, development boards, sensors, tools, software licenses, documentation
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Teacher Certification Programs</h4>
                      <p>Certification programs for educators to become certified IoT and automation instructors. Our comprehensive program covers technical skills, pedagogical approaches, and practical classroom management for technology education.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Certification:</strong> Industry-recognized credentials | 40-hour program | Ongoing support | CPD accredited
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Student Competition Support</h4>
                      <p>Supporting schools and students participating in robotics, IoT, and automation competitions. We provide technical mentoring, component procurement, and project development assistance.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Support:</strong> Competition strategy | Technical guidance | Component sourcing | Project development
                      </div>
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
                      <p>Round-the-clock technical support for IoT systems, including remote monitoring and troubleshooting. Our support team provides rapid response to issues, ensuring minimal downtime and maximum system reliability.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Response Times:</strong> Critical: 1 hour | High: 4 hours | Standard: 24 hours | Multiple support channels
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>System Maintenance</h4>
                      <p>Regular maintenance, updates, and performance optimization for deployed IoT and automation systems. Proactive maintenance plans prevent issues before they occur, extending system lifespan and ensuring optimal performance.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Includes:</strong> Regular inspections | Firmware updates | Performance tuning | Security patches | Health reports
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>IoT Strategy Consulting</h4>
                      <p>Expert guidance on IoT implementation, technology selection, and digital transformation strategies. We help organizations identify opportunities, assess feasibility, and create actionable roadmaps for IoT adoption.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Deliverables:</strong> Technology assessment | ROI analysis | Implementation roadmap | Risk mitigation strategies
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Upgrade & Migration Services</h4>
                      <p>Upgrading legacy systems to modern IoT platforms and migrating between technology stacks. We ensure smooth transitions with minimal disruption, preserving data integrity and system functionality throughout the process.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Process:</strong> System audit | Migration planning | Parallel operation | Testing & validation | Training
                      </div>
                    </div>
                    <div className="service-row-arrow">→</div>
                  </div>
                  <div className="service-row">
                    <div className="service-row-content">
                      <h4>Remote Monitoring Services</h4>
                      <p>24/7 remote monitoring of your IoT and automation systems with proactive alerts, performance analytics, and incident management. Gain peace of mind knowing experts are watching over your critical infrastructure.</p>
                      <div style={{marginTop: '10px', fontSize: '14px', color: 'var(--accent)'}}>
                        <strong>Features:</strong> Real-time dashboards | Predictive alerts | Performance reports | Incident escalation
                      </div>
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

