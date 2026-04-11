import Card from "./Card";
import Button from './Button';

import classes from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <Card className={classes['input-validation-error']}>
      {message}
      <div className={classes.actions}>
        <Button onClick={onClose}>
          Ok
        </Button>
      </div>
    </Card>
  );
};

export default ErrorMessage;
