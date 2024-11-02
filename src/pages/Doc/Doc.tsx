import React from 'react';
import styles from './Doc.module.scss';

const Doc: React.FC = () => {
  return (
    <div className={styles.docContainer}>
      <h1 className={styles.title}>Documentation Page</h1>
      <p className={styles.description}>This is the documentation page.</p>

      <div className="p-4">
        <h1 className="font-poppins-thin text-2xl">Documentation Page (Bold)</h1>
        <p className="poppins-regular">This is regular text.</p>
        <p className="poppins-medium">This is medium-weight text.</p>
        <p className="poppins-light">This is light-weight text.</p>
        <p className="poppins-extrabold">This is extra-bold text.</p>
      </div>

    </div>
  );
};

export default Doc;