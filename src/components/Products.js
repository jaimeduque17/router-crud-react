import React, { Fragment } from 'react';
import ListProduct from './ListProduct';

function Products({ products, saveReloadProducts }) {
    return (
        <Fragment>
            <h1 className="text-center">Products</h1>
            <ul className="list-group mt-5">
                {products.map(product => (
                    <ListProduct
                        key={product.id}
                        product={product}
                        saveReloadProducts={saveReloadProducts}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Products;