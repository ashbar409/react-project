import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { getMonsterSearch } from "../services/Constants"

function Monster() {

    const [monster, setMonster] = useState({name: "monster", locations: "ancient-forest", weaknesses: [], resistances: [], elements: [], ailments: []})
    const [location, setLocation] = useState('')
    const isMounted = useRef(false)
    const {monster_id} = useParams()

    useEffect(() => {
        const fetchData = async () => { 
            return await getMonsterSearch(monster_id).then((response) => {
                setMonster(response)
                isMounted.current = true;
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

        }
    }, [monster])

    return (
        <div className="Monster-page">
            <div className={location}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/monsters/${monster.name.split(" ").join("-")}.png`} alt='not found'/>
            </div>
            <h1>{monster.name}</h1>
            <p className="description">{monster.description}</p>

            <h1>Weaknesses</h1>
            <ul>
                {monster.weaknesses.map((weakness, index) => {
                    return <li key={index}>{`${weakness.element}: ${weakness.stars}`}</li>
                })}
            </ul>

            <h1>Resistances</h1>
            <ul>
                {monster.resistances.map((resistance, index) => {
                    return <li key={index}>{`${resistance.element}`}</li>
                })}
            </ul>

            <h1>Damage Types</h1>
            <ul>
                {monster.elements.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </ul>
            <h1>Ailments</h1>
            <ul className="ailments">
                {monster.ailments.map((ailment, index) => {
                    return <li key={index}>
                        <h3 className="ailment">{ailment.name}</h3>
                        <p>{ailment.description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Monster