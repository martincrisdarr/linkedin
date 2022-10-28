import React, { useState } from 'react';
import user from '../../utils/user.json';
import { BsLinkedin, BsSearch, BsPeopleFill, BsThreeDots } from 'react-icons/bs';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { RiArrowDownSFill, RiSuitcaseFill } from 'react-icons/ri';
import { IoIosNotifications } from 'react-icons/io';
import { MdPostAdd } from 'react-icons/md';

import List from './List';
import ProfileMenu from './ProfileMenu';
import ProfileMenuDisplay from './ProfileMenuDisplay';
const styles = {
  navbar:
    'w-full h-[55px] fixed z-50 flex items-center px-6 lg:px-16 bg-white shadow-xl text-gray-600',
  form: 'flex items-center h-full gap-8 relative',
  searchIcon: ' md:absolute left-20 ',
  logo: ' text-blue-700',
  searchInput: 'hidden lg:flex h-[60%] bg-black pl-12 rounded-md bg-[#eef3f8]',
  profileImg: 'h-6 w-6 ',
  section: 'flex items-center justify-around md:justify-end md:gap-12 w-full lg:w-[60%] px-2',
  span: 'flex flex-col justify-center items-center cursor-pointer',
  sectionIcons: 'hover:text-black',
  hambur: 'flex md:hidden',
  theyAre: 'flex items-center',
  products: 'hover:text-black flex flex-col justify-center items-center',
  lastContainer: 'hidden md:flex gap-4 ml-4',
  text: 'text-sm hidden lg:flex items-center'
};

function Navbar() {
  const [profileMenu, setProfileMenu] = useState(false);
  const handleProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };
  return (
    <main className={styles.navbar}>
      <form className={styles.form}>
        <BsLinkedin className={styles.logo} size="2rem" />
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <BsSearch size="1.3rem" className={styles.searchIcon} />
      </form>
      <section className={styles.section}>
        <List icon={<AiFillHome size="1.5rem" />} name="Home" />
        <List icon={<BsPeopleFill size="1.5rem" />} name="Network" />
        <List icon={<RiSuitcaseFill size="1.5rem" />} name="Jobs" />
        <List icon={<AiFillMessage size="1.5rem" />} name="Messages" />
        <List icon={<IoIosNotifications size="1.5rem" />} name="Notifications" />

        {/* ME */}
        <ProfileMenu styles={styles} handleProfileMenu={handleProfileMenu} user={user} />
      </section>
      <BsThreeDots size="2rem" className={styles.hambur} />
      <div className={styles.lastContainer}>
        <div className={styles.products}>
          <CgMenuGridR size="2rem" />
          <div className={styles.theyAre}>
            <p className={styles.text}>Products</p>
            <RiArrowDownSFill size="1.2rem" className={styles.text} />
          </div>
        </div>
        <div className={styles.products}>
          <MdPostAdd size="2rem" />
          <p className={styles.text}>Post a job</p>
        </div>
      </div>

      <ProfileMenuDisplay displayMenu={profileMenu ? 'flex' : 'hidden'} />
    </main>
  );
}

export default Navbar;
