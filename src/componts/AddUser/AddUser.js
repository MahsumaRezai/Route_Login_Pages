import classes from './Add.module.css'
import { Fragment } from 'react';
const AddUser = (props) => {
    return (
        <Fragment>

        <div className={classes.content}>
            <div className={classes.text}>
                <span>New to GitHub?</span>
                <a href>
                    Create an account.
                </a>
            </div>

        </div>
        </Fragment>

    )
}
export default AddUser;