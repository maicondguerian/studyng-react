import Sample from "./Sample";
import Styles from "./HelloWorld.module.css"

function HelloWorld(){
return(
    <div>
        <h2 className={Styles.styl}>Eu sou um estudante de programação<span>|</span></h2>
        <Sample/>
    </div>
    
)
}

export default HelloWorld;