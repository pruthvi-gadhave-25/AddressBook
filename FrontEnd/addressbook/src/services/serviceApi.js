// add
//get

// export const getContacts = async () => {
//     try {
//         const response = await  fetch('https://localhost:7166/api/Employee/employees', {
//             method: "GET",
//             headers :{
//                 'Content-Type': 'application/json',
//             }

//         })


//         if ( !response.ok) {
//             throw new Error("Network Response was not OK " , response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.error(error);
//         return null;
//     }

// }

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
//delete
//update 