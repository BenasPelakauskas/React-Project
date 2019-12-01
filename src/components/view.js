import React from 'react'
import axios from 'axios';
import Stocks from './stock';

class View extends React.Component {
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        stock: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/stock')
            .then((response) => {
                this.setState({ stock: response.data.stock })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/stock')
            .then((response) => {
                this.setState({ stock: response.data.stock })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Stock</h1>
                <Stocks myStock={this.state.stock}
                    ReloadData={this.ReloadData}></Stocks>
            </div>
        );
    }
}
export default View;