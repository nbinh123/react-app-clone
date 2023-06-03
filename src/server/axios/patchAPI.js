import axios from "axios";

function patchAPI(url, id, data) {
    axios.patch(`http://localhost:3002${url}/${id}`, data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default patchAPI;