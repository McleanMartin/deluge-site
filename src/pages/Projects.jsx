function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Irrigation System",
      category: "IoT & Agriculture",
      description: "Automated irrigation system using soil moisture sensors, weather data, and mobile app control. Reduces water usage by 40% while maintaining optimal crop health. Features LoRaWAN connectivity for remote fields and cloud-based analytics.",
      tech: ["Arduino PLC", "LoRaWAN", "Soil Sensors", "Node-RED", "Mobile App"],
      impact: "40% water savings, 25% yield increase"
    },
    {
      id: 2,
      title: "Industrial PLC Automation",
      category: "Industrial Automation",
      description: "Complete PLC-based automation system for manufacturing facility. Replaced manual processes with automated control, reducing production errors by 60% and increasing throughput by 35%. Includes HMI interface and SCADA integration.",
      tech: ["Arduino PLC", "Modbus", "HMI Display", "SCADA", "Relay Control"],
      impact: "35% efficiency increase, 60% error reduction"
    },
    {
      id: 3,
      title: "Smart Building Energy Management",
      category: "IoT & Smart Buildings",
      description: "Comprehensive energy management system for commercial building. Monitors electricity consumption, controls lighting and HVAC systems, and provides real-time dashboards. Achieved 30% reduction in energy costs through intelligent automation.",
      tech: ["ESP32", "Wi-Fi", "Current Sensors", "Relay Modules", "Cloud Dashboard"],
      impact: "30% energy cost reduction"
    },
    {
      id: 4,
      title: "Environmental Monitoring Network",
      category: "IoT & Environmental",
      description: "Network of wireless environmental monitoring stations across city. Measures air quality, temperature, humidity, and noise levels. Data transmitted via LoRaWAN to central dashboard for real-time visualization and alerts.",
      tech: ["ESP32", "LoRaWAN", "Gas Sensors", "Weather Station", "MQTT"],
      impact: "10 monitoring stations, real-time data"
    },
    {
      id: 5,
      title: "School IoT Lab Setup",
      category: "Educational Training",
      description: "Complete IoT laboratory setup for high school. Includes 20 workstations with Arduino kits, sensors, and learning materials. Developed custom curriculum and trained teachers. Enabled hands-on STEM education for 200+ students annually.",
      tech: ["Arduino Uno", "Sensor Kits", "Lab Equipment", "Curriculum Development"],
      impact: "200+ students trained annually"
    },
    {
      id: 6,
      title: "Smart Home Automation System",
      category: "IoT & Home Automation",
      description: "Comprehensive home automation solution with voice control integration. Controls lighting, security, HVAC, and appliances. Features mobile app, scheduling, and energy monitoring. Expandable system supports 50+ devices.",
      tech: ["ESP32", "Wi-Fi", "Relay Modules", "Mobile App", "Voice Assistant"],
      impact: "50+ devices, 25% energy savings"
    },
    {
      id: 7,
      title: "Water Quality Monitoring System",
      category: "IoT & Water Management",
      description: "Real-time water quality monitoring system for municipal water treatment facility. Measures pH, turbidity, chlorine levels, and flow rate. Alerts operators to anomalies and generates compliance reports automatically.",
      tech: ["Arduino PLC", "pH Sensors", "Flow Sensors", "GSM Module", "Web Dashboard"],
      impact: "24/7 monitoring, automated compliance"
    },
    {
      id: 8,
      title: "College Automation Training Program",
      category: "Educational Training",
      description: "Advanced automation certification program for engineering college. Includes 80-hour curriculum, hands-on projects, and industry placement support. Trained 150 engineering students with 90% placement rate.",
      tech: ["PLC Programming", "IoT Development", "Project-Based Learning"],
      impact: "150 students, 90% placement rate"
    },
    {
      id: 9,
      title: "Warehouse Inventory Tracking",
      category: "IoT & Logistics",
      description: "RFID and IoT-based inventory tracking system for warehouse. Real-time location tracking, automated stock counting, and integration with inventory management software. Reduced inventory discrepancies by 85%.",
      tech: ["RFID Readers", "ESP32", "Wi-Fi", "Cloud API", "Inventory Software"],
      impact: "85% reduction in discrepancies"
    },
    {
      id: 10,
      title: "Smart Greenhouse Control",
      category: "IoT & Agriculture",
      description: "Automated greenhouse climate control system. Monitors temperature, humidity, CO2, and light levels. Automatically adjusts ventilation, irrigation, and shading. Maintains optimal growing conditions 24/7, increasing crop quality by 45%.",
      tech: ["Arduino PLC", "Environmental Sensors", "Actuators", "LoRaWAN", "Mobile App"],
      impact: "45% crop quality improvement"
    },
    {
      id: 11,
      title: "Remote Machine Monitoring",
      category: "Industrial IoT",
      description: "Remote monitoring solution for industrial machinery. Tracks vibration, temperature, and operating parameters. Predictive maintenance alerts prevent downtime. Deployed across 15 machines, reducing maintenance costs by 30%.",
      tech: ["Vibration Sensors", "Temperature Sensors", "GSM/GPRS", "Cloud Analytics", "Alert System"],
      impact: "30% maintenance cost reduction"
    },
    {
      id: 12,
      title: "Smart Street Lighting",
      category: "IoT & Smart Cities",
      description: "Intelligent street lighting system with motion detection and dimming capabilities. Reduces energy consumption by 50% through adaptive lighting. Central monitoring and control via web dashboard with automatic fault detection.",
      tech: ["PIR Sensors", "ESP32", "LoRaWAN", "Cloud Platform", "Energy Monitoring"],
      impact: "50% energy reduction"
    }
  ]

  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">Showcasing successful IoT and automation solutions across various industries</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
              <p>{project.description}</p>
              {project.impact && (
                <div style={{marginTop: '15px', marginBottom: '15px', padding: '10px', background: 'var(--glass-bg)', borderRadius: '8px', border: '1px solid var(--glass-border)'}}>
                  <strong style={{color: 'var(--primary)'}}>Impact: </strong>
                  <span style={{color: 'var(--secondary)'}}>{project.impact}</span>
                </div>
              )}
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

