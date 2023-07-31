import { Fragment } from "react";
import Form from '../componts/Form/Foem';
import Head from '../componts/Head/Head';
import AddUser from  '../componts/AddUser/AddUser';
import Link from '../componts/Link/Link'

const All = (props) => {
    return (
        <Fragment>
            <div>
                <Head />
                <Form />
                <AddUser/>
                <Link/>

            </div>
        </Fragment>
    )

}
export default All