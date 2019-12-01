import React from 'react';
import StockItem from './stockItem';

class Stocks extends React.Component{

    // Render
    render(){
        return this.props.myStock.map((stock)=>{ // Broken??
            console.log({stock});
            return <StockItem key={stock._id} stock={stock}
            ReloadData={this.props.ReloadData}></StockItem>
        });
    }
}
export default Stocks;