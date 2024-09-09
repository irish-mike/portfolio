import michael_walking from "@assets/images/michael_walking.jpg";
import { SocialIconGroup } from "@components"; // Adjust the import based on your actual file structure
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="section-inner my-5">
      <header className="text-center mb-md-5">
        <Row className="align-items-end justify-content-between">
          <Col xs={12} md="auto" className="text-md-start text-center mb-2 mb-md-0">
            <h1 className="mb-0 text-background">Who am I?</h1>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-center">
            <h4 className="text-muted h5 fw-light mb-0 text-background">Curious, Driven, Creative, Nerd</h4>
          </Col>
        </Row>
        <hr className="w-100 my-1" />
      </header>

      {/* Image and Text Section */}
      <section>
        <Row>
          <Col lg={5} className="pt-4 text-center text-lg-start">
            <Image className="profile-image" src={michael_walking} rounded fluid alt="Michael Grinnell" />
          </Col>

          <Col lg={7}>
            <h4 className="text-background my-2">Dia duit! Hello! Bienvenido! Salut! Willkommen! Ciao!</h4>
            <p className="text-background">
              I’m Michael, a curious software developer with a passion for technology and problem-solving. With a BSc in Computing in Games Development and an MSc in Computing in Music Technology, both completed with top honors and recognition through the President’s Prize for Academic Excellence,
              I’m now pursuing a master’s in Artificial Intelligence, aiming for completion by 2026.
            </p>
            <p className="text-background">
              I’m currently working as a full-stack developer at{" "}
              <a href="https://www.providentcrm.com/" target="_blank">
                Provident CRM
              </a>
              , where I collaborate closely with clients to deliver custom software solutions. Proficient in C++, Python, PHP, and JavaScript, I’m a big fan of coding principles like KISS (Keep It Simple, Stupid) and DRY (Don’t Repeat Yourself). These principles, among others, ensure that the
              solutions I create are both effective and scalable. I thrive in agile environments where I prioritize clear communication with both customers and team members, which I’ve found to be key to a successful project.{" "}
            </p>

            {/* Follow Me Section */}
            <div className="d-flex justify-content-center align-items-center my-5">
              <div className="text-center">
                <h3 className="text-background">Follow Me</h3>
                <hr className="my-3" />
                <div className="mt-3">
                  <SocialIconGroup />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Music and Technology Section */}
      <section className="py-2">
        <Row>
          <Col md={12}>
            <h4 className="text-background">Exploring the World Through Music and Technology</h4>
            <p className="text-background">
              I believe in balancing work with my passions, and music is at the top of the list. I’m a Grade 2 classical pianist, I regularly produce music, and I also DJ. For two years, I held a DJ slot on{" "}
              <a href="https://www.phever.ie/" target="_blank">
                Phever Media
              </a>
              , a radio station in Ireland, where I was able to share my love for music with a wide audience. This combination of creativity and technical skill gives me a unique perspective, especially when working on audio programming or music-related projects.
            </p>
            <p className="text-background">
              When I’m not coding or making music, you’ll likely find me traveling and exploring new places while learning something new. I live in Valencia, Spain, where I’m actively learning Spanish and aiming to have conversational fluency by next year. Whether I’m diving into new technology,
              taking on a personal project (like building a home server), or keeping up with the latest music trends, I’m driven by curiosity and a love for creating meaningful things.{" "}
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutPage;
