import React from 'react';

export default function Color() {
  return (
    <div>
      <h4>Colors</h4>
      <div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center',paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#ff0000',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>RED</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center' ,paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#650b0f',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>WINE</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center' ,paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#341e20',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>COFFE BROWN</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center' ,paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#4a1831',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>GRAPE</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center' ,paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#14171e',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>NAVY BLUE</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center' ,paddingBottom:'3px'}} >
        <i className='bx bxs-circle'  style={{color: '#f8779e',border: '1px solid black',borderRadius: '50%',padding:'2px'}} ></i> <span style={{marginLeft:'10px'}}>BUBBLEGUM</span>
        </div>
      </div>
    </div>
  );
}
