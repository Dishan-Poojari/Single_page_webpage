import React from 'react';
import './Sidebar.css';
import Gender from './Gender/Gender';
import Color from './Color/Color';

export default function Sidebar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-white sidebar fixed-top " style={{ width: "280px",left:'70px',zIndex:'1' }}>
                <a href="/" className="d-flex  mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    {/* <svg className="bi me-2 border" width="40" height="32"><use href="#bootstrap"></use></svg> */}
                    <span className="fs-6">FILTERS</span>
                    <svg className="bi me-2 " width="140" height="22"><use href="#bootstrap"></use></svg>
                    <span className='fs-6' style={{float:'right', color:'orange'}}>RESET</span>
                    
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link link-dark ">
                            {/* <svg className="bi me-2  border" width="16" height="16" ><use href="#home"></use></svg> */}
                            <Gender/>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-dark">
                            {/* <svg className="bi me-2 border" width="16" height="16" ><use href="#table"></use></svg> */}
                            <Color/>   
                        </a>
                    </li>
                    
                </ul>


            </div>

        </>
    );
}
