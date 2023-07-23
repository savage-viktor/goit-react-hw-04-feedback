import styles from "./FeedbackOptions.module.css";
import Proptypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            className={styles.button}
            key={option}
            onClick={onLeaveFeedback}
          >
            {textTransformToCapitalCase(option)}
          </button>
        );
      })}
    </div>
  );
}

function textTransformToCapitalCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

FeedbackOptions.propTypes = {
  options: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};

export default FeedbackOptions;
