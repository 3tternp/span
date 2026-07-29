import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'

const projects = [
  {
    title: 'Cloud Security Audits — AWS & Azure',
    description: 'Full-phase cloud security assessments covering configuration reviews, IAM analysis, network controls, and remediation guidance for AWS and Azure environments.',
    imgUrl: projImg1,
    tags: ['AWS', 'Azure', 'Cloud VAPT', 'IAM Review', 'Config Audit'],
  },
  {
    title: 'IS Audit & GRC Programs',
    description: 'End-to-end information security audit engagements — scoping, control assessment, gap analysis, risk register development, and executive reporting.',
    imgUrl: projImg2,
    tags: ['IS Audit', 'Risk Register', 'ISO 27001', 'Gap Analysis'],
  },
  {
    title: 'VAPT Engagements',
    description: 'Comprehensive network, web application, and API penetration testing engagements using industry-standard methodologies, from reconnaissance through remediation.',
    imgUrl: projImg3,
    tags: ['Penetration Testing', 'Web App', 'API Security', 'Network VAPT'],
  },
  {
    title: 'Regulatory Compliance',
    description: 'Compliance readiness assessments and implementation support across multiple frameworks — helping organizations achieve and maintain certification.',
    imgUrl: projImg4,
    tags: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR', 'COBIT'],
  },
  {
    title: 'CSOC & SIEM Operations',
    description: 'Design and management of Security Operations Centers — SIEM deployment, use case development, threat intelligence integration, and 24/7 monitoring.',
    imgUrl: projImg5,
    tags: ['SIEM', 'SOC', 'Threat Intelligence', 'Incident Response'],
  },
  {
    title: 'Security Policy Development',
    description: 'Developing, reviewing, and updating organizational security policies, standards, and procedures aligned with ISO 27001:2022 and industry best practices.',
    imgUrl: projImg6,
    tags: ['Policy Writing', 'ISO 27001:2022', 'ISMS', 'Standards'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 relative"
      style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(10,10,10,0.93) 50%, rgba(13,25,18,0.97) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">&gt;&nbsp;Featured Work</div>
          <h2 className="text-[42px] md:text-[50px] font-bold gradient-text mb-5">
            Featured Work &amp; Engagements
          </h2>
          <p className="text-muted text-[17px] leading-relaxed max-w-[700px] mx-auto">
            A selection of high-impact security engagements — from cloud security audits and
            penetration testing to full ISO 27001 implementation and CSOC operations — delivering
            measurable risk reduction across industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
