import { useEffect, useState } from "react"
import { getAllMonsters } from "../services/Constants"
import MonsterList from "./MonsterList"
import { useNavigate } from "react-router-dom"

function Monsters(){

    let navigate = useNavigate()
    const [monsters, setMonsters] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await getAllMonsters()
            setMonsters(response)
        } 
        fetchData()
    }, [])

    const changePage = (url) => {
        navigate(url)
    }

    return(
        <div className="monster-list">
            {monsters.map((monster, index) => {
                return <div className="monster" key={monster.id}>
                    <button>
                        <MonsterList 
                        name={monster.name} 
                        key={index}/>
                    </button>
                </div>
            })}
        </div>
    )
}
export default Monsters