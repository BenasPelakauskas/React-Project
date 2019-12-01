import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StockItem extends React.Component{

  constructor(){
    super();
    this.DeleteStock = this.DeleteStock.bind(this);
  }

  // Delete Stock
  DeleteStock(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/stock/"+this.props.stock._id)
    .then(()=>{
        this.props.ReloadData();
      })
    .catch();

  }

    render(){
        return(
            <div>
                {}


  <Card  border="primary" style={{ width: '28rem' }}>
  <Card.Header>{this.props.stock.item}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <footer>
      {this.props.stock.barCode}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteStock}>Delete</Button>
<Link to={"/update/" + this.props.stock._id} className="btn btn-primary">Update</Link>
</Card>
            </div>
        )
    }
}
export default StockItem;