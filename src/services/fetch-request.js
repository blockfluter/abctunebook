import axios from 'axios';

export default  function request(url) {
    return axios.get(url).then(response=>response.data);
}
