export function QureyString(location) {
  const qureystring = location.search.substring(1, location.search.length);
  const queryarray = qureystring.split("&");

  let qs = {};

  for (let i = 0; i < queryarray.length; i++) {
    const kv = queryarray[i].split("=");
    qs = { ...qs, [kv[0]]: kv[1] };
  }

  return qs;
}
