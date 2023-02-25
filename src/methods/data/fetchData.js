const BASE_URL = 'https://admin.ikar-thinktank.org/api';

const getData = async (endpoint) => {
    await fetch(`${BASE_URL}${endpoint}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
};

export default getData;







