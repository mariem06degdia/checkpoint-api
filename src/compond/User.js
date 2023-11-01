import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function User({el}) {
  return (
    <div>
    <Card style={{ width: '18rem',backgroundColor:"#FD6C9E" }}>
      <ListGroup variant="flush">
        <ListGroup.Item><h1>{el.name}</h1>
        <h2>{el.address.street}</h2></ListGroup.Item>
        
        
      </ListGroup>
    </Card>
    </div>
  );
}

export default User