import { useNavigate } from "react-router-dom"

function MonsterList(props){
    
    const navigate = useNavigate()

    // const handleClick = (url) => {
    //     navigate(url)
    // }

    return(
        <div>
            <button onClick={() => navigate(`./${props.id}`)}>
                <img className="small-icon" src={`${process.env.PUBLIC_URL}/assets/images/monsters/${props.name.split(" ").join("-")}.png`} alt=""/>
                <p>{props.name}</p>
            </button>
        </div>
    )
}

export default MonsterList