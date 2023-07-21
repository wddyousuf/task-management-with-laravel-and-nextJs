'use client';
import React, { useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
const ProtectedLayout = ({ children }) => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = localStorage.getItem('token');
    let isAuth = user && token ? true : false;
    if (!isAuth) {
      router.replace('/login');
    }
  }, []);

  return <></>;
};

export default ProtectedLayout;
