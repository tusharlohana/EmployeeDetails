
export const EmpData = (userdata)=> {
// debugger
    return {
        type : "SUBMIT" , 
        payload : userdata
    }
}
export const deleteContact = (id) => {
    return {
        type: "DELETE",
        id: id
    }
}