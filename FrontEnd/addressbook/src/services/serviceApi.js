//get
export async function getContacts(){
    const url = "https://localhost:7166/api/Employee/employees" ;

    try{
        const response =await fetch(url) ;

        if(!response.ok){
            throw new Error("reposnse is not OK" , response.status) ;
        }
        const json = await response.json();
    return json ;
    }
    catch (error) {
        console.error(error.message);
      }
}

//add 
export async function addContact(contactData){
    const url = "https://localhost:7166/api/Employee/add" ;

    try{
        const response =await fetch(url , {
            method : "POST" ,
            headers :{
                'Content-Type' : 'application/json' ,
            },
            body : JSON.stringify(contactData)  ,
        }) ;

        if(!response.ok){
            throw new Error("reposnse is not OK" , response.status) ;
        }
    //     const json = await response.json();
    // return json ;
    }
    catch (error) {
        console.error(error.message);
      }
}


//update
export async function updateContact(contactData , id){
 
    const url = `https://localhost:7166/api/Employee/update${id}` ;

    try{
        const response =await fetch(url , {
            method : "PUT" ,
            headers :{ 
                'Content-Type' : 'application/json' ,
            },
            body : JSON.stringify(contactData)  ,
        }) ;

        if(!response.ok){
            throw new Error("reposnse is not OK" , response.status) ;
        }
    //     const json = await response.json();
    // return json ;
    }
    catch (error) {
        console.error(error.message);
      }
}


//delete
export async function deleteContact(contactId){
    const url = `https://localhost:7166/api/Employee/delete${contactId}` ;

    try{
        const response =await fetch(url , {
            method : "DELETE" ,
            headers :{
                'Content-Type' : 'application/json' ,
            },
          
        }) ;

        if(!response.ok){
            throw new Error("reposnse is not OK" , response.status) ;
        }
    //     const json = await response.json();
    // return json ;
    }
    catch (error) {
        console.error(error.message);
      }
}
