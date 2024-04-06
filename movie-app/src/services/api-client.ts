import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b27da0d64c4480ba3ca0cbf9b658de6",
  },
});
