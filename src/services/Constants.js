import axios from "axios";

export async function getMonsterSearch(query){
    const response = (await axios.get(`https://mhw-db.com/monsters?q={"name":"${query}"}`)).data[0]
    console.log(response)
    return response
}