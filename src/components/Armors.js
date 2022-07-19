import { useEffect, useState } from "react"
import { getAllArmorSets } from "../services/Constants"

function Armors () {

    const [armorSets, setArmorSets] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await getAllArmorSets()
            setArmorSets(response)
        }
        fetchData()
    }, [])

    return(
        <div>
            {armorSets.map((armorSet, index) => {
                return (
                    <div> 
                        <h1>{armorSet.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Armors