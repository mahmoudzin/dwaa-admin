import { AiOutlineFolderAdd, AiOutlineFileAdd, AiOutlineDashboard, AiOutlineUserAdd } from 'react-icons/ai';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { BiCategoryAlt, BiCommentAdd } from 'react-icons/bi';
import { IoStatsChartSharp } from 'react-icons/io5';
import {MdBorderColor } from 'react-icons/md'; 
import { FaBoxes, FaLayerGroup, FaUsersCog } from 'react-icons/fa'; 
import i18n from '../languages/langSettings'
import { GoFileSubmodule } from 'react-icons/go';
import { HiUsers } from 'react-icons/hi';

export const links = [
    {
      title: i18n.t("page-dashboard"),
      links: [
        {
          href: '/',
          name: i18n.t("page-dashboard"),
          icon: <AiOutlineDashboard />,
        },
      ],
    },
    {
      title: i18n.t("page-category"),
      links: [
        {
          href: '/categories',
          name: i18n.t("page-category"),
          icon: <BiCategoryAlt />,
        },{
          href: '/groups',
          name: i18n.t("page-group"),
          icon: <FaLayerGroup />,
        },{
          href: '/subcategories',
          name: i18n.t("page-subcategory"),
          icon: <GoFileSubmodule />,
        },{
          href: '/brands',
          name: i18n.t("page-brand"),
          icon: <BiCategoryAlt />,
        } 
      ],
    },{
      title: i18n.t("page-product"),
      links: [
        {
          href: '/products',
          name: i18n.t("page-product"),
          icon: <FaBoxes />,
        }
      ]
    },{
      title: "Orders",
      links: [
        {
          href: '/orders',
          name: "Orders",
          icon: <MdBorderColor />,
        }
      ]
    },{
      title: "Members",
      links: [
        {
          href: '/customers',
          name: "Customers",
          icon: <HiUsers />,
        },{
          href: '/users',
          name: "Users",
          icon: <FaUsersCog />,
        }
      ]
    }
  ];