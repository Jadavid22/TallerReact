import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Logout() {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title as="h1" className="text-primary">Cerrar Sesión</Card.Title>
        <Card.Text className="text-muted mb-4">
          ¿Está seguro que desea cerrar la sesión?
        </Card.Text>
        <Button variant="danger" size="lg">
          Confirmar Logout
        </Button>
      </Card.Body>
    </Card>
  );
}