import React from 'react';

const styles = {
  container: 'flex flex-col hover:text-black justify-center items-center',
  name: 'text-sm hidden md:flex items-center'
};
function List({ icon, name }) {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default List;
