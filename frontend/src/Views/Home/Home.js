import LeftSide from '../../Components/Home/LeftSide';
import MidSide from '../../Components/Home/MidSide/MidSide';
import RightSide from '../../Components/Home/RightSide/RightSide';
import Navbar from '../../Components/Navbar/Navbar';

const styles = {
  container: 'flex gap-8 w-full h-full pt-20'
};
function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <LeftSide />
        <MidSide />
        <RightSide />
      </div>
    </>
  );
}

export default Home;
