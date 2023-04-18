import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PropertyList.css'

function PropertyList() {
  const properties = [
    {
      id: 1,
      title: 'Hermoso apartamento en el centro de la ciudad',
      description: 'Apartamento completamente renovado en el corazón de la ciudad',
      price: '1,200,000 COP',
      image: 'https://picsum.photos/id/10/200/150',
    },
    {
      id: 2,
      title: 'Apartamento de lujo con vistas al mar',
      description: 'Disfruta de una vista panorámica al mar en este apartamento de lujo',
      price: '2,500,000 COP',
      image: 'https://picsum.photos/id/20/200/150',
    },
    {
      id: 3,
      title: 'Casa de campo con piscina',
      description: 'Relájate en esta hermosa casa de campo con piscina privada',
      price: '3,800,000 COP',
      image: 'https://picsum.photos/id/30/200/150',
    },
    {
      id: 4,
      title: 'Casa de campo con piscina',
      description: 'Relájate en esta hermosa casa de campo con piscina privada',
      price: '3,800,000 COP',
      image: 'https://picsum.photos/id/30/200/150',
    },
  ];

  return (
    <div className="property-list">
      {properties.map((property) => (
        <Card key={property.id} className="property-card">
          <Card.Img variant="top" src={property.image} />
          <Card.Body>
            <Card.Title>{property.title}</Card.Title>
            <Card.Text>{property.description}</Card.Text>
            <div className="property-price">{property.price}</div>
            <Button variant="primary">Ver propiedad</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PropertyList;
