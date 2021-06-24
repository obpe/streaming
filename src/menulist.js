import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menulist.css';
import Chart from './chart';
import { Link } from 'react-router-dom';
// import Chart from './chart';

const MenuList = () => {
    const [items, setItem] = useState([]);
    const [isSelect, setIsSelect] = useState(false);
    // const [data, setData] = useState([]);
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

    // grab the data according to the shortName;
    // useEffect(() => {
    //     (async () => {
    //         const result = await axios(
    //             `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`
    //         );

    //         setData(result.data)
    //     })();
    // })


    // const getList = items.map(item => (
    //     <Chart
    //         name={item.name}
    //         description={item.description}
    //     />
    // ))

    const handleSelect = () => {

    }




    return (
        <div className='float-container'>
            <div className='float-child'>
                <ul>
                    {items.map(item => (
                        <Link to='/categories/items/'>
                            <li key={item.id}>
                                {item.name}-({item.short_name})
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div>
                {
                    isSelect === true ? <div></div> : <Chart data={items} />
                }
            </div>
            {/* <div className='float-child'>
                <p>Items in Category: ()</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>

                    </tbody>
                </table>
            </div> */}
        </div >
    )
}

export default MenuList;