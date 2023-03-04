import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU3MDBiNGNjMWJiYmFlMzRmNTlkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzYyMDM0OCwiZXhwIjoxNjc3ODc5NTQ4fQ.bItDm_NTfDYK6atJ0vucSNs-wYp61VhqdeqsL1erISQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
