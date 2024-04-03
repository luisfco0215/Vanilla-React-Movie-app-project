import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cc71a0bc3ff45509c587e3ab8f8166b",
  },
});
