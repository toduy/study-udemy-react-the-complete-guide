import './Card.css';

/**
 * A component which actually just serves as a "shell" (wrapper component)
 * Act as a shell around either our ExpenseItem content or our Expenses content.
 * You're able to pass content between the opening and closing tags of this component
 * Avoid code duplication: Style duplication/HTML structure duplication, ...
 * For example: Can used to the complex JSX like modals & alerts, ...
 */
const Card = (props) => {
  // Tell this custom component support className
  const classes = 'card ' + props.className;
  // "children" is a reserved name, it is built into React, which every component receives
  // The value of "children" will always be the content between
  //  the opening and closing tags of your custom component
  return <div className={classes}>{props.children}</div>
};

export default Card;
