import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
function ProfileMenu({ styles, handleProfileMenu, user }) {
  return (
    <span className={styles.span} onClick={handleProfileMenu}>
      <img className={styles.profileImg} src={user.photo} alt="me" />
      <div className={styles.theyAre}>
        <p className={styles.text}>They are</p>
        <RiArrowDownSFill size="1.2rem" className={styles.text} />
      </div>
    </span>
  );
}

export default ProfileMenu;
