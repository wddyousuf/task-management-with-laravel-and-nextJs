'use client';
import React from 'react';
import { axiosClient } from '@/helper/helper';
import { toast } from 'react-toastify';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { LOGIN } from '@/helper/routes';
export default function Login() {
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [rememberMe, setRememberMe] = React.useState(false);

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
          let res = await axiosClient().post(LOGIN, {
            email: email,
            password: password,
            remember_me: rememberMe,
          });
          if (res.data?.success == false) {
            toast.error(res.data?.message || 'Credentials are wrong');
          }
          if (res.data?.success == true && res.data?.data?.user) {
            setCookie('user', JSON.stringify(res.data?.data?.user));
            setCookie('token', res.data?.data?.access_token);
            router.replace('/tasks');
            setTimeout(function () {
              window.location.reload();
            }, 500);
          }
          if (res?.status === 401) {
            toast.error('Unauthorized');
          }
        } catch (err) {
          toast.error(err.message || 'Something went wrong');
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
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email-username"
            placeholder="Enter your username"
            autofocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 form-password-toggle">
          <div className="d-flex justify-content-between">
            <label className="form-label" for="password">
              Password
            </label>
            <a href="#">
              <small>Forgot Password?</small>
            </a>
          </div>
          <div className="input-group input-group-merge">
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
              aria-describedby="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember-me"
              name="remember-me"
              onChange={(e) => {
                setRememberMe(e.target.checked);
              }}
              value={rememberMe ? 'on' : 'off'}
            />
            <label className="form-check-label" for="remember-me">
              {' '}
              Remember Me{' '}
            </label>
          </div>
        </div>
        <button className="btn btn-primary d-grid w-100" disabled={loading}>
          Log in
        </button>
      </form>
    </>
  );
}
