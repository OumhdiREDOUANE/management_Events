import React from 'react';
import style from './NavBarHeroCss.module.css';
import './input.css'
function NavBar() {
    // Function to handle form submission
   return <>
<nav className={`${style.nav}`}>
    <ul id='ul1'>
        <li><img src="/dist/img/logo.png" id='logo' alt="" srcset="" /></li>
        <div className='dropdown'>
<button className='btn dropdown-toggle'  id='dropdownMenuButton'data-bs-toggle="dropdown">what's on</button>
<div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">الخيار 1</a>
    <a className="dropdown-item" href="#">الخيار 2</a>
    <a className="dropdown-item" href="#">الخيار 3</a>
  </div>
        </div>
        <div className='dropdown'>
<button className='btn dropdown-toggle'  id='dropdownMenuButton'data-bs-toggle="dropdown">when</button>
<div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">الخيار 1</a>
    <a className="dropdown-item" href="#">الخيار 2</a>
    <a className="dropdown-item" href="#">الخيار 3</a>
  </div>
        </div>
        
        <div className='dropdown'>
<button className='btn dropdown-toggle'  id='dropdownMenuButton'data-bs-toggle="dropdown">where</button>
<div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">الخيار 1</a>
    <a className="dropdown-item" href="#">الخيار 2</a>
    <a className="dropdown-item" href="#">الخيار 3</a>
  </div>
        </div>
        <div className='dropdown'>
<button className='btn dropdown-toggle'  id='dropdownMenuButton'data-bs-toggle="dropdown">what's on enjoy</button>
<div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">الخيار 1</a>
    <a className="dropdown-item" href="#">الخيار 2</a>
    <a className="dropdown-item" href="#">الخيار 3</a>
  </div>
        </div>
        
    </ul>
    <ul id='ul2'>
        <li ><a href="#">login</a>/ <a href=" #">singup</a> </li>
        <li>ع</li>
        <li className={style.lastLi}><input type="search" name="" id="serche" placeholder='seche Event' />
        <i class="fas fa-search search-icon"></i></li>
    </ul>
    
</nav>
   
   
   </>}
export default NavBar;