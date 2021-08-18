import axios from "axios";
import { API_URI } from "../config/constants";

const API_TYPE = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

//전체적으로 공용
function commonApi({ url, apitype, object, thenCallback, catchCallback }) {
  switch (apitype) {
    case API_TYPE.GET:
      axios
        .get(`${API_URI}/${url}`)
        .then((result) => {
          thenCallback(result);
        })
        .catch((error) => {
          catchCallback(error);
        });
      break;
    case API_TYPE.POST:
      axios
        .post(`${API_URI}/${url}`, object)
        .then((result) => {
          thenCallback(result);
        })
        .catch((error) => {
          catchCallback(error);
        });
      break;
    case API_TYPE.PUT:
      axios
        .put(`${API_URI}/${url}`, object)
        .then((result) => {
          thenCallback(result);
        })
        .catch((error) => {
          catchCallback(error);
        });
      break;
    case API_TYPE.DELETE:
      axios
        .delete(`${API_URI}/${url}`)
        .then((result) => {
          thenCallback(result);
        })
        .catch((error) => {
          catchCallback(error);
        });
      break;
    default:
      break;
  }
}

export function loginApi({ name, pw }) {
  const url = "login";
  const object = { name, pw };
  const thenCallback = (r) => {
    console.log(r);
  };
  const catchCallback = (e) => {
    console.log(e);
  };
  const apitype = API_TYPE.POST;

  commonApi({ url, apitype, object, thenCallback, catchCallback });
}
export function singupApi({ name, nickname, pw }) {}
