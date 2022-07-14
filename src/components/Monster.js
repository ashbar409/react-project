import { useEffect, useState } from "react"
import { getMonsterSearch } from "../services/Constants"

function Monster() {

    const [monster, setMonster] = useState({})
    const [query, setQuery] = useState('pukei-pukei')

    useEffect(() => {
        const fetchData = async () => { 
            return await getMonsterSearch(query).then((response) => {
                setMonster(response)
            })
        }
        fetchData()
    }, [query])

    return (
        <div>
            <h1>{monster.name}</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${query}.png`} alt='image not found'/>
            <p>{monster.description}</p>
        </div>
    )
}

export default Monster