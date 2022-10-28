import TextField from '@mui/material/TextField';
import React from 'react';
import LogoImage from '../Login/LogoImage';
import { Link } from 'react-router-dom';
const styles = {
  mainContainer: 'w-screen min-h-screen bg-white flex flex-col justify-center items-center',
  section: ' flex flex-col gap-6 py-8 px-6 rounded-xl shadow-xl h-full w-[400px] mt-12 ',
  article: 'text-[15px] flex flex-col gap-2',
  form: 'flex flex-col gap-12',
  loginTitle: 'text-3xl font-bold',
  registerSpan: 'mt-4',
  loginButton: 'py-4 w-full rounded-3xl bg-blue-600 text-white font-semibold',
  terms: 'text-sm',
  joinNow: 'text-blue-500 font-semibold cursor-pointer'
};
function Register() {
  return (
    <main className={styles.mainContainer}>
      <LogoImage />
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.loginTitle}>Register</h1>
          <p>Stay up to date with your professional world</p>
        </article>
        <form action="" className={styles.form}>
          <TextField id="outlined-required" label="Email or phone" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <p className={styles.terms}>
            By clicking « Accept and join », you accept the
            <span className={styles.joinNow}> Terms of use</span>, the
            <span className={styles.joinNow}> Privacy Policy</span> and the
            <span className={styles.joinNow}> Cookies policy</span> from LinkedIn.
          </p>
          <button type="submit" className={styles.loginButton}>
            Accept and join
          </button>
        </form>
      </section>
      <p className={styles.registerSpan}>
        ¿Already a member of LinkedIn?{' '}
        <Link to="/login">
          <span className={styles.joinNow}>Login</span>
        </Link>
      </p>
    </main>
  );
}

export default Register;
