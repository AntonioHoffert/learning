import axios from "axios"

export class Axios {getinstance(key){
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
      };
      if (key) {
        headers['Authorization'] = token;
      }
      return axios.create({
        url: 'https://back.bitcointoyou.com/API',
        timeout: 1000000,
        headers,
        maxContentLenght: 20 * 100000
      });
    }
}