import { React, Component } from 'react';
import Product from './Product';

// No. of products = No. of cards in accordion
let products = [
    { id: 0, name: "A", description: "First", platforms: [{name: "Lazada", end_price: 50}, {name: "Grab", end_price: 20}, {name: "Laz", end_price: 100}] },
    { id: 1, name: "B", description: "Second", platforms: [{name: "Shoppee", end_price: 7}] }
]

var productList = products.map((product) =>
    <div>
        <Product key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            platforms={product.platforms.sort((a, b) => (a.end_price > b.end_price) ? 1 : -1)}
        />
    </div>
);



class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {productList}
            </div>
        );
    }
}

export default ProductList;