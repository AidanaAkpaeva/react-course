import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
      <nav className='nav'>
          <div className='nav-container'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>About</NavLink>
          </div>
        </nav>
   );
}
 
export default Navbar;