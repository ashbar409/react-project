import { useEffect, useState, useRef } from "react"
import { getMonsterSearch } from "../services/Constants"

function Monster(props) {

    const [monster, setMonster] = useState({})
    const [location, setLocation] = useState('')
    const isMounted = useRef(false)

    useEffect(() => {
        const fetchData = async () => { 
            return await getMonsterSearch(props.query).then((response) => {
                setMonster(response)
            })
        }
        fetchData()
        
    }, [])
    
    useEffect(() => {
        if (isMounted.current) {
            const locations = monster.locations
            const result = locations[Math.ceil(Math.random()*locations.length)-1].name.toLowerCase().split(" ").join("-")
            setLocation(result)
            console.log(location)
        } else {
            isMounted.current = true;
        }
    }, [monster])

    return (
        <div className="Monster">
            <div className={location}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/monsters/${props.query.split(" ").join("-")}.png`} alt='not found'/>
            </div>
            <h1>{monster.name}</h1>
            <p>{monster.description}</p>

            <h1>Weaknesses</h1>
            <ul>
                <li>Weakness</li>
            </ul>

            <h1>Resistances</h1>
            <ul>
                <li>Resistance</li>
            </ul>

            <h1>Damage Types</h1>
            <ul>
                <li>Damage</li>
            </ul>
            <h1>Ailments</h1>
            <ul>
                <li>Item to heal ailments</li>
            </ul>

            <h1>Armor</h1>
        </div>
    )
}

export default Monster