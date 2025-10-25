import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <Row>
        <Col md={4}>
          <Card
            image="/assets/project1.jpg"
            title="React Portfolio"
            text="My personal portfolio built with React and Vite."
            buttonText="View"
          />
        </Col>
        <Col md={4}>
          <Card
            image="/assets/project2.jpg"
            title="Shopify Storefront"
            text="A custom Shopify storefront with GraphQL integration."
            buttonText="View"
          />
        </Col>
      </Row>
    </Section>
  );
};

export default Projects;
