import React from 'react';
import LogoImage from './LogoImage';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const styles = {
  mainContainer: 'w-screen min-h-screen bg-white flex flex-col justify-center items-center',
  section: ' flex flex-col gap-6 py-8 px-6 rounded-xl shadow-xl h-full ',
  article: 'text-[15px] flex flex-col gap-2',
  form: 'flex flex-col gap-12',
  loginTitle: 'text-3xl font-bold',
  registerSpan: 'mt-16',
  loginButton: 'py-4 w-full rounded-3xl bg-blue-600 text-white font-semibold',
  joinNow: 'text-blue-500 font-semibold'
};
function Login() {
  return (
    <main className={styles.mainContainer}>
      <LogoImage />
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.loginTitle}>Login</h1>
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
          <p className={styles.joinNow}>¿Have you forgotten your password?</p>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </section>
      <p className={styles.registerSpan}>
        ¿Are you starting to use LinkedIn?
        <Link to="/register">
          <span className={styles.joinNow}> Join now</span>
        </Link>
      </p>
    </main>
  );
}

export default Login;
