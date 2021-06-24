import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css'

const Button = () => (
    <div>
        <Link to='/'>
            <button type='button'>
                Home
            </button>
        </Link>
        <Link to='/categories'>
            <button type='button'>
                Categories
            </button>
        </Link>
    </div>
)

export default Button;