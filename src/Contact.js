import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact page</h2>
      <iframe
        title="contact"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28247.885656168823!2d85.27950518167272!3d27.748586852968725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18cb7575b901%3A0x5b3e2d3aaa25835b!2sNepaltar%2C%20Tarakeshwar%2044600!5e0!3m2!1sen!2snp!4v1668954834344!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xkneergb"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name=" username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name=" Email"
              value={isAuthenticated ? user.email : ""}
              required
              autoComplete="off"
            />
            <textarea
              placeholder="enter your message"
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
