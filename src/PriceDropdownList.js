import React from 'react';

export default function PriceDropdownList({ filterPrice, priceRange }) {
    return (
        <>
            <button className="btn btn-light btn-sm text-left-button border" type="button">
                PRICE
            </button>
            <button type="button" className="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split border" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                {
                    priceRange.map((currPriceValue,id) => {
                        return <li><a className="dropdown-item" key={id} onClick={() => filterPrice(currPriceValue)}>{currPriceValue}</a></li>
                    })
                }
                
            </ul>

        </>
    );
}
