import axios from "axios";

function postAPI(url, data) {
    axios.post(`http://localhost:3002${url}`, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}
export default postAPI