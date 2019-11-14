import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/products" className="navbar-brand">
                    {'React CRUD & Routing'}
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            to="/products"
                            className="nav-link"
                            activeClassName="active"
                        >Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/new-product"
                            className="nav-link"
                            activeClassName="active"
                        >New Product</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;