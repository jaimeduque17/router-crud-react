import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function ListProduct({ product, saveReloadProducts }) {

    const deleteProduct = id => {
        console.log('delete', id);
        // TODO: Delete records
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.value) {

                try {
                    const url = `http://localhost:4000/restaurant/${id}`;

                    // delete a product
                    const result = await axios.delete(url);

                    if (result.status === 200) {
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                        )

                        // API consult
                        saveReloadProducts(true);
                    }

                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Something went wrong'
                    })
                }
            }
        })
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