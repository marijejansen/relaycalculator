import axios from "axios"

const localDomain = "https://localhost:5001"
const baseURL = `${localDomain}/api`;

export default axios.create({
    baseURL
})