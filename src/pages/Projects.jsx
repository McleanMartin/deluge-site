function Projects() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      category: "Business Enterprise Software",
      description: "A comprehensive ERP solution for manufacturing companies, featuring inventory management, production planning, quality control, and real-time analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 2,
      title: "Customer Relationship Management Platform",
      category: "Business Enterprise Software",
      description: "Full-featured CRM system with lead management, sales pipeline tracking, customer communication history, and automated reporting for sales teams.",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "REST API"]
    },
    {
      id: 3,
      title: "Supply Chain Management System",
      category: "Business Enterprise Software",
      description: "End-to-end supply chain solution with vendor management, purchase orders, logistics tracking, warehouse management, and demand forecasting.",
      tech: ["Angular", "Spring Boot", "MongoDB", "Kafka", "Microservices"]
    },
    {
      id: 4,
      title: "Human Resources Management System",
      category: "Business Enterprise Software",
      description: "Complete HRMS platform including employee onboarding, attendance tracking, payroll processing, performance reviews, and benefits administration.",
      tech: ["React", "Python Django", "PostgreSQL", "Celery", "JWT Auth"]
    },
    {
      id: 5,
      title: "E-Commerce Management Platform",
      category: "Web-Based Software",
      description: "Multi-vendor e-commerce platform with product catalog management, order processing, payment gateway integration, and analytics dashboard.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe API", "Elasticsearch"]
    },
    {
      id: 6,
      title: "Project Management & Collaboration Tool",
      category: "Web-Based Software",
      description: "Agile project management solution with task boards, team collaboration, time tracking, document sharing, and real-time notifications.",
      tech: ["React", "GraphQL", "PostgreSQL", "WebSockets", "AWS S3"]
    },
    {
      id: 7,
      title: "Financial Accounting Software",
      category: "Business Enterprise Software",
      description: "Enterprise-grade accounting system with general ledger, accounts payable/receivable, financial reporting, tax management, and audit trails.",
      tech: ["Vue.js", "Java Spring", "Oracle DB", "Apache Kafka", "Docker"]
    },
    {
      id: 8,
      title: "Learning Management System",
      category: "Web-Based Software",
      description: "Comprehensive LMS for educational institutions with course creation, student enrollment, assessments, progress tracking, and video conferencing integration.",
      tech: ["React", "Django", "PostgreSQL", "FFmpeg", "WebRTC"]
    },
    {
      id: 9,
      title: "Healthcare Management System",
      category: "Business Enterprise Software",
      description: "Hospital management solution with patient records, appointment scheduling, billing, pharmacy management, and telemedicine capabilities.",
      tech: ["Angular", ".NET Core", "SQL Server", "HL7", "HIPAA Compliant"]
    }
  ]

  return (
    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">Showcasing our expertise in IoT and Business Enterprise Software development</p>
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

