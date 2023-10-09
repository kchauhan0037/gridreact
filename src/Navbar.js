import React from 'react';

function Navbar() {
  return (
    <nav id="header">
      <div>
        <div id="logo">EDYODA</div>
        <p id="logostories">Stories</p>
      </div>
      <div id="dropdown">
        Explore Categories{' '}
        <i
          className="fa-solid fa-angle-down"
          style={{ color: '#000000', paddingLeft: '8px', paddingTop: '0' }}
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
