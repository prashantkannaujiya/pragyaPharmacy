import { Link } from "react-router-dom";

function DashMenu()
{
    return(
        <div>
 <nav className='navbar navbar-expand-md '>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#categoryMenu"  aria-label="Toggle navigation">
      <i class="bi bi-list text-white"></i>
  </button>
<div className='collapse navbar-collapse' id='categoryMenu'>
    <ul className='nav navbar-nav flex-column'>
    <li className='nav-item' style={{backgroundImage:'linear-gradient(to right,skyblue,white)',color:'black'}}>Menu</li>
    <li  className='nav-item'><Link className='sidebar-menu'  to={'/dash'} state='order'>Orders</Link></li>
    <li  className='nav-item'><Link className='sidebar-menu'  to={'/dash'} state='account'>Account</Link></li>
   
    </ul>
</div>
</nav>
        </div>
    )
}
export default DashMenu;