import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menulist.css';
import { Link } from 'react-router-dom';


const MenuList = () => {
    const [items, setItem] = useState([]);
    const shortName = [];

    useEffect(() => {
        (async () => {
            const res = await axios(
                'https://stream-restaurant-menu-svc.herokuapp.com/category',
            );

            setItem(res.data);
        })();
    }, [])

    for (let key of items) {
        shortName.push(key.short_name);
    }



    return (
        <div className='float-container'>
            <div className='float-child'>
                <ul>
                    {items.map(item => (
                        <Link to={'/categories/' + item.short_name}>
                            <li key={item.id}>
                                {item.name}-({item.short_name})
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default MenuList;