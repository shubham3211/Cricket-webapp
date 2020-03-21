import axios from 'axios';

const cricket = axios.create({
  baseURL: "https://cricketwebapp-backend.herokuapp.com"
})

export default cricket;