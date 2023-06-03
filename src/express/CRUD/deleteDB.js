const deleteDB = (api, port, params_id) => {
    fetch(`http://localhost:${port}/${api}${params_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was an error:', error);
        });
}

export default deleteDB