import axios from "axios";

function deleteAPI(url, id, paramCondition) {
    axios.delete(`http://localhost:3002${url}/${id}`,{
        params: paramCondition,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export default deleteAPI;