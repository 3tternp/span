import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/background.jpg"
import TrackVisibility from 'react-on-screen';

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
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeInUp skill-bx" : "skill-bx"}>
                            <h2>🚀 Core Expertise</h2>
                            <p>Prem Basnet brings multidisciplinary expertise across cybersecurity domains. As an Information Security Auditor, he masters risk assessment technologies and system security protocols. His role as a Cyber Security Engineer showcases technical proficiency in automation, threat intelligence, and risk analysis. As a GRC Analyst, he navigates complex regulatory landscapes including GDPR, HIPAA, SOC2, and ISO/IEC 27001, making him an invaluable cybersecurity strategist.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Information Security Auditor" />
                                    <h5>🔍 IS Auditor</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Cyber Security Engineer" />
                                    <h5>🛡️ Cyber Security Engineer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="GRC Analyst" />
                                    <h5>📊 GRC Analyst</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Compliance Officer" />
                                    <h5>✅ Compliance Officer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Risk Assessment" />
                                    <h5>⚠️ Risk Assessment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Penetration Testing" />
                                    <h5>🎯 Penetration Testing</h5>
                                </div>
                            </Carousel>
                        </div>}
                    </TrackVisibility>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
