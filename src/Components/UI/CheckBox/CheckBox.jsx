import classes from "./CheckBox.module.css";

const CheckBox = ({ style, checked, disabled, classname }) => {
  return (
    <div className={`${classes.checkBox} ${classname}`} style={style}>
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default CheckBox;
