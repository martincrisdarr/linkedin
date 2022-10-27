import React from 'react';
import user from '../../utils/user.json';
import { BsFillBookmarkFill } from 'react-icons/bs';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
const styles = {
  container: 'w-[25%] h-full flex justify-end text-whitesmoke text-gray-500 text-[13px] ',
  main: 'w-[220px] rounded-xl bg-white border-2 border-gray-300',
  section: 'flex flex-col justify-center items-center relative',
  userInfo: 'pt-12 text-center flex flex-col gap-y-2 border-b-2 w-full pb-4',
  userInfoName: 'text-gray-800 hover:underline text-[16px] font-semibold ',
  profileImageContainer: 'h-16 w-16 p-0.5 bg-white rounded-[50%] absolute top-6',
  backgroundImageContainer: 'h-14 overflow-hidden rounded-tr-xl rounded-tl-xl',
  backgroundImage: ' relative -top-6',
  hover: 'hover:bg-[#F5F5F5]',
  blueText: 'text-blue-500',
  views: 'py-4 border-b-2 font-semibold',
  viewsText: 'flex flex-row justify-between hover:bg-[#F5F5F5] px-2 py-1 cursor-pointer',
  premiumContainer: 'p-4 hover:bg-[#F5F5F5] border-b-2 border-gray-300 flex flex-col gap-2',
  getPremium: 'text-gray-800 underline cursor-pointer hover:text-blue-500 font-semibold',
  bookmark:
    'text-gray-700 flex py-2 px-4 items-center gap-2 cursor-pointer hover:bg-[#F5F5F5] font-semibold '
};
function LeftSide() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.backgroundImageContainer}>
            <img src={user.bgPhoto} className={styles.backgroundImage} alt="bgPhoto" />
          </div>
          <div className={styles.profileImageContainer}>
            <ProfilePhoto />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.userInfoName}>{user.name}</h2>
            <p>{user.description}</p>
          </div>
        </section>
        <div className={styles.views}>
          <p className={styles.viewsText}>
            Who has seen your profile <span className={styles.blueText}>56</span>
          </p>
          <p className={styles.viewsText}>
            Impressions of your publication <span className={styles.blueText}>131</span>
          </p>
        </div>
        <div className={styles.premiumContainer}>
          <p>Access exclusive information and tools</p>
          <p className={styles.getPremium}>Get them to hire your faster. Free Premium Test</p>
        </div>
        <div className={styles.bookmark}>
          <BsFillBookmarkFill />
          <p>Bookmark</p>
        </div>
      </main>
    </div>
  );
}

export default LeftSide;
