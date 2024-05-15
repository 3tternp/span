import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import './Skills.css'; // Import the CSS file

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Prem Basnet possesses a diverse set of skills across multiple domains. As an Information Security Auditor, he has a deep understanding of computer code, risk assessment technologies, internal controls, and system security. He is proficient in risk assessments, audit reports, and internal audits, and has experience with standards like NIST, CISA, ISO, and COBIT. His strong interpersonal skills, superior research aptitude, creative thinking, good communication, and detailed organization are also essential. As a Cyber Security Engineer, Prem requires technical proficiency and system knowledge, including a deep understanding of network architectures, operating systems, and encryption technologies. He is able to automate tasks using scripting languages, gather threat intelligence, and analyze risks. Experience with configuring and managing security tools such as firewalls, antivirus software, and intrusion detection systems is crucial. He also needs strong problem-solving skills, mathematical skills for cryptography and algorithm analysis, analytical skills to understand complex software systems, and creative thinking to anticipate and mitigate potential attacks. As a GRC Analyst, Prem should have knowledge of regulatory requirements and industry standards such as GDPR, HIPAA, and SOX. He needs strong analytical and problem-solving skills, excellent communication and presentation skills, and the ability to work with multiple stakeholders. Knowledge of Risk management frameworks such as COSO and ISO 31000 is important, as is experience working with governance, risk, and compliance (GRC) tools such as ServiceNow, Archer, or MetricStream. These diverse skills make Prem a valuable asset in the field of information security.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>IS Auditor</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Cyber Security Engineer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>GRC Analyst</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Compliance officer</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
