import React, { useState, useRef } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditProduct(props) {

    // props destructuring
    const { history, product, saveReloadProducts } = props;

    // generate refs with Hooks
    const saucerPriceRef = useRef('');
    const saucerNameRef = useRef('');

    // state
    const [error, saveError] = useState(false);
    const [category, saveCategory] = useState('');

    const editProduct = async e => {
        e.preventDefault();

        // validation
        const newSaucerName = saucerPriceRef.current.value,
            newSaucerPrice = saucerNameRef.current.value;

        if (newSaucerName === '' || newSaucerPrice === '' || category === '') {
            saveError(true);
            return;
        }

            saveError(false);

            // check if the category changed, otherwise assign the same value
        let saucerCategory = (category === '') ? product.category : category;

        // get de form values
        const editSaucer = {
            saucerPrice: newSaucerPrice,
            saucerName: newSaucerName,
            category: saucerCategory
        }

        // send the Request
        const url = `http://localhost:4000/restaurant/${product.id}`;

        try {
            const result = await axios.put(url, editSaucer);
            if (result.status === 200) {
                Swal.fire(
                    'Product Edit',
                    'The product was edited correctly',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }

        // redirect the user, API consult
        saveReloadProducts(true);
        history.push('/products');
    }

    const readRadioValue = e => {
        saveCategory(e.target.value);
    }

    return (
        <div className="col-md-8 mx-auto">
            <h1 className="text-center">Edit Product</h1>
            {(error) ? <Error message='All fields are required' /> : null}
            <form
                className="mt-5"
                onSubmit={editProduct}
            >
                <div className="form-group">
                    <label>Saucer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Saucer Name"
                        ref={saucerNameRef}
                        defaultValue={product.saucerName}
                    />
                </div>
                <div className="form-group">
                    <label>Saucer Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Saucer Price"
                        ref={saucerPriceRef}
                        defaultValue={product.saucerPrice}
                    />
                </div>
                <legend className="text-center">Category:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="dessert"
                            onChange={readRadioValue}
                            defaultChecked={(product.category === 'dessert')}
                        />
                        <label className="form-check-label">
                            Dessert
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="drink"
                            onChange={readRadioValue}
                            defaultChecked={(product.category === 'drink')}
                        />
                        <label className="form-check-label">
                            Drink
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="cuts"
                            onChange={readRadioValue}
                            defaultChecked={(product.category === 'cuts')}
                        />
                        <label className="form-check-label">
                            Cuts
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="salad"
                            onChange={readRadioValue}
                            defaultChecked={(product.category === 'salad')}
                        />
                        <label className="form-check-label">
                            Salad
                    </label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Edit Product" />
            </form>
        </div>
    )
}

export default withRouter(EditProduct);