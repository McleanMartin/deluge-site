function Contact() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Connect with us for IoT solutions, training, or components</p>
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
            <span className="time">10:00 AM - 4:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

