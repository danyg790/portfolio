import React from 'react';
import { Container } from 'react-bootstrap';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">{title}</h2>
        {children}
      </Container>
    </section>
  );
};

export default Section;