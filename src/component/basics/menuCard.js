import React from 'react';

 
const MenuCard = ({ menuData }) => {
    return (
      <>
        {menuData.map((e) => (
          <div className="card" style={{ width: '18rem' }} key={e.id}>
            <img src={e.imaag} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {e.category}</h5>
              <p className="card-text">{e.description}</p>
              <p className="card-text">{e.price}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default MenuCard;
  