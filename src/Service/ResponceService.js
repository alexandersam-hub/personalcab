import axios from "axios";

async function getResponse(link, postData=null){
    let data = null
    const api = axios.create({
        withCredentials: true
    });
    //console.log('postData',{data:postData})
    if(!postData)
        postData = ''
    await api.post(link,{data:postData}).then(
        res=>{
            // console.log(res)
            data = res.data
        }
    ) .catch( err => {
        if (err.response) {
            console.log('Ошибка!!!')
            console.log(err.response.data)

        }
    })
    return data
}
export default getResponse