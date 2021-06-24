import React from 'react';
import Button from './buttons';
import MenuList from './menulist';

const Category = () => (
    <div>
        <p>1. Welcome to Chef Chu's Restaurant</p>
        <Button />
        <hr />
        <p><small>Streamlinity UI test assignment starts below this line...</small></p>
        <hr />
        <p>Menu Categories</p>
        <MenuList />
    </div>
)

export default Category;