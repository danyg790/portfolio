import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  return (
    <Section id="contact" title="Contact Me">
      <p>You can reach me via email at <a href="mailto:your@email.com">your@email.com</a></p>
      <Button text="Send a Message" variant="success" />
    </Section>
  );
};

export default Contact;
