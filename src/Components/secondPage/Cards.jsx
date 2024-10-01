import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Cards.module.css";
function BasicExample(props) {
  return (
    <Card className={style.cardHover} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
         
        <Card.Text>
          {props.info}
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
    
    
  );
}

export default BasicExample;