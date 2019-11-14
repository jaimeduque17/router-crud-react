import React, { useState } from 'react';
import Error from './Error';

function AddProduct() {

    // state
    const [saucerName, saveName] = useState('');
    const [saucerPrice, savePrice] = useState('');
    const [category, saveCategory] = useState('');
    const [error, saveError] = useState(false);

    const readRadioValue = e => {
        saveCategory(e.target.value);
    }

    const addProduct = e => {
        e.preventDefault();

        if (saucerName === '' || saucerPrice === '' || category === '') {
            saveError(true);
            return;
        }

        saveError(false);

        // create a new product

    }

    return (
        <div className="col-md-8 mx-auto">
            <h1 className="text-center">Add New Product</h1>
            {(error) ? <Error message='All fields are required' /> : null}
            <form
                className="mt-5"
                onSubmit={addProduct}
            >
                <div className="form-group">
                    <label>Saucer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Saucer Name"
                        onChange={e => saveName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Saucer Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Saucer Price"
                        onChange={e => savePrice(e.target.value)}
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
                        />
                        <label className="form-check-label">
                            Salad
                    </label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Add Product" />
            </form>
        </div>
    )
}

export default AddProduct;