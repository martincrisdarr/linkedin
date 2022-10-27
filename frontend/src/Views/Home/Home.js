import LeftSide from '../../Components/Home/LeftSide';
import MidSide from '../../Components/Home/MidSide/MidSide';
import RightSide from '../../Components/Home/RightSide/RightSide';

const styles = {
  container: 'flex gap-8 w-full h-full py-8'
};
function Home() {
  return (
    <div className={styles.container}>
      <LeftSide />
      <MidSide />
      <RightSide />
    </div>
  );
}

export default Home;
