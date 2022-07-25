import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllArmorSets } from "../services/Constants"

function Armors () {

    const [armorSets, setArmorSets] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async () => {
            const response = await getAllArmorSets()
            setArmorSets(response)
        }
        fetchData()
    }, [])

    return(
        <div className="armor-sets">
            {armorSets.map((armorSet, index) => {
                return (
                    <div key={index} className="flex"> 
                        <h1>{armorSet.name}</h1>
                        <button onClick={() => navigate(`./${armorSet.name.toLowerCase()}`)}>Go to {armorSet.name} set</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Armors