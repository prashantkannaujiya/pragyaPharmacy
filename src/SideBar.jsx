import { useEffect } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
function SideBar()
{
  
    return(
        <div className="sidebar ">
            <nav className='navbar navbar-expand-md '>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#categoryMenu"  aria-label="Toggle navigation">
      <i class="bi bi-list text-white"></i>
  </button>
<div className='collapse navbar-collapse' id='categoryMenu'>
    <ul className='nav navbar-nav flex-column'>
    <li className='nav-item' style={{backgroundImage:'linear-gradient(to right,skyblue,white)',color:'black'}}>Categories</li>
    <li  className='nav-item'><Link className='sidebar-menu'  to={'/category'} state='mineral'>Minerals</Link></li>
    <li  className='nav-item'><Link className='sidebar-menu'  to={'/category'} state='grocery'>Grocery</Link></li>
    <li className='nav-item'><Link className='sidebar-menu'  to={'/category'} state='supplement'>Supplements</Link></li>
    <li className='nav-item'><Link className='sidebar-menu'  to={'/category'} state='diet'>Diet</Link></li>
    <li  className='nav-item'><Link className='sidebar-menu'>Sports Nutrition</Link></li>
    <li  className='nav-item'><Link className='sidebar-menu'>Body Bath</Link></li>
    <li className='nav-item'><Link className='sidebar-menu'>Tea & Coffee</Link></li>
    <li className='nav-item'> <Link className='sidebar-menu'>Vitamins</Link></li>
    <li className='nav-item'> <Link className='sidebar-menu'>Health Concerns</Link></li>
    </ul>
</div>
</nav>
        </div>
    )
}
export default SideBar;