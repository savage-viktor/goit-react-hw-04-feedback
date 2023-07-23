import styles from "./Notification.module.css";
import Proptypes from "prop-types";

function Notification({ message }) {
  return <p className={styles.notificationMessage}>{message}</p>;
}

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};

export default Notification;
