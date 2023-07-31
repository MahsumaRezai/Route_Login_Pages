import classes from './Button.module.css'
const Button = (porps) => {
    return (
        <section>
            <button className={classes.btn}>
                {porps.children}

            </button>

        </section>
    )
}
export default Button;