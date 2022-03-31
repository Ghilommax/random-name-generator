import classes from './container.module.css'
const Container = (props) => {
    return (<section className= {classes.card}>
        {props.children}
    </section>)
} 
export default Container