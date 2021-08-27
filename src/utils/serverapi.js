import axios from "axios";
import { API_URI } from "../config/constants";

const API_TYPE = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

//전체적으로 공용
function commonApi({
  url,
  apitype,
  object,
  thenCallback = (r) => {},
  catchCallback = (e) => {},
}) {
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

export function loginApi(
  { name, pw },
  resultCallback,
  errorCallback = (e) => {}
) {
  const url = "login";
  const object = { name, pw };
  const thenCallback = (r) => {
    resultCallback(r);
    // console.log(r);
  };
  const catchCallback = (e) => {
    errorCallback(e);
    // console.log(e);
  };
  const apitype = API_TYPE.POST;

  commonApi({ url, apitype, object, thenCallback, catchCallback });
}
export function singupApi(
  { name, nickname, pw },
  resultCallback,
  errorCallback = (e) => {}
) {
  const url = "singup";
  const object = { name, nickname, pw };
  const thenCallback = (r) => {
    resultCallback(r);
    // console.log(r);
  };
  const catchCallback = (e) => {
    errorCallback(e);
    // console.log(e);
  };
  const apitype = API_TYPE.POST;

  commonApi({ url, apitype, object, thenCallback, catchCallback });
}
export function getBoardsApi(thenCallback) {
  const url = "board";
  const apitype = API_TYPE.GET;

  commonApi({ url, apitype, thenCallback });
}
export function getIssueApi({ boardid }, thenCallback) {
  const url = "issue/" + boardid;
  const apitype = API_TYPE.GET;

  commonApi({ url, apitype, thenCallback });
}
export function postIssueApi(
  { boardid, title, content, writer },
  thenCallback,
  catchCallback = (e) => {}
) {
  const url = "issue";
  const object = { boardid, title, content, writer };
  const apitype = API_TYPE.POST;

  commonApi({ url, apitype, object, thenCallback, catchCallback });
}
export function getIssueInfoApi({ boardid, issueid }, thenCallback) {
  const url = `issue/${boardid}/${issueid}`;
  const apitype = API_TYPE.GET;

  commonApi({ url, apitype, thenCallback });
}

export function putIssueApi({ issueid, title, content }, thenCallback) {
  const url = `issue/${issueid}`;
  const object = { title, content };
  const apitype = API_TYPE.PUT;

  commonApi({ url, apitype, object, thenCallback });
}

export function deleteIssueApi({ issueid }, thenCallback) {
  const url = `issue/${issueid}`;
  const apitype = API_TYPE.DELETE;

  commonApi({ url, apitype, thenCallback });
}

export function getCommentApi({ issueid }, thenCallback) {
  const url = "comment/" + issueid;
  const apitype = API_TYPE.GET;

  commonApi({ url, apitype, thenCallback });
}
export function postCommentApi(
  { issueid, content, writer },
  thenCallback,
  catchCallback = (e) => {}
) {
  const url = "comment";
  const object = { issueid, content, writer };
  const apitype = API_TYPE.POST;

  commonApi({ url, apitype, object, thenCallback, catchCallback });
}

export function deleteCommentApi({ commentid }, thenCallback) {
  const url = `comment/${commentid}`;
  const apitype = API_TYPE.DELETE;

  commonApi({ url, apitype, thenCallback });
}
