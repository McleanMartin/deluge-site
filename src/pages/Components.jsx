import { useState } from 'react'

function Components() {
  const [activeCategory, setActiveCategory] = useState('all')

  const components = [
    { id: 1, category: 'controllers', name: 'Arduino PLC Systems', desc: 'Industrial-grade PLCs based on Arduino for automation projects. Features digital/analog I/O, relay outputs, and Modbus communication.', icon: 'microchip', spec1: 'ATMega328', spec2: '12-24V DC', price: 'From $45' },
    { id: 2, category: 'controllers', name: 'ESP32 Development Boards', desc: 'Dual-core Wi-Fi & Bluetooth enabled microcontroller boards. Perfect for IoT projects requiring wireless connectivity.', icon: 'server', spec1: 'Wi-Fi/Bluetooth', spec2: '4MB Flash', price: 'From $8' },
    { id: 3, category: 'controllers', name: 'Raspberry Pi 4 Model B', desc: 'Powerful single-board computer ideal for complex IoT applications, edge computing, and home automation hubs.', icon: 'server', spec1: '4GB/8GB RAM', spec2: '4x USB 3.0', price: 'From $55' },
    { id: 4, category: 'controllers', name: 'Arduino Uno R3', desc: 'The classic microcontroller board for beginners and professionals. Widely supported with extensive library ecosystem.', icon: 'microchip', spec1: 'ATMega328P', spec2: '14 Digital I/O', price: 'From $12' },
    { id: 5, category: 'sensors', name: 'Temperature & Humidity Sensors', desc: 'DHT22, DHT11, LM35 sensors for environmental monitoring. High accuracy and reliable performance in various conditions.', icon: 'thermometer-half', spec1: '-40°C to 80°C', spec2: '0-100% RH', price: 'From $3' },
    { id: 6, category: 'sensors', name: 'Motion & Proximity Sensors', desc: 'PIR motion detectors and ultrasonic distance sensors. Ideal for security systems, automation, and robotics applications.', icon: 'eye', spec1: 'Motion Detection', spec2: '2cm-4m Range', price: 'From $2' },
    { id: 7, category: 'sensors', name: 'Gas & Air Quality Sensors', desc: 'MQ series gas sensors for detecting LPG, CO, smoke, and air quality. Includes MQ-2, MQ-7, MQ-135 variants.', icon: 'wind', spec1: 'Multiple Gas Types', spec2: 'Analog Output', price: 'From $4' },
    { id: 8, category: 'sensors', name: 'Soil Moisture Sensors', desc: 'Capacitive and resistive soil moisture sensors for smart agriculture applications. Monitor plant health and automate irrigation.', icon: 'tint', spec1: '0-100% Moisture', spec2: 'Analog/Digital', price: 'From $2' },
    { id: 9, category: 'sensors', name: 'Pressure Sensors', desc: 'Barometric pressure sensors (BMP280, BME280) for weather monitoring and altitude measurement applications.', icon: 'compress', spec1: '300-1100 hPa', spec2: '±1 hPa Accuracy', price: 'From $5' },
    { id: 10, category: 'actuators', name: 'Servo Motors', desc: 'Precision servo motors for robotics and automation. Available in standard (SG90) and high-torque variants with various sizes.', icon: 'cog', spec1: '180° Rotation', spec2: '1.8kg-cm Torque', price: 'From $3' },
    { id: 11, category: 'actuators', name: 'Stepper Motors', desc: 'Precise stepper motors with drivers for CNC, 3D printing, and precision positioning applications. NEMA 17 and smaller sizes.', icon: 'cogs', spec1: '1.8° Steps', spec2: 'With Driver', price: 'From $15' },
    { id: 12, category: 'actuators', name: 'Relay Modules', desc: 'Single and multi-channel relay modules for switching high-power devices. Optically isolated for safety and reliability.', icon: 'plug', spec1: '10A 250V AC', spec2: 'Isolated', price: 'From $3' },
    { id: 13, category: 'wireless', name: 'LoRa Modules', desc: 'Long-range wireless communication modules (SX1276, SX1278) for IoT networks. Perfect for remote monitoring with low power consumption.', icon: 'satellite-dish', spec1: '10km Range', spec2: 'Low Power', price: 'From $12' },
    { id: 14, category: 'wireless', name: 'Wi-Fi & Bluetooth Modules', desc: 'ESP8266, HC-05, HC-06 wireless modules. Enable connectivity for Arduino and other microcontrollers.', icon: 'broadcast-tower', spec1: '2.4GHz', spec2: 'BT 4.0+', price: 'From $2' },
    { id: 15, category: 'wireless', name: 'GSM/GPRS Modules', desc: 'SIM800L and similar modules for cellular connectivity. Send SMS, make calls, and connect to internet via cellular networks.', icon: 'signal', spec1: '2G/3G/4G', spec2: 'SMS/GPRS', price: 'From $8' },
    { id: 16, category: 'displays', name: 'OLED Displays', desc: 'Small OLED displays (128x64, 128x32) with I2C interface. Perfect for showing sensor data and status information.', icon: 'tv', spec1: '128x64 pixels', spec2: 'I2C Interface', price: 'From $4' },
    { id: 17, category: 'displays', name: 'LCD Displays', desc: '16x2 and 20x4 character LCD displays with I2C backpack. Easy to connect and program for various applications.', icon: 'tv', spec1: '16x2/20x4', spec2: 'I2C Backpack', price: 'From $5' },
    { id: 18, category: 'power', name: 'Power Supplies', desc: 'Switching power supplies and voltage regulators. 5V, 12V, 24V options with various current ratings for different applications.', icon: 'bolt', spec1: '5V-24V', spec2: 'Up to 10A', price: 'From $8' },
    { id: 19, category: 'power', name: 'Battery Modules', desc: 'Li-ion battery modules with charging circuits and protection. Perfect for portable and battery-powered IoT projects.', icon: 'battery-full', spec1: '3.7V Li-ion', spec2: 'With Charger', price: 'From $6' },
    { id: 20, category: 'kits', name: 'IoT Starter Kit for Schools', desc: 'Complete IoT starter kit with Arduino Uno, sensors, breadboard, jumper wires, and comprehensive learning materials with 15+ projects.', icon: 'box-open', spec1: 'Beginner Level', spec2: '15+ Projects', price: 'From $45' },
    { id: 21, category: 'kits', name: 'Industrial Automation Kit', desc: 'Advanced kit with Arduino PLC, relays, sensors, actuators, and HMI components. Perfect for learning industrial automation.', icon: 'tools', spec1: 'Industrial', spec2: 'PLC Projects', price: 'From $120' },
    { id: 22, category: 'kits', name: 'Smart Agriculture Kit', desc: 'Complete kit for smart farming applications. Includes soil sensors, weather station components, and irrigation control modules.', icon: 'seedling', spec1: 'Agriculture', spec2: 'Weather Station', price: 'From $85' },
    { id: 23, category: 'kits', name: 'Home Automation Starter Kit', desc: 'Kit for building smart home systems. Includes relays, sensors, Wi-Fi modules, and components for lighting, security, and climate control.', icon: 'home', spec1: 'Smart Home', spec2: 'Wi-Fi Enabled', price: 'From $65' }
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
            className={`category-tab ${activeCategory === 'actuators' ? 'active' : ''}`}
            onClick={() => setActiveCategory('actuators')}
          >
            Actuators
          </button>
          <button 
            className={`category-tab ${activeCategory === 'displays' ? 'active' : ''}`}
            onClick={() => setActiveCategory('displays')}
          >
            Displays
          </button>
          <button 
            className={`category-tab ${activeCategory === 'power' ? 'active' : ''}`}
            onClick={() => setActiveCategory('power')}
          >
            Power
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
              {component.price && (
                <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--primary)', fontWeight: 'bold', fontSize: '16px'}}>{component.price}</span>
                </div>
              )}
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

