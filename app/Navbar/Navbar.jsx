// Navbar.jsx
"use client";
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import UserContext from '@/context/userContext';
import { dologOut } from '../helper/loginservice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

function Navbar() {
  
  const context = useContext(UserContext);
  const router=useRouter()
  
  const [showNav, setShowNav] = useState(false);
 
   async function logOut() {
   
    try {
      const result = await dologOut();
     
      context.setUser(undefined);
      toast.success("Logout Successfull!!")
      router.push("/");
      return;
     
    } 
    catch (error) {
      toast.message("Failed logout!!");
    }
  }

  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Work Manager</span>
        </a>
        <button 
          className="block md:hidden" 
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? 'Hide' : 'Show'} Menu
        </button>
        <div className={`${showNav ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${styles.navItem}`}>
            {context.user && (
              <>
                <li className={styles.navItem}>
                  <Link href="/" className={styles.navLink} aria-current="page">Home</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/addtask" className={styles.navLink}>Add Tasks</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/showtask" className={styles.navLink}>Show Tasks</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="#" className={styles.navLink}>{context.user.name}</Link>
                </li>
                <li className={styles.logoutbutton}>
                  <Link href="/login" className={styles.navLink} onClick={logOut}>Logout</Link>
                </li>
              </>
            )}
            {!context.user && (
              <>
                <li className={styles.navItem}>
                  <Link href="/login" className={styles.navLink}>Login</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/register" className={styles.navLink}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
