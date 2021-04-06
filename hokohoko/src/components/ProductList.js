import { React, Component } from 'react';
import Product from './Product';

// No. of products = No. of cards in accordion
const products = [
    { id: 0, name: "A", description:"First" },
    { id: 1, name: "B", description:"Second" }
]

const productList = products.map((product) =>
    <div>
        <Product key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
        />
    </div>
);



class ProductList extends Component {
    render() {
        return (
            <div>
                {productList}
            </div>
        );
    }
}

export default ProductList;