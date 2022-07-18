function MonsterList(props){
    return(
        <div>
            <img className="small-icon" src={`${process.env.PUBLIC_URL}/assets/images/monsters/${props.name.split(" ").join("-")}.png`}/>
            <p>{props.name}</p>
            
        </div>
    )
}

export default MonsterList