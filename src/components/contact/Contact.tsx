import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "tomoyuki.ant@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:tomoyuki.ant@gmail.com",
  },
  {
    name: "TELEGRAM:",
    info: "@forbes35",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/forbes35",
  },
  {
    name: "GitHub:",
    info: "@forbesus",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/forbesus",
  },
];

const Contact = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">{text[language].contactHeading}</p>
        {/*<p className="text">If you have any questions or want to hire me, please contact me:</p>*/}
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="mailto:tomoyuki.ant@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            {text[language].contactButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;