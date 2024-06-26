import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/background.jpg"

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
                        <p>Prem Basnet is skilled in multiple domains. As an Information Security Auditor, he understands computer code, risk assessment technologies, and system security, and is proficient in risk assessments and internal audits. As a Cyber Security Engineer, he has technical proficiency, can automate tasks, gather threat intelligence, and analyze risks. He also has experience with configuring and managing security tools. As a GRC Analyst, he understands regulatory requirements and industry standards, has strong analytical and problem-solving skills, and has experience with governance, risk, and compliance (GRC) tools. These diverse skills make Prem a valuable asset in the field of information security.</p>
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
