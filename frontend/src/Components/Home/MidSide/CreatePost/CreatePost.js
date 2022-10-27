import React from 'react';
import ProfilePhoto from '../../../ProfilePhoto/ProfilePhoto';
import PostOption from './PostOption';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { ImPlay } from 'react-icons/im';
import { RiSuitcaseFill, RiArticleLine } from 'react-icons/ri';

const styles = {
  container: 'bg-white w-full py-4 px-6 rounded-xl border border-gray-300',
  firstContainer: ' flex items-center gap-2 w-full',
  photoContainer: 'w-12 h-12',
  form: 'w-full',
  input:
    'border border-gray-400 rounded-3xl py-3.5 px-4 text-sm font-semibold w-full outline-none hover:bg-[#F5F5F5]',
  optionsContainer: 'mt-4 flex justify-between flex-wrap'
};
function CreatePost() {
  return (
    <main className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.photoContainer}>
          <ProfilePhoto />
        </div>
        <form className={styles.form}>
          <label htmlFor="image"></label>
          <input className={styles.input} id="image" type="text" placeholder="Create publication" />
        </form>
      </div>
      <div className={styles.optionsContainer}>
        <PostOption icon={<HiOutlinePhoto />} name="Photo" color="text-blue-500" />
        <PostOption icon={<ImPlay />} name="Video" color="text-emerald-500" />
        <PostOption icon={<RiSuitcaseFill />} name="Employment" color="text-violet-500" />
        <PostOption icon={<RiArticleLine />} name="Write Article" color="text-red-400" />
      </div>
    </main>
  );
}

export default CreatePost;
