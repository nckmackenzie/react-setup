import { AiOutlineUser, AiFillCaretDown } from 'react-icons/ai';
import Logo from '../../assets/Logo1.png';
import classes from './MainNavigation.module.css';
import Submenu from './Submenu';
import { useNav } from '../../store/nav-store';

const MainNavigation = () => {
  const { toggleHandler } = useNav();
  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        {/* <AiOutlineMenu className={classes.icon} /> */}
        <img src={Logo} alt="Logo" />
        <h2>PCEA Theology By Extension</h2>
      </div>
      <div className={classes['side-menu']} onClick={toggleHandler}>
        <AiOutlineUser className={classes.icon} />
        <span>ADMINISTRATOR</span>
        <AiFillCaretDown className={classes['icon-sm']} />
      </div>
      <Submenu />
    </nav>
  );
};

export default MainNavigation;
