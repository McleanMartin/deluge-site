import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Connect with us for IoT solutions, training, or components. We're here to help bring your ideas to life.</p>
      </div>

      <div className="contact-info-full">
        <div className="contact-info-card">
          <div className="contact-icon-large">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Location</h3>
          <p className="contact-detail">16 Chave Ave, Murambi</p>
          <p className="contact-detail">Mutare, Zimbabwe</p>
          <p className="contact-description">Visit us for component purchases or training sessions.</p>
        </div>
        
        <div className="contact-info-card">
          <div className="contact-icon-large">
            <i className="fas fa-phone"></i>
          </div>
          <h3>Phone</h3>
          <p className="contact-detail">+263 78 619 5584</p>
          <p className="contact-description">Available during business hours for detailed discussions.</p>
          <div className="business-hours">
            <i className="fas fa-clock"></i>
            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
        
        <div className="contact-info-card">
          <div className="contact-icon-large">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
          <p className="contact-detail">delugesolutions@gmail.com</p>
          <p className="contact-description">For formal proposals, documentation, and detailed project briefs.</p>
        </div>
      </div>
      
      <div className="contact-form-section" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div className="section-header">
          <h2 className="section-title">Send Us a Message</h2>
          <p className="section-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{maxWidth: '700px', margin: '40px auto 0', background: 'var(--glass-bg)', padding: '40px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
          {submitted && (
            <div style={{padding: '15px', background: 'rgba(37, 211, 102, 0.2)', border: '1px solid rgba(37, 211, 102, 0.5)', borderRadius: '8px', marginBottom: '20px', color: 'var(--primary)', textAlign: 'center'}}>
              ✓ Thank you! Your message has been sent. We'll contact you soon.
            </div>
          )}
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
            <div>
              <label htmlFor="name" style={{display: 'block', marginBottom: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '500'}}>Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--primary)', fontSize: '16px'}}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" style={{display: 'block', marginBottom: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '500'}}>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--primary)', fontSize: '16px'}}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
            <div>
              <label htmlFor="phone" style={{display: 'block', marginBottom: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '500'}}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--primary)', fontSize: '16px'}}
                placeholder="+263 78 123 4567"
              />
            </div>
            <div>
              <label htmlFor="subject" style={{display: 'block', marginBottom: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '500'}}>Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--primary)', fontSize: '16px'}}
              >
                <option value="">Select a subject</option>
                <option value="iot-development">IoT Development Services</option>
                <option value="automation">Industrial Automation</option>
                <option value="training">Training Programs</option>
                <option value="components">Components & Hardware</option>
                <option value="support">Technical Support</option>
                <option value="consulting">Consulting Services</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div style={{marginBottom: '20px'}}>
            <label htmlFor="message" style={{display: 'block', marginBottom: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '500'}}>Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--primary)', fontSize: '16px', fontFamily: 'inherit', resize: 'vertical'}}
              placeholder="Tell us about your project, training needs, or inquiry..."
            />
          </div>

          <button
            type="submit"
            className="intro-cta-primary"
            style={{width: '100%', padding: '15px', fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer'}}
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="business-hours-card">
        <h3><i className="fas fa-clock"></i> Business Hours</h3>
        <div className="hours-grid">
          <div className="hour-row">
            <span className="day">Monday - Friday</span>
            <span className="time">9:00 AM - 6:00 PM</span>
          </div>
          <div className="hour-row">
            <span className="day">Saturday</span>
            <span className="time">10:00 AM - 4:00 PM</span>
          </div>
          <div className="hour-row">
            <span className="day">Sunday</span>
            <span className="time">Closed</span>
          </div>
        </div>
      </div>

      <div className="contact-cta" style={{marginTop: '60px', textAlign: 'center', background: 'var(--glass-bg)', padding: '40px', borderRadius: '15px', border: '1px solid var(--glass-border)'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '15px'}}>Ready to Start Your Project?</h3>
        <p style={{color: 'var(--secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
          Whether you're looking for IoT development, automation solutions, training programs, or quality components, 
          we're here to help. Get in touch today and let's discuss how we can bring your vision to life.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
          <a href="tel:+263786195584" className="intro-cta-primary" style={{textDecoration: 'none', display: 'inline-block'}}>
            <i className="fas fa-phone" style={{marginRight: '8px'}}></i> Call Us Now
          </a>
          <a href="https://wa.me/263786195584" className="intro-cta-secondary" style={{textDecoration: 'none', display: 'inline-block'}} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp" style={{marginRight: '8px'}}></i> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

