const onSumit = async (username,password) => {
        const body = { username, password }
        return fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
        });

 }

//  const getFullName = async (username,password) => {
//         const body = { username, password }
//         return fetch("http://localhost:5000/auth/fullname", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//         });

//  }


 const getFullName = async(username) =>{
    const body = {username}
    return fetch("http://localhost:5000/auth/fullname",{
         method: "POST",
         headers:{"Content-Type": "application/json"},
          body: JSON.stringify(body)
    });

 }

module.exports={
    onSumit,
    getFullName
}