import React from 'react';
import { Link } from 'react-router-dom';

function ListProduct({ product }) {

    const deleteProduct = id => {
        console.log('delete', id);
        // TODO: Delete records
    }

    return (
        <li data-category={product.category} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {product.saucerName}
                <span className="font-weight-bold">
                    {` $${product.saucerPrice}`}
                </span>
            </p>
            <div>
                <Link
                to={`/products/edit/${product.id}`}
                className="btn btn-success mr-2">
                    Edit
                </Link>
                <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteProduct(product.id)}
                // &times; entity adds an X next to the text
                >Delete &times;</button>
            </div>
        </li>
    )
}

export default ListProduct;