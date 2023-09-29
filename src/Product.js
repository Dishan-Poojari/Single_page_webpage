import React from 'react';


function Product({price}) {
  // Access the data prop from props

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: " space-evenly", marginLeft: '180px' }}>
    {price.map((item, index) => (
        <div className="card" key={index} style={{ width: "330px", marginBottom: '50px' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            {/* <span className="position-absolute translate badge" style={{ fontSize: '15px', zIndex: "1", top: '10px', left: '10px', padding: '7px 20px', backgroundColor: 'hsl(21.24deg 100% 55.69%)', borderRadius: '0' }}>New</span> */}
            <div className="card-body">
                <p className="card-text">{item.desc}</p>
                <div className="card-text fw-bold">RS. {item.price.toFixed(2)}/-</div>
            </div>
        </div>
    ))}
</div>
  );
}

export default Product;
