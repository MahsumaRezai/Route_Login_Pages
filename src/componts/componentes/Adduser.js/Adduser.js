import { Fragment, useState } from "react";
import Card from "../Card/Card";
import classes from './Adduser.module.css'
import Button from "../Button/Button";
import Head from '../Head/Head'
import Footer from "../Footer/Footer";

const Adduser = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const formHandler = (event) => {
        event.preventDefault();
        if(name.trim()==='' || password.trim()===''){
            return alert("can submit form correct")
        }
        console.log(name);
        console.log(password);
        setName('');
        setPassword('');
    }
    const inputNameHanlder = (event) => {
        setName(event.target.value);


    }
    const inputPasswordHanlder = (event) => {
        setPassword(event.target.value);

    }


    return (
        <Fragment>
            <Card>
                <Head />

                <form className={classes.form} onSubmit={formHandler}>

                    <label className={classes.label}>UserName or Email</label>
                    <input className={classes.input} onChange={inputNameHanlder} value={name}></input>
                    <label className={classes.label}>Password</label>
                    <input className={classes.input} onChange={inputPasswordHanlder} value={password}></input>
                    <Button>Login</Button>
                </form>
                <Footer />
            </Card>

        </Fragment>
    )
}
export default Adduser;