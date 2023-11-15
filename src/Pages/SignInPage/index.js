import { users } from "../../DATA_BASE"


export const userLogin = async(data)=>{


    if(data.email && data.password){
       const isExist = users.find(elem=>elem.email === data.email)
       console.log(isExist);
       if(isExist===undefined)return {status:'failed',message:'no user exist'}
       if(isExist.password === data.password){
        return {status:'success',message:'user Authenticated'}
       }else{
        return {status:'failed',message:'password no match'}
       }
    }else{
        return {status:'failed',message:'no email or password found'}
    }

}
console.log(users);