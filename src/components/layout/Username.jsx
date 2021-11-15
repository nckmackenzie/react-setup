import { AiOutlineUser } from 'react-icons/ai';
import classes from './Username.module.css';

const Username = () => {
  return (
    <div className={classes.user}>
      <AiOutlineUser className={classes.avator} />
      <h3>Nick Mackenzie</h3>
    </div>
  );
};

export default Username;
