import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";

export const axiosClient = (tokenServer = null) => {
  const defaultOptions = {
    baseURL:
      process.env.NEXT_PUBLIC_API_URL ||
      "http://103.248.13.236:8085/support/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = hasCookie("token") ? getCookie("token") : tokenServer;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export const can = (permission) => {
  if (!permission) return true;
  if (!hasCookie("user")) return false;
  const permissions = hasCookie("user")
    ? JSON.parse(getCookie("user"))?.permissions
    : [];
  return permissions?.includes(permission);
};

export const customerId = () => { 
  const user = hasCookie("user")
    ? JSON.parse(getCookie("user"))?.customer_id
    : '';
    return user;
 }

export const timeCalculation = (start, end = "") => {
  var specificDateTime = new Date(start);
  var currentDateTime = end == "" ? new Date() : new Date(end);
  var yearsDiff = currentDateTime.getFullYear() - specificDateTime.getFullYear();
  var monthsDiff = currentDateTime.getMonth() - specificDateTime.getMonth();
  var daysDiff = currentDateTime.getDate() - specificDateTime.getDate();
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    if (monthsDiff < 0) {
      monthsDiff += 12;
    }
    if (daysDiff < 0) {
      var monthBeforeCurrent = (currentDateTime.getMonth() - 1 + 12) % 12;
      var daysInMonthBeforeCurrent = new Date(
        currentDateTime.getFullYear(),
        monthBeforeCurrent + 1,
        0
      ).getDate();
      daysDiff += daysInMonthBeforeCurrent;
    }
  }
  return yearsDiff + " year " + monthsDiff + " month " + daysDiff + " day";
};

export const canAll = (permissions) => {
  if (!permissions) return true;
  if (!hasCookie("user")) return false;
  const userPermissions = JSON.parse(getCookie("user"))?.permissions ?? [];
  return permissions?.every((permission) =>
    userPermissions.includes(permission)
  );
};

export const getAuth = () => {
  const auth = hasCookie("user") ? JSON.parse(getCookie("user")) : null;
  return auth;
};

export const getImage = (image,height='',width='') => {
  if (image != null) {
    return (<img src={process.env.NEXT_PUBLIC_SERVER_URL+'/'+image} alt="" height={height} width={width}/>)
  }else {
    return '';
  }
};