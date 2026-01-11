import {
    FaHome,
    FaDoorClosed,
    FaFileInvoice
} from 'react-icons/fa';
import {
    MdTableRestaurant,
    MdBorderColor,
    MdLogin
} from "react-icons/md";

export const getRoutes = (t) => [
    {
      title: t.nav.home,
      href: '/',
      Icon: FaHome,
    },
    {
      title: t.nav.about,
      href: '/about',
      Icon: FaDoorClosed,
    },
    {
      title: t.nav.menu,
      href: '/menu',
      Icon: FaFileInvoice,
    },
    {
      title: t.nav.reservation,
      href: '/reservation',
      Icon: MdTableRestaurant,
    },
    {
        title: t.nav.orderOnline,
        href: '/order-online',
        Icon: MdBorderColor,
      },
      {
        title: t.nav.login,
        href: '/login',
        Icon: MdLogin,
      },
  ];