import axios, { AxiosRequestConfig } from "axios";
export interface FetchReponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b27da0d64c4480ba3ca0cbf9b658de6",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchReponse<T>>(this.endpoint, config).then(res => res.data);
  }

  getById = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data);
  };

  // post = async () => {
  //   const res = await axios.post<T>(this.endpoint);
  //   return res.data;
  // };
}

export default APIClient;
