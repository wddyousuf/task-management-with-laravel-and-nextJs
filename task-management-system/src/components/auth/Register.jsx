'use client';
import React from 'react';
import { axiosClient } from '@/helper/helper';
import { toast } from 'react-toastify';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { REGISTRATION } from '@/helper/routes';
export default function Register() {
  let [emailRegister, setEmailRegister] = React.useState('');
  let [name, setName] = React.useState('');
  let [passwordRegister, setPasswordRegister] = React.useState('');

  let [error, setError] = React.useState('');
  let [loading, setLoading] = React.useState(false);
  const router = useRouter();
  let handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_SERVER_URL + '/sanctum/csrf-cookie')
      .then(async (response) => {
        try {
          let res = await axiosClient().post(REGISTRATION, {
            email: emailRegister,
            password: passwordRegister,
            name: name,
          });
          if (res.data?.success == false) {
            toast.error(res.data?.message || 'Credentials are wrong');
          }
          if (res.data?.success == true && res.data?.data) {
            setCookie('user', JSON.stringify(res.data?.data?.user));
            setCookie('token', res.data?.data?.token);
            router.replace('/tasks');
            window.location.reload();
          }
          if (res?.status === 401) {
            toast.error('Unauthorized');
          }
        } catch (err) {
          const errors = err?.response?.data?.errors;
          Object.entries(errors).forEach(([key, value]) => {
            value.map((m) => toast.error(m));
          });
          return false;
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || 'Something went wrong');
      });

    setLoading(false);
  };
  return (
    <>
      <form
        id="formAuthentication"
        className="mb-3"
        action="index.html"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            autofocus
            onChange={(e) => setEmailRegister(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            autofocus
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 form-password-toggle">
          <div className="d-flex justify-content-between">
            <label className="form-label" for="password">
              Password
            </label>
          </div>
          <div className="input-group input-group-merge">
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
              aria-describedby="password"
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary d-grid w-100" disabled={loading}>
          Register
        </button>
      </form>
    </>
  );
}
