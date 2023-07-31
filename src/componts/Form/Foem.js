import classes from './Form.module.css'
import Button from '../Button/Button';
import { useState, Fragment } from 'react';

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enterPassword, setEnterdPasswod] = useState(false);
    const [enterEmail, setEnterdEmail] = useState(false);
    const FormHandler = (event) => {
        event.preventDefault();
        if (email.trim().length === 0) {
            setEnterdEmail(true)
        }
        if (password.trim().length === 0) {
            setEnterdPasswod(true)
        }

    }

    const emailHanlder = (event) => {
        setEmail(event.target.value);

    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Fragment>
        <form className={classes.form} onSubmit={FormHandler}>
            <div className={classes.content}>
                <label>Username or email address</label>
                <input className={classes.input} onChange={emailHanlder} />
                {enterEmail && <p className={classes.text}> Plases Enter your Email</p>}

                <label>Password</label>
                <input className={classes.input} onChange={passwordHandler} />
                {enterPassword && <p className={classes.text}>Plases Enter your Password</p>}
                <Button>Sign In</Button>
            </div>

        </form>
        </Fragment>
    )
}
export default Form;