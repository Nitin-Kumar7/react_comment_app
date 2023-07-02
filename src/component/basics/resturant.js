 import React, { useState } from 'react';
 import Menu from './menuApi';
 import MenuCard from './menuCard';
 
 const Resturant = () => {
    const [menuData,setMenuData] =useState(Menu);
    const filterData = (category) => {
      if (category === 'all') {
        setMenuData(Menu);
      } else {
        const updatedData = Menu.filter((item) => item.category === category);
        setMenuData(updatedData);
      }
    };
   return (
     <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link"  onClick={() => filterData('apple')}>apple</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => filterData('banana')} href="#">banana</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => filterData('mango')} href="#">mango</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  onClick={() => filterData('all')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <MenuCard menuData={menuData}/>
     </>
   )
 }
 
 export default Resturant