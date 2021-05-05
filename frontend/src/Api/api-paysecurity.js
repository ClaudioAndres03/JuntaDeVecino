const getResidents = async()=>{
    return fetch("http://localhost:5000/paysecurity/residents", {
    method:"GET",
    headers: {"Content-Type":"aplication/json"}  
    });
}

module.exports = getResidents;