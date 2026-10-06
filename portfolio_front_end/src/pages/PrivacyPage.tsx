import { ContactFormModal } from "@components";
import { Button, Col, Container, Row } from "react-bootstrap";

const PrivacyPage = () => {
  return (
    <Container className="p-4 text-background">
      <Row>
        <Col>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
            <h1 className="mb-0 me-0 me-md-3">Privacy Notice</h1>
            <p className="mx-0 mx-md-3 my-2 my-md-0">Last updated: October 6, 2026</p>
          </div>
          <hr className="my-1 w-100" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={9}>
          <p>
            This is the privacy notice for michaelgrinnell.com, a personal portfolio operated by Michael Grinnell in Ireland. It explains what information is processed when you visit the site or send me a message.
          </p>

          <section className="mt-4">
            <h2>Information I process</h2>
            <p>If you use the contact form, I receive the name, email address, and message that you provide. The form also sends an acknowledgement to the email address you enter.</p>
            <p>
              Cloudflare and my web server may process limited technical information, such as your IP address, browser information, requested pages, and request times. This is used to deliver the site, maintain security, and troubleshoot problems.
            </p>
          </section>

          <section className="mt-4">
            <h2>How I use your information</h2>
            <p>I use contact-form information only to read and respond to your enquiry and to retain relevant correspondence. I process this information in my legitimate interests in communicating with people who contact me.</p>
            <p>Technical request information is processed where necessary to operate, secure, and maintain the website. I do not sell your personal information or use it for advertising or automated decision-making.</p>
          </section>

          <section className="mt-4">
            <h2>Service providers</h2>
            <p>
              Cloudflare provides DNS, security, and delivery services for the website. Google Gmail is used to receive contact-form messages and send acknowledgements. These providers may process information on my behalf and may process it outside the European Economic Area using their
              applicable data-protection safeguards.
            </p>
          </section>

          <section className="mt-4">
            <h2>Storage and cookies</h2>
            <p>
              The site does not use advertising or analytics cookies. Your light or dark theme preference is saved in your browser&apos;s local storage so the site can remember your choice. This preference remains on your device and can be removed by clearing the site&apos;s browser data.
            </p>
          </section>

          <section className="mt-4">
            <h2>How long information is kept</h2>
            <p>Contact messages and related correspondence are kept only for as long as reasonably necessary to respond and maintain relevant records. Technical logs are retained for limited periods according to operational and security needs and provider settings.</p>
          </section>

          <section className="mt-4">
            <h2>Your rights</h2>
            <p>
              Depending on the circumstances, you may ask for access to your personal information, correction, deletion, restriction, or object to its processing. You may also lodge a complaint with the{" "}
              <a href="https://www.dataprotection.ie/" rel="external noopener noreferrer" target="_blank">
                Irish Data Protection Commission
              </a>
              .
            </p>
          </section>

          <section className="mt-4">
            <h2>Contact</h2>
            <p>
              To ask a privacy question or exercise one of these rights, please use the{" "}
              <ContactFormModal
                trigger={
                  <Button variant="link" className="text-reset p-0 align-baseline">
                    contact form
                  </Button>
                }
              />
              .
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPage;
