import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6d880.firebaseio.com/"
});

export default instance;
