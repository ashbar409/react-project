import axios from "axios";

export async function getMonsterSearch(query){
    const response = (await axios.get(`https://mhw-db.com/monsters?q={"name":"${query}"}`)).data[0]
    console.log(response)
    return response
}

export async function getAllMonsters(){
    const response = (await axios.get(`https://mhw-db.com/monsters`)).data
    console.log(response)
    return response
}

export async function getAllWeapons(){
    const response = (await axios.get(`https://mhw-db.com/weapons`)).data
    console.log(response)
    return response
}

export async function getAllArmorSets(){
    const response = (await axios.get(`https://mhw-db.com/armor/sets`)).data
    console.log(response)
    return response
}

export async function getArmorSet(setName){
    const response = (await axios.get(`https://mhw-db.com/armor/sets?q={"name":"${setName}"}`)).data[0]
    console.log(response)
    return response
}