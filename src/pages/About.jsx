function About() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">About Deluge Solutions</h2>
        <p className="section-subtitle">Your trusted partner in IoT and automation education</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>Founded in 2025, Deluge Solutions was born from a vision to democratize access to IoT and automation technology in Zimbabwe and beyond. Our founders recognized a critical gap: while the world was rapidly advancing in smart technology, educational institutions and small-to-medium enterprises in our region lacked access to quality training, components, and expertise.</p>
          
          <p>What started as a passion project to teach Arduino and PLC programming has evolved into a comprehensive solutions provider. Today, we serve educational institutions, manufacturing facilities, and technology enthusiasts across the country, empowering them with the tools and knowledge needed to thrive in an increasingly connected world.</p>

          <h3 style={{marginTop: '40px', marginBottom: '20px'}}>Our Mission</h3>
          <p>Our mission is to make IoT and automation accessible, affordable, and understandable for everyone. We believe that technology should empower, not intimidate. Whether you're a student taking your first steps into embedded systems, a teacher looking to enhance your curriculum, or an industrial facility seeking automation solutions, we're here to support your journey.</p>

          <h3 style={{marginTop: '40px', marginBottom: '20px'}}>Our Vision</h3>
          <p>We envision a future where Zimbabwe and the broader African continent are leaders in IoT innovation and smart manufacturing. By providing quality education, reliable components, and expert consultation, we're building the foundation for a generation of innovators, engineers, and entrepreneurs who will shape the future of technology in Africa.</p>

          <h3 style={{marginTop: '40px', marginBottom: '20px'}}>Our Values</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px'}}>
            <div style={{background: 'var(--glass-bg)', padding: '20px', borderRadius: '10px', border: '1px solid var(--glass-border)'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>🔬 Innovation</h4>
              <p style={{color: 'var(--secondary)', fontSize: '14px', lineHeight: '1.6'}}>We stay at the forefront of technology, constantly exploring new solutions and methodologies to serve our clients better.</p>
            </div>
            <div style={{background: 'var(--glass-bg)', padding: '20px', borderRadius: '10px', border: '1px solid var(--glass-border)'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>🎓 Education</h4>
              <p style={{color: 'var(--secondary)', fontSize: '14px', lineHeight: '1.6'}}>Knowledge sharing is at our core. We believe in empowering others through comprehensive training and support.</p>
            </div>
            <div style={{background: 'var(--glass-bg)', padding: '20px', borderRadius: '10px', border: '1px solid var(--glass-border)'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>✨ Quality</h4>
              <p style={{color: 'var(--secondary)', fontSize: '14px', lineHeight: '1.6'}}>We never compromise on quality, whether it's in our components, training materials, or service delivery.</p>
            </div>
            <div style={{background: 'var(--glass-bg)', padding: '20px', borderRadius: '10px', border: '1px solid var(--glass-border)'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>🤝 Integrity</h4>
              <p style={{color: 'var(--secondary)', fontSize: '14px', lineHeight: '1.6'}}>Transparency, honesty, and ethical business practices guide everything we do.</p>
            </div>
          </div>

          <h3 style={{marginTop: '50px', marginBottom: '20px'}}>What We Offer</h3>
          <div style={{marginTop: '30px'}}>
            <div style={{display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start'}}>
              <div style={{fontSize: '30px', flexShrink: 0}}>💡</div>
              <div>
                <h4 style={{color: 'var(--primary)', marginBottom: '8px'}}>IoT Development Services</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.7'}}>Custom IoT solutions from concept to deployment. We handle everything from sensor integration to cloud connectivity, delivering turnkey systems that solve real-world problems.</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start'}}>
              <div style={{fontSize: '30px', flexShrink: 0}}>🏭</div>
              <div>
                <h4 style={{color: 'var(--primary)', marginBottom: '8px'}}>Industrial Automation</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.7'}}>PLC programming, SCADA systems, and process automation solutions that increase efficiency, reduce costs, and improve safety in industrial environments.</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start'}}>
              <div style={{fontSize: '30px', flexShrink: 0}}>📦</div>
              <div>
                <h4 style={{color: 'var(--primary)', marginBottom: '8px'}}>Quality Components</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.7'}}>A comprehensive inventory of Arduino PLC boards, sensors, actuators, wireless modules, and educational kits sourced from trusted manufacturers worldwide.</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start'}}>
              <div style={{fontSize: '30px', flexShrink: 0}}>🎓</div>
              <div>
                <h4 style={{color: 'var(--primary)', marginBottom: '8px'}}>Educational Programs</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.7'}}>Comprehensive training programs for schools, colleges, and universities. We provide curriculum development, hands-on workshops, teacher certification, and lab setup services.</p>
              </div>
            </div>
          </div>

          <h3 style={{marginTop: '50px', marginBottom: '20px'}}>Our Team</h3>
          <p style={{marginBottom: '20px'}}>Our diverse team brings together expertise in electrical engineering, software development, education, and industrial automation. Each member shares a passion for technology and a commitment to excellence. Together, we combine decades of industry experience with fresh perspectives and innovative thinking.</p>

          <h3 style={{marginTop: '50px', marginBottom: '20px'}}>Certifications & Partnerships</h3>
          <p>We maintain partnerships with leading technology manufacturers and educational institutions. Our team holds certifications in Arduino development, PLC programming, and industrial automation. We're continuously investing in professional development to ensure we remain at the cutting edge of technology.</p>

          <h3 style={{marginTop: '50px', marginBottom: '20px'}}>Get in Touch</h3>
          <p>Whether you're looking to start your IoT journey, enhance your educational program, or automate your industrial processes, we'd love to hear from you. <a href="/contact" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Contact us today</a> to discuss how we can help bring your vision to life.</p>
        </div>
      </div>
    </div>
  )
}

export default About

