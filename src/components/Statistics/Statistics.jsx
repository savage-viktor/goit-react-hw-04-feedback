import styles from "./Statistics.module.css";
import Proptypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedbackList}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentage: Proptypes.number.isRequired,
};

export default Statistics;
