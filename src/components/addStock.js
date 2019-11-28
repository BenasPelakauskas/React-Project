import React from 'react';
import axios from 'axios';

class AddStock extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      item: '',
      barCode: '',
      price: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStockItemChange = this.handleStockItemChange.bind(this);
    this.handleStockBarCodeChange = this.handleStockBarCodeChange.bind(this);
    this.handleStockPriceChange = this.handleStockPriceChange.bind(this);
  }

  handleStockItemChange(e) {
    this.setState({ Item: e.target.value });
  }

  handleStockBarCodeChange(e) {
    this.setState({ BarCode: e.target.value });
  }

  handleStockPriceChange(e) {
    this.setState({ Price: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Item + "      " + this.state.BarCode
      + "       " + this.state.Price);
    e.preventDefault();


    const newStock = {
      item: this.state.Item,
      barCode: this.state.BarCode,
      price: this.state.Price
    };
    axios.post('http://localhost:4000/api/stock', newStock)
      .then()
      .catch();

    this.setState({
      Item: '',
      BarCode: '',
      Price: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Add New Stock!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Item Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Item}
              onChange={this.handleStockItemChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Bar Code</label>
            <input
              type='number'
              className='form-control'
              value={this.state.BarCode}
              onChange={this.handleStockBarCodeChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Price}
              onChange={this.handleStockPriceChange}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="Add Stock">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStock;