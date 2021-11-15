import { Link } from 'react-router-dom';
import { sideMenu } from '../../data/sideNav';
// import { HiChevronDown } from 'react-icons/hi';
// import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import classes from './Sidemenu.module.css';
const Sidemenu = () => {
  return (
    <div className={classes.sidebarWraper}>
      {sideMenu.map(menu => {
        return (
          <div className={classes.sidebarMenu} key={menu.name}>
            <h3 className={classes.sidebarTitle}>{menu.name}</h3>
            <ul className={classes.sidebarList}>
              {menu.children.map(child => {
                return (
                  <Link to={child.route} key={child.name}>
                    <li className={classes.sidebarListItem}>
                      {child.icon}
                      {child.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidemenu;
