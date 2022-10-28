import React from 'react';
import user from '../../utils/user.json';
const styles = {
  mainContainer:
    'shadow-xl rounded-xl border border-gray-300 absolute top-16 right-[20%] bg-white p-2',
  firstContainer: 'w-[250px] h-full border-b border-gray-300 pb-2',
  section: 'flex items-center gap-2 text-black text-sm',
  profilePhoto: 'h-12 w-12',
  usernameContainer: '',
  userName: 'font-semibold text-[16px]',
  description: '',
  profileButton:
    'w-full  border border-blue-600 font-semibold text-sm rounded-3xl text-blue-600 mt-4 hover:bg-blue-100',
  secondContainer: 'pt-2 pb-2 text-sm flex flex-col gap-1 border-b border-gray-300 ',
  titles: 'font-semibold text-[16px] text-black ',
  freePremium: 'font-semibold hover:underline cursor-pointer',
  thirdContainer: ''
};
function ProfileMenuDisplay({ displayMenu }) {
  return (
    <div className={`${displayMenu} `}>
      <main className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <section className={styles.section}>
            <img src={user.photo} alt="profilePhoto" className={styles.profilePhoto} />
            <div>
              <p className={styles.userName}>{user.name}</p>
              <p>{user.description}</p>
            </div>
          </section>
          <button className={styles.profileButton}>View Profile</button>
        </div>
        <div className={styles.secondContainer}>
          <h2 className={styles.titles}>Account</h2>
          <h3 className={styles.freePremium}>Try free Premium</h3>
          <p className="hover:underline cursor-pointer">Settings and privacy</p>
          <p className="hover:underline cursor-pointer">Help</p>
          <p className="hover:underline cursor-pointer">Language</p>
        </div>
        <div className={styles.secondContainer}>
          <h2 className={styles.titles}>Manage</h2>
          <p className="hover:underline cursor-pointer">Publications and activity</p>
          <p className="hover:underline cursor-pointer">Job posting account</p>
        </div>
        <p className="text-sm pt-2 hover:underline">Log out</p>
      </main>
    </div>
  );
}

export default ProfileMenuDisplay;
