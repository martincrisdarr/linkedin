import React from 'react';
import user from '../../../../utils/user.json';
import ProfilePhoto from '../../../ProfilePhoto/ProfilePhoto';
import { BsThreeDots } from 'react-icons/bs';
const styles = {
  container: 'w-full bg-white mt-6 rounded-xl py-4 px-4 border  border-gray-300',
  section: 'flex text-[13px] justify-between w-full h-12 text-gray-400',
  profileContainer: 'flex gap-2',
  message: 'mt-12 flex flex-col gap-4',
  name: ' text-[15px] font-semibold text-gray-900',
  textProfileContainer: 'flex flex-col gap-1',
  image: 'w-full object-cover'
};
function Post() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.profileContainer}>
          <ProfilePhoto />
          <div className={styles.textProfileContainer}>
            <p className={styles.name}>{user.name}</p>
            <p>{user.description}</p>
            <p>19 hours</p>
          </div>
        </div>
        <BsThreeDots size="2rem" />
      </section>
      {/* MESSAGE */}
      <div className={styles.message}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, autem?</p>
        <img
          className={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEFAC_1FkOnutoz-IRkxn1-joGlinoHViLw&usqp=CAU"
          alt=""
        />
      </div>
    </main>
  );
}

export default Post;
