import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4359ea95f7634b00b5a92468004a29f9",
  },
});
