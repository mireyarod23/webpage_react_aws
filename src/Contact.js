import React from 'react'
import { Jumbotron_sm } from './components/Jumbotron_sm';
import { Card, Button } from 'react-bootstrap';

export const Contact = () => (
    <div>
    <Jumbotron_sm className="Contact"/>
    <Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
)
