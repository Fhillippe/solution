const endPoint = "https://reqres.in/api/products";

const func = async (params) => {
  let queryString = endPoint;
  if (params) {
    const paramsString = params.join("&");
    queryString += "?" + paramsString;
  }
  //const response = await fetch(queryString);
  //const jsonResponse = await response.json();
  return queryString;
};

console.log(func(["page=1", "per_page=5"]));
