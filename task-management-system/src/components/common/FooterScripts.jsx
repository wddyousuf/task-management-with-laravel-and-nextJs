"use client";
import Script from "next/script";
import React from "react";

const FooterScripts = () => {
  return (
    <>
      <Script
        src="/assets/vendor/libs/jquery/jquery.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/vendor/js/helpers.js" strategy="lazyOnload" />

      <Script
        src="/assets/vendor/js/template-customizer.js"
        strategy="lazyOnload"
      />

      {/* =========== Design Break =============== */}
      <Script src="/assets/js/config.js" strategy="lazyOnload" />

      <Script
        src="/assets/vendor/libs/popper/popper.js"
        strategy="lazyOnload"
      />

      <Script src="/assets/vendor/js/bootstrap.js" strategy="lazyOnload" />
      <Script
        src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendor/libs/node-waves/node-waves.js"
        strategy="lazyOnload"
      />

      <Script
        src="/assets/vendor/libs/hammer/hammer.js"
        strategy="lazyOnload"
      />

      {/* ========== Getting Error =============== */}
      {/* <Script src="/assets/vendor/libs/i18n/i18n.js" strategy="lazyOnload" /> */}

      <Script
        src="/assets/vendor/libs/typeahead-js/typeahead.js"
        strategy="lazyOnload"
      />

      <Script src="/assets/vendor/js/menu.js" strategy="lazyOnload" />

      {/* <Script
        src="/assets/vendor/libs/apex-charts/apexcharts.js"
        strategy="lazyOnload"
      /> */}
      {/* <Script
        src="/assets/vendor/libs/swiper/swiper.js"
        strategy="lazyOnload"
      /> */}


      <Script
        src="/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"
        strategy="lazyOnload"
      />
      {/* <Script
        src="/assets/vendor/libs/chartjs/chartjs.js"
        strategy="lazyOnload"
      /> */}

      <Script
        src="/assets/vendor/libs/flatpickr/flatpickr.js"
        strategy="lazyOnload"
      />

      <Script
        src="/assets/vendor/libs/moment/moment.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js"
        strategy="lazyOnload"
      />


      <Script
        src="/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js"
        strategy="lazyOnload"
      />

      {/* ========== Getting Error =============== */}
      <Script
        src="/assets/vendor/libs/jquery-timepicker/jquery-timepicker.js"
        strategy="lazyOnload"
      />

      <Script
        src="/assets/vendor/libs/fullcalendar/fullcalendar.js"
        strategy="lazyOnload"
      />

      {/* ========== Getting Error =============== */}
      <Script src="/assets/vendor/libs/pickr/pickr.js" strategy="lazyOnload" />


      {/* ========== Getting Error =============== */}
      <Script src="/assets/js/dashboards-analytics.js" strategy="lazyOnload" />
      <Script src="/assets/js/charts-chartjs.js" strategy="lazyOnload" />

      {/* ========== Getting Error =============== */}
      <Script src="/assets/js/dashboards-crm.js" strategy="lazyOnload" />
      <Script src="/assets/js/dashboards-ecommerce.js" strategy="lazyOnload" />

      <Script src="/assets/js/forms-pickers.js" strategy="lazyOnload" />
      <Script src="/assets/js/pages-auth.js" strategy="lazyOnload" />

      <Script
        src="/assets/vendor/libs/tagify/tagify.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendor/libs/bootstrap-select/bootstrap-select.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendor/libs/typeahead-js/typeahead.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendor/libs/bloodhound/bloodhound.js"
        strategy="lazyOnload"
      />


      <Script src="/assets/js/app-calendar-events.js" strategy="lazyOnload" />
      <Script src="/assets/js/app-calendar.js" strategy="lazyOnload" />

      <Script src="/assets/js/forms-selects.js" strategy="lazyOnload" />

      <Script src="/assets/js/forms-tagify.js" strategy="lazyOnload" />
      <Script src="/assets/js/forms-typeahead.js" strategy="lazyOnload" />
      <Script src="/assets/vendor/js/dropdown-hover.js" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
};

export default FooterScripts;
