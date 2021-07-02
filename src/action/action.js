import axios from "axios";

export const EmpData = (userdata)=> {
// debugger
    return {
        type : "SUBMIT" , 
        paylaod : userdata
    }
}