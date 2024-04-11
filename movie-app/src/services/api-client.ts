import axios from "axios";

// axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "4ca83e59e9744875b743fba5eb589d7f",
//   },
// });

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const res = await axios.get<T>("https://api.rawg.io/api" + this.endpoint, {
      params: {
        key: "8b27da0d64c4480ba3ca0cbf9b658de6",
      },
    });
    return res.data;
  };

  post = async () => {
    const res = await axios.post<T>(this.endpoint);
    return res.data;
  };
}

export default APIClient;
