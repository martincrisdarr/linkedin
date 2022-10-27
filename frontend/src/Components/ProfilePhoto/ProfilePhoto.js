import React from 'react';
import user from '../../utils/user.json';
function ProfilePhoto() {
  return <img src={user.photo}></img>;
}

export default ProfilePhoto;
