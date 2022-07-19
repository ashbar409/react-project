import { useEffect, useState } from "react"
import { getAllMonsters } from "../services/Constants"
import MonsterList from "./MonsterList"

function Monsters(){

    const [monsters, setMonsters] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await getAllMonsters()
            setMonsters(response)
        } 
        fetchData()
    }, [])

    return(
        <div className="monster-list">
            {monsters.map((monster, index) => {
                return <div className="monster" key={monster.id}>
                    <MonsterList 
                    name={monster.name} 
                    id={monster.name}
                    key={index}/>
                </div>
            })}
        </div>
    )
}
export default Monsters