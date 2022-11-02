import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const {user, logout} = useContext(AuthContext);
    const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    {
       user?.uid ?
       <>
       <li className='font-semibold'><Link to='/'>{user?.email ? user.email: '' }</Link></li>
       <li className='font-semibold'><Link onClick={logout}>Logout</Link></li>
       </>
       :
       <li className='font-semibold'><Link to='/login'>Login</Link></li>
    }
    </>
  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
  <Link to="/" className="btn btn-ghost normal-case text-xl">
    <img src={logo}
    width="80px"
    height="40px"
     alt="logo" />
  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
  )
}

export default Header