//API call for all jackets

const url = "https://api.noroff.dev/api/v1/rainy-days/";

const specificUrl = "https://api.noroff.dev/api/v1/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8/";

async function getJackets() {

  const response = await fetch(url);

  const jacket = await response.json();

  return jacket;
  }   

export { getJackets };

//API call for specific jacket

async function getJacket() {
  
  const response = await fetch(specificUrl);

  const jacketDetails = await response.json();

  return jacketDetails;
  }

  export { getJacket };