import axios from "axios";

export default function fetchUsers() {
  const endpoint = "http://localhost:8000/graphql/";
  const headers = {
    "content-type": "application/json",
    Authorization: "",
  };
  const graphqlQuery = {
    operationName: "fetchUsers",
    query: `query users { username }`,
    variables: {},
  };

  const response = axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });

  console.log(response.data, "jhfjhjd"); // data
  console.log(response.errors, "errrorrrr"); // errors if any
}
