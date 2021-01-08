import React from 'react';
import styles from '../styles/fit-bar.css';
import { convertToCSSPositionData } from '../../utils/index.js';

function FitBar(props) {
  const fitRating = convertToCSSPositionData(props.rating);
  return(
    <div className={styles.fitBarContainer}>
      <div className={styles.leftRightPadding}>
        <div className={styles.horizontalLine}>
          <div className={styles.leftTick}></div>
          <div className={styles.middleTick}></div>
          <div className={styles.rightTick}></div>
        </div>
        <span className={styles.leftLabel}>Small</span>
        <span className={styles.middleLabel}>True to Size</span>
        <span className={styles.rightLabel}>Large</span>
        <div className={styles.theDot} style={fitRating}></div>
      </div>
    </div>
  )
}

export default FitBar;