import { Fragment, useState } from "react";
import Card from "../Card/Card";
import classes from "./Adduser.module.css";
import Button from "../Button/Button";
const Adduser = (props) => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [enterdEmail, setEnterdEmail] = useState(false);
    const [enterdPassword, setEntredPassword] = useState(false)
    const formHanlder = (event) => {
        event.preventDefault();
        if (email.trim().length === 0) {
            setEnterdEmail(true);

        }
        if (password.trim().length === 0) {
            setEntredPassword(true);
            return;
        }
        setEamil('');
        setEntredPassword('')
    }

    const emailHanlder = (event) => {
        setEamil(event.target.value);

    }
    const passwordHanlder = (event) => {
        setPassword(event.target.value);

    }

    return (
        <Fragment>
            <Card>
                <div className={classes.text}>
                    <p>Sign In</p>
                </div>
                <form className={classes.form} onSubmit={formHanlder}>

                    <div className={classes.content}>
                        <div>
                            <input placeholder="Email or Phone number" className={classes.input} onChange={emailHanlder} />
                            {enterdEmail && <p className={classes.textVaild}>Please enter a valid email or phone number.</p>}

                        </div>
                        <div>
                            <input placeholder="Password" className={classes.input} onChange={passwordHanlder} />
                            {enterdPassword && <p className={classes.textVaildPassword}>Your password must contain between 4 and 60<br></br> characters.</p>}

                        </div>


                        <Button></Button>
                        <div className={classes.link}>
                            <div className={classes.links}>
                                <button type="checkbox" className={classes.button}></button>
                                <span className={classes.btn}>Remember me</span>
                            </div>
                            <div >
                                <a href className={classes.site}>Need help?</a>
                            </div>
                        </div>
                    </div>

                </form>
                <div className={classes.contenttext}>
                    <div className={classes.para}>
                        <span>New Netflix?</span>
                        <a href>Sign up now</a>

                    </div>
                    <div className={classes.paragh}>
                        <span>
                            this page is protected by Google reCAPTCHA to <br></br> ensure you are not a bot.
                        </span>
                        <a href className={classes.lin}>Learn more</a>
                    </div>
                </div>

            </Card>
        </Fragment>
    )
}
export default Adduser;