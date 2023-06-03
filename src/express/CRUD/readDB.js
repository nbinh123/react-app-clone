const readDB = (api, port, setState) => {
    fetch(`http://localhost:${port}/${api}`)
        .then(data => data.json())
        .then(data => setState(data))
}

export default readDB