import axios from "axios";
import { baseURL } from "./serverURL";

//configuration file for axios


const CommonAPI=async(httpMethod,endPoint,requestBody)=>{
   const requestConfig={
    method:httpMethod,
    url:baseURL+endPoint,
    data:requestBody
   }

  return await axios(requestConfig).then((res)=>{
    return res
   }).catch((err)=>{
    return err
   })
}

export default CommonAPI      // default is used when only one function is exported from a file