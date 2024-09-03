import { Container, Row, Col, Image } from "react-bootstrap";
import michael_walking from "../assets/images/michael_walking.jpg";
import { SocialIconGroup } from "@components"; // Adjust the import based on your actual file structure

const AboutPage = () => {
  return (
    <Container className="section-inner my-5">
      <header className="text-center mb-5">
        <Row className="align-items-end justify-content-between m-0 p-0">
          <Col xs={12} md="auto" className="text-md-start text-center mb-2 mb-md-0">
            <h1 className="mb-0">Who am I?</h1>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-center">
            <h4 className="text-muted h5 fw-light mb-0">Realist, Pragmatic, Enjoys life and big nerd</h4>
          </Col>
        </Row>
        <hr className="w-100 my-1" />
      </header>

      <section className="mb-3 pt-4">
        <Row>
          <Col className="pb-4" lg={5}>
            <Image className="profile-image" src={michael_walking} rounded fluid alt="Michael Grinnell" />
          </Col>

          <Col lg={{ span: 6, offset: 1 }}>
            <Col md={12}>
              <h4 className="text-background">Hello and welcome to my corner of the internet!</h4>
              <p className="text-background">
                Hey there! I'm Michael Grinnell, a full stack developer who's passionate about crafting clean, efficient code and building applications that perform seamlessly. Over the years, I've honed my skills through various projects, ranging from VST plugin development to music production, and
                even setting up an Ubuntu-based home media server.
              </p>
              <p className="text-background">When I'm not coding, you can find me indulging in my hobbies. I love producing music, playing the piano (I've reached RIAM Grade 2), developing VST plugins, and diving into the latest tech trends and frameworks.</p>
            </Col>
            <Col md={12} className="d-flex justify-content-center align-items-center my-5">
              <div className="text-center">
                <h3 className="text-background">Follow Me</h3>
                <hr className="my-3" />
                <div className="mt-3">
                  <SocialIconGroup />
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </section>

      <section className="py-2">
        <Row>
          <Col md={12}>
            <h4 className="text-background">Some more stuff about me!</h4>
            <p className="text-background">
              Hey there! I'm Michael Grinnell, a full stack developer who's passionate about crafting clean, efficient code and building applications that perform seamlessly. Over the years, I've honed my skills through various projects, ranging from VST plugin development to music production, and
              even setting up an Ubuntu-based home media server.
            </p>
            <p className="text-background">
              I hold dual citizenship in the US and Ireland and currently reside in the beautiful city of Valencia, Spain. My Spanish is at a B1 level, and I'm actively working towards fluency. I'm always open to new opportunities, especially if they offer a chance to relocate and explore new
              cultures.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutPage;
