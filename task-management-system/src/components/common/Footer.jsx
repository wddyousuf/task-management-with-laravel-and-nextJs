'use client';
import React from 'react';

const Footer = () => {
  let [year, setYear] = React.useState(2023);
  React.useEffect(() => {
    let date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-fluid">
        <div className="footer-container d-flex align-items-center justify-content-center py-2">
          <div>
            ©{year} &nbsp;
            <a href="#" target="_blank" className="fw-semibold">
              Md. Yousuf Hossain
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
