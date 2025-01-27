

const API_LINK = "http://localhost:8080/users";


export const getUsers = () => {

    return fetch(API_LINK)
        .then(data => data.json())
        .then(data=>data["_embedded"]["users"])
    
}

export const addUser =(user)=>{
    
    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }).then(data=>data.json())
    .then(data=>data) //joh mila usko he return kardiya
    
}

export const uploadUserImage =(user_link,file)=>
{
    let formData= new FormData();
    formData.append("userImage",file);

    return fetch(user_link+"/image",{
        method:"POST",
        body:formData
    }).then(data=>data.text())

}