import React from 'react';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import FollowCont from './FollowCont';
const styles = {
  container: 'w-[25%] h-[50%] rounded-xl h-16 bg-white border border-gray-300 p-4',
  infoContainer: 'flex justify-between w-full font-semibold text-gray-800 '
};
function RightSide() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h2>Add to your feed</h2>
        <BsFillInfoSquareFill />
      </div>
      <FollowCont />
      <FollowCont />
      <FollowCont />
    </div>
  );
}

export default RightSide;
