import axios from "axios"

function getAPI(url, id, paramCondition, setState) {

    axios.get(`http://localhost:3002${url}/${id}`, {
        params: paramCondition,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            setState(response.data)
            return response
        })
        .catch(error => {
            console.log(error);
        });
}

export default getAPI