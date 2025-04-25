import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title as="h1" className="text-primary">Bienvenido al Panel Administrativo</Card.Title>
        <Card.Text className="text-muted">
          Seleccione una sección del menú para comenzar.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}