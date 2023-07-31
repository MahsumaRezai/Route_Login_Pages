import classes from './Link.module.css'
import { Fragment } from 'react';
const Link = (props) => {
    return (
        <Fragment>

            <ul className={classes.link}>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
                <li> Contact Github</li>
            </ul>
        </Fragment>

    )

}
export default Link;