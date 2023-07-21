'use client';
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { can } from '@/helper/helper';
import useHelp from '@/hooks/useHelp';
const Sidebar = () => {
  // let [isOpen, setIsOpen] = useState({
  //   quickAccess: false,
  // });
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  let { pathActive } = useHelp();

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link href="/tasks" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bold">Admin</span>
        </Link>

        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto"
        >
          <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* {can("view") && ( */}
        <li className={pathActive('/Tasks') ? 'menu-item active' : 'menu-item'}>
          <Link href="/tasks" className="menu-link">
            <i className="menu-icon tf-icons ti ti-smart-home"></i>
            <div data-i18n="Tasks">Tasks</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
