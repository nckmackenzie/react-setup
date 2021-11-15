import { FiUsers, FiActivity } from 'react-icons/fi';
import { AiOutlineBranches } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { BiTransfer } from 'react-icons/bi';
export const sideMenu = [
  {
    name: 'Admin',
    children: [
      { name: 'Users', route: '/users', icon: <FiUsers /> },
      { name: 'Centers', route: '/centers', icon: <AiOutlineBranches /> },
      { name: 'Activity Log', route: '/activity', icon: <FiActivity /> },
    ],
  },
  {
    name: 'Inventory',
    children: [
      { name: 'Products', route: '/products', icon: <BsBook /> },
      { name: 'Product Transfers', route: '/transfers', icon: <BiTransfer /> },
    ],
  },
];
