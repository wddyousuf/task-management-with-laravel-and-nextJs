import Image from 'next/image';
import styles from './page.module.css';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
export default function Home() {
  return (
    <>
      <div className="authentication-wrapper authentication-cover authentication-bg d-none">
        <div className="authentication-inner row">
          <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
            <div className="w-px-400 mx-auto">
              <h3 className="mb-1 fw-bold">Login</h3>

              <Login />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '5%' }}>
        <div className="row">
          <div className="d-flex col-6 col-lg-6 col-md-12 col-sm-12 justify-content-center align-items-center">
            <div className="w-px-400 mx-auto">
              <h3 className="mb-1 fw-bold">Login</h3>

              <Login />
            </div>
          </div>
          <div className="d-flex col-6 col-lg-6 col-md-12 col-sm-12 justify-content-center align-items-center">
            <div className="w-px-400 mx-auto">
              <h3 className="mb-1 fw-bold">Register</h3>

              <Register />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
