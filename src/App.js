import React from 'react';
import {products} from './mockData/products'
import Product from './components/Product'
import {url} from './constants/api'
class App extends React.Component{

  state = {
    productsCount : {},
    productList : []
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then((productList) => {
      this.setState({
        productList: productList
    })
  })}


  incrementCounter = (productName) => () => {
    const oldProductsCount = this.state.productsCount;
    const desiredProductCount = (oldProductsCount[productName] || 0) + 1;
    this.setState({
        productsCount: {
            ...oldProductsCount, 
            [productName]: desiredProductCount
        }
    });
}
  decrementCounter = (productName) => () => {
    const oldProductsCount = this.state.productsCount;
    const desiredProductCount = Math.max(oldProductsCount[productName] - 1, 0);
    this.setState({productsCount: {
        ...oldProductsCount, 
        [productName]: desiredProductCount
    }});
}
  render(){
    //console.log(this.state.productsCount)
    return <div className="product-grid">
      { products.map((product)=>{
      return <Product 
      key={product.name}
       product={product} 
      incrementCounter={this.incrementCounter}
      decrementCounter={this.decrementCounter}
      count={this.state.productsCount[product.name] || 0}/>
    })}
</div>
  }
  
}
export default App;

