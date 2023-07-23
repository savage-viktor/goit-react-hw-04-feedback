import styles from "./Section.module.css";
import Proptypes from "prop-types";

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Section;
