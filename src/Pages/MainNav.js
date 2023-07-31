import { Fragment } from "react";
import { Link } from 'react-router-dom'

const MainNav = (props) => {
    return (
        <Fragment>
            <ul>
                <li><Link to='/'>Hello</Link></li>

                <li><Link to='/all'>AllMeetUps</Link></li>

                <li><Link to='/new'>NewMeetUps</Link></li>
            </ul>

        </Fragment>
    )
}
export default MainNav