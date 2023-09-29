import React, { useState } from 'react';
import './Nav.css'
import Data from './data';
import Sidebar from './Sidebar/Sidebar';
import Product from './Product';
import PriceDropdownList from './PriceDropdownList';

const allDataValues = [...new Set(Data.map((currPri)=> currPri.price)),"CLEAR"];
console.log(allDataValues);

function Nav() {
    // data fetching from the Data.js
    const [price, setPrice] = useState(Data);

    //price fetching from data.js and usestate to provide the allDataValues 
    const [priceRange, setPriceRange] = useState(allDataValues);

    const filterPrice = (priceItem) => {

        if (priceItem==="CLEAR"){
            setPrice(Data);
            return;
        }

        const updatePrice = Data.filter((currPri) => {
            return currPri.price == priceItem;
        })

        setPrice(updatePrice);
    }

    return (
        <>
            <div className='shadow '  style={{ marginBottom: '30px' }}>
                <nav className="navbar navbar-light ">
                    <div className="container">
                        <a className="navbar-brand">Women</a>
                        <div>
                            <span className='span h5 '>Sort by</span>
                            <div className="btn-group ">
                                {/* Drop down price list  */}
                                <PriceDropdownList filterPrice={filterPrice} priceRange={priceRange}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* bottom side (sidebar and product) */}

            <div className='app-bottom'>
                <div className='container '>
                    <div style={{ flex: 1 }}>
                        {/* sidebar */}
                        <Sidebar />
                    </div>
                    <div style={{ flex: 2 }}>
                        {/* product structor */}
                        <Product price={price} />

                    </div>
                </div>
            </div>
        </>
    );
}
export default Nav;
