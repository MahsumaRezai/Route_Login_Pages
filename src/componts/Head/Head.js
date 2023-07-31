import { Fragment } from "react";
import log from './imag/gitlog.PNG';
import classes from './Head.module.css'
const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <img alt="" src={log} />
                <p className={classes.text}>Sign in to GitHub</p>
            </div>
        </Fragment>

    )

}
export default Head;
