// import { useContext } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNav } from '../../store/nav-store';

import classes from './Submenu.module.css';
const Submenu = () => {
  const { toggleSubmenu } = useNav();
  const displayClass = !toggleSubmenu ? 'd-none' : '';

  return (
    <div className={`${classes.subMenu} ${displayClass}`}>
      <span className={classes.userName}>ADMINISTRATOR</span>
      <div className={classes.divider}></div>
      <Link to="user/password" className={classes.submenuItem}>
        <AiOutlineLock className={classes.icon} />
        <span>Change Password</span>
      </Link>
      <div className={classes.divider}></div>
      <div className={`cursor-pointer ${classes.submenuItem}`}>
        <FiLogOut className={classes.icon} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Submenu;
