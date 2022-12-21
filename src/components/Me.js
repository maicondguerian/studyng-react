

function Me(props){
    return(
        <div className="whoIam" >
            <img src={props.img} alt="eu"/>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Post:{props.post}</p>
        </div>
    )
}

export default Me;