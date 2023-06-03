import axios from "axios";

function putAPI(url, id, data) {
      axios.put(`http://localhost:3002${url}/${id}`, data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
}

export default putAPI;