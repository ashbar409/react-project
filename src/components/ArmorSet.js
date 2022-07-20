import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArmorSet } from "../services/Constants"

function ArmorSet () {

    
    const [armorSet, setArmorSet] = useState([{name: " ", skills:[{skillName: " ", level: 0, description: " "}]}])
    const {armor_id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getArmorSet(armor_id)
            setArmorSet(response.pieces)
        }
        fetchData()
        console.log(armorSet)
    }, [])

    return(
        <div>
            {armorSet.map((armor, index) => {
                return (<div key={index}>
                    <h2>{armor.name}</h2>
                    {armor.skills.map((skill, index) => {
                      return (
                        <div>
                            <h3>{skill.skillName}</h3>
                            <h4>Level: {skill.level}</h4>
                            <p>{skill.description}</p>
                        </div>
                      )  
                    })}
                </div>)
            })}
        </div>
    )
}

export default ArmorSet