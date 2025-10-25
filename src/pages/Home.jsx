import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Section id="hero" title="Welcome to My Portfolio">
        <p className="text-center mb-5">
          I'm a web developer who builds modern, responsive web apps using React and Bootstrap.
        </p>
        <div className="text-center">
          <Button text="View My Work" variant="primary" />
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <Row>
          <Col md={4}>
            <Card
              image="/assets/project1.jpg"
              title="React Portfolio"
              text="A modern portfolio built with React and Vite."
              buttonText="See Details"
            />
          </Col>
          <Col md={4}>
            <Card
              image="/assets/project2.jpg"
              title="E-Commerce Site"
              text="An online store powered by Shopify API."
              buttonText="View"
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Home;