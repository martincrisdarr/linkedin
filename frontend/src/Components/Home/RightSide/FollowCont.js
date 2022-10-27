import React from 'react';
import user from '../../../utils/user.json';
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto';
import { AiOutlinePlus } from 'react-icons/ai';
const styles = {
  container: 'w-full flex gap-2 text-gray-500 text-sm mt-6',
  name: 'text-gray-800 font-semibold mb-1',
  photo: 'h-12 w-12',
  followButton:
    'flex items-center gap-2 py-1.5 px-3 text-md text-gray-600 font-semibold border-2 border-gray-500 rounded-3xl mt-2 hover:border-gray-700 hover:bg-gray-300 transition-all duration-200'
};
function FollowCont() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <ProfilePhoto />
      </div>
      <div>
        <p className={styles.name}>{user.name}</p>
        <p>{user.description}</p>
        <button className={styles.followButton}>
          <AiOutlinePlus />
          Follow
        </button>
      </div>
    </div>
  );
}

export default FollowCont;
