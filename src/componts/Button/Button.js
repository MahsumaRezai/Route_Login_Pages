import classes from './Button.module.css'
import { Fragment } from 'react';
const Button = (props) => {
    return (
        <Fragment>
            <div>
                <button className={classes.btn}>{props.children}</button>
            </div>
        </Fragment>

    )
}
export default Button;
