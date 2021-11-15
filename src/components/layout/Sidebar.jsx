import { Scrollbars } from 'react-custom-scrollbars';
import Username from './Username';
import Sidemenu from './Sidemenu';
import { useNav } from '../../store/nav-store';

import classes from './Sidebar.module.css';

const Sidebar = () => {
  const { closeSubMenu } = useNav();
  return (
    <aside className={classes.sidebar} onClick={closeSubMenu}>
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <Username />
        <Sidemenu />
      </Scrollbars>
    </aside>
  );
};

export default Sidebar;
