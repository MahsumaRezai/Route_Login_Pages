import { Fragment } from "react";
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const MainNav = (props) => {
    return (
        <Fragment>
            <header className={classes.head}>
                <ul >
                    <li><Link to='/' className={classes.link}>Github</Link></li>

                    <li><Link to='/all' className={classes.link}>Facebook</Link></li>

                    <li><Link to='/new' className={classes.link}>NewMeetUps</Link></li>
                </ul>
            </header>
        </Fragment>
    )
}
export default MainNav