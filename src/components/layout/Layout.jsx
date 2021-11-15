import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import Sidebar from './Sidebar';
import { useNav } from '../../store/nav-store';

import classes from './Layout.module.css';
const Layout = ({ children }) => {
  const { closeSubMenu } = useNav();
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes['wrapper-content']} onClick={closeSubMenu}>
          {children}
        </div>
        {/* <main>{children}</main> */}
      </div>
    </Fragment>
  );
};

export default Layout;
