import classes from './Footer.module.css'
const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.foo}>
                    <a href>FAQ</a>
                    <a href>Cookie Preferences</a>

                </div>
               
                <div className={classes.foo}>
                    <a href>Help Center</a>
                    <a href>Corporate Information</a>

                </div>
               
                <div className={classes.foo}>
                    <a href>Terms of Use</a>

                </div>
                <div className={classes.foo}>
                    <a href>Privacy</a>

                </div>
               

            </div>


        </div>

    )
}
export default Footer;