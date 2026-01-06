import { useState } from 'react'

function Components() {
  const [activeCategory, setActiveCategory] = useState('all')

  const components = [
    { id: 1, category: 'controllers', name: 'Arduino PLC Systems', desc: 'Industrial-grade PLCs based on Arduino for automation projects', icon: 'microchip', spec1: 'ATMega328', spec2: '12-24V DC' },
    { id: 2, category: 'controllers', name: 'ESP32 Development Boards', desc: 'Wi-Fi & Bluetooth enabled microcontroller boards', icon: 'server', spec1: 'Wi-Fi/Bluetooth', spec2: '4MB Flash' },
    { id: 3, category: 'sensors', name: 'Temperature & Humidity Sensors', desc: 'DHT22, DHT11, LM35 sensors for environmental monitoring', icon: 'thermometer-half', spec1: '-40°C to 80°C', spec2: '0-100% RH' },
    { id: 4, category: 'sensors', name: 'Motion & Proximity Sensors', desc: 'PIR motion detectors and ultrasonic distance sensors', icon: 'eye', spec1: 'Motion Detection', spec2: '2cm-4m Range' },
    { id: 5, category: 'wireless', name: 'LoRa Modules', desc: 'Long-range wireless communication modules for IoT networks', icon: 'satellite-dish', spec1: '10km Range', spec2: 'Low Power' },
    { id: 6, category: 'wireless', name: 'Wi-Fi & Bluetooth Modules', desc: 'ESP8266, HC-05, and other wireless communication modules', icon: 'broadcast-tower', spec1: '2.4GHz', spec2: 'BT 4.0+' },
    { id: 7, category: 'kits', name: 'Starter Kit for Schools', desc: 'Complete IoT starter kit with Arduino, sensors, and learning materials', icon: 'box-open', spec1: 'Beginner Level', spec2: '10+ Projects' },
    { id: 8, category: 'kits', name: 'Industrial Automation Kit', desc: 'Advanced kit with PLC, relays, and industrial-grade components', icon: 'tools', spec1: 'Industrial', spec2: 'PLC Projects' }
  ]

  const filteredComponents = activeCategory === 'all' 
    ? components 
    : components.filter(c => c.category === activeCategory)

  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Components & Hardware</h2>
        <p className="section-subtitle">Quality IoT and automation components for education and industry</p>
      </div>

      <div className="components-categories">
        <div className="category-tabs">
          <button 
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={`category-tab ${activeCategory === 'controllers' ? 'active' : ''}`}
            onClick={() => setActiveCategory('controllers')}
          >
            Controllers
          </button>
          <button 
            className={`category-tab ${activeCategory === 'sensors' ? 'active' : ''}`}
            onClick={() => setActiveCategory('sensors')}
          >
            Sensors
          </button>
          <button 
            className={`category-tab ${activeCategory === 'wireless' ? 'active' : ''}`}
            onClick={() => setActiveCategory('wireless')}
          >
            Wireless
          </button>
          <button 
            className={`category-tab ${activeCategory === 'kits' ? 'active' : ''}`}
            onClick={() => setActiveCategory('kits')}
          >
            Kits & Bundles
          </button>
        </div>
      </div>

      <div className="components-grid">
        {filteredComponents.map((component) => (
          <div key={component.id} className="component-card" data-category={component.category}>
            <div className="component-image">
              <div className="component-placeholder">
                <i className={`fas fa-${component.icon}`}></i>
              </div>
            </div>
            <div className="component-info">
              <h4>{component.name}</h4>
              <p>{component.desc}</p>
              <div className="component-specs">
                <span><i className="fas fa-microchip"></i> {component.spec1}</span>
                <span><i className="fas fa-bolt"></i> {component.spec2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="intro-tech" style={{marginTop: '50px'}}>
        <p className="tech-label">Component Categories</p>
        <div className="tech-marquee">
          <div className="tech-track">
            <span className="tech-item">Microcontrollers</span>
            <span className="tech-item">Sensors</span>
            <span className="tech-item">Actuators</span>
            <span className="tech-item">Wireless Modules</span>
            <span className="tech-item">Power Supplies</span>
            <span className="tech-item">Displays</span>
            <span className="tech-item">Relays & Switches</span>
            <span className="tech-item">Enclosures</span>
            <span className="tech-item">Microcontrollers</span>
            <span className="tech-item">Sensors</span>
            <span className="tech-item">Actuators</span>
            <span className="tech-item">Wireless Modules</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components

