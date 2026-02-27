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
            <h4 className="text-background my-2">Dia duit! Hello! ¡Hola!</h4>
            <p className="text-background">
              I’m Michael, a software engineer focused on building scalable, practical systems that solve real-world problems. I’m a strong believer in using established design patterns, not just because they’re reliable, but because they create a shared language that improves consistency across teams. By choosing proven architectures over the latest trends, I can deliver solutions that are maintainable, efficient, and aligned with business goals.
            </p>
            <p className="text-background">
              My expertise spans from full-stack development to Site Reliability Engineering (SRE), with a particular focus on backend architecture. Recently, I’ve been focused on strengthening cloud infrastructure, improving CI/CD pipelines, and fine-tuning the performance of complex systems. This experience is backed by a solid academic foundation: I hold a BSc in Games Development and an MSc in Music Technology, and was awarded the President’s Prize for Academic Excellence for both degrees.
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

      {/* Music and Travel Section */}
      <section className="py-2">
        <Row>
          <Col md={12}>
            <h4 className="text-background">Creativity & Perspective</h4>
            <p className="text-background">
              I believe technical work is stronger when it's paired with a creative mindset. I’m a classical pianist, a music producer, and a DJ with a former two-year residency on{" "}
              <a href="https://www.phever.ie/" target="_blank" rel="noreferrer">
                Phever Media
              </a>{" "}
              in Ireland. This mix of creativity and technical ability helps me think outside the box, especially when I'm designing user experiences or tackling complex problems.
            </p>
            <p className="text-background">
              When I’m not at a terminal, I’m usually exploring. I’m currently based in Valencia, Spain, where I’ve reached a B2 level in Spanish and am working toward fluency. I recently spent four months travelling solo through Peru, Ecuador, and Colombia, including planning and completing a five-day trek to Machu Picchu and budgeting for the Galápagos Islands. These experiences pushed me to think more critically, manage my time well, and communicate clearly in unfamiliar environments.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutPage;