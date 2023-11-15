import { users } from "../../DATA_BASE"


export const userRegistration = async(data)=>{
    console.log(data);
    
    if(Object.keys(data).length>0){
        users.push(data)
        console.log(users);
        return {status:'success',message:'user registered'}
    }else{
        return {status:'failed',message:'query not fullfilled'}
    }

}