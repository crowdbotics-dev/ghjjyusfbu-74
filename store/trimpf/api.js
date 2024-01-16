import axios from "axios"
import { CONNECTOR_TRIMPF001_SECRET } from "react-native-dotenv"
const trimpf = axios.create({
  baseURL: "https://api.trimpf.com",
  params: { private_key: CONNECTOR_TRIMPF001_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function trimpf001_get_search_testing_app_read(payload) {
  return trimpf.get(`/search/testing/app/`)
}
export const apiService = { trimpf001_get_search_testing_app_read }
