import { useEffect, useState } from "react"
import { getAllWeapons } from "../services/Constants"

function Weapons () {

    const [weapons, setWeapons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllWeapons()
            setWeapons(response)
        }
        fetchData()
    }, [])

    return(
        <div className="flex">
            {weapons.map((weapon, index) => {
                return (<div className="Weapon" key={index}> 
                    <h3>{weapon.name}</h3>
                </div>)
            })}
        </div>
    )
}

export default Weapons