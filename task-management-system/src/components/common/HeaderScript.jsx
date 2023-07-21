import Script from "next/script";
import React from "react";

const HeaderScript = () => {
  return (
    <>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img/layouts/msoft_icon.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/vendor/fonts/fontawesome.css" />

        <link rel="stylesheet" href="/assets/vendor/fonts/tabler-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/fonts/flag-icons.css" />

        <link
          rel="stylesheet"
          href="/assets/vendor/css/rtl/core.css"
          class="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/css/rtl/theme-default.css"
          class="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="/assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/node-waves/node-waves.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/typeahead-js/typeahead.css"
        />

        <link rel="stylesheet" href="/assets/vendor/libs/tagify/tagify.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/bootstrap-select/bootstrap-select.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/typeahead-js/typeahead.css"
        />

        {/* <link
          rel="stylesheet"
          href="/assets/vendor/libs/apex-charts/apex-charts.css"
        /> */}
        {/* <link rel="stylesheet" href="/assets/vendor/libs/swiper/swiper.css" /> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/fullcalendar/fullcalendar.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/flatpickr/flatpickr.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/jquery-timepicker/jquery-timepicker.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/pickr/pickr-themes.css"
        />

        <link
          rel="stylesheet"
          href="/assets/vendor/css/pages/cards-advance.css"
        />
        <link rel="stylesheet" href="/assets/vendor/css/pages/page-auth.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/css/pages/app-calendar.css"
        />

        <link
          rel="stylesheet"
          href="/assets/vendor/custom-scss/mahbub-style.css"
        />
      </head>
      
    </>
  );
};
import "react-datepicker/dist/react-datepicker.css";

export default HeaderScript;
