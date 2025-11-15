import Card from 'react-bootstrap/Card';

function CardPizza(props) {
  return (
    <Card className='card-pizza'>
      <Card.Img className='card-img' variant="top" src={props.imagen} />
      <Card.Body className='textos'>
        <Card.Title>{props.nombre} </Card.Title>
        <Card.Text>
        <strong>Ingredientes: </strong>{props.ingredientes.join(", ")}
        </Card.Text>
        <p>
          <strong>${props.precio}</strong> 
        </p>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Ver más</Card.Link>
        <br/>
        <Card.Link href="#">Añadir</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;