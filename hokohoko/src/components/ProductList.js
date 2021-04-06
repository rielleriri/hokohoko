import { React, Component } from 'react';
import Product from './Product';

// No. of products = No. of cards in accordion
let products = [
    {id:0, name:"A"} 
]

const productList = products.map((product) =>
<div>
<Product />
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