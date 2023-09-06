// song fetch requests

const baseUrl = "http://localhost:8080/api/songs";

export async function fetchAllSongs() {
  try {
    const response = await fetch(`${baseUrl}/`);
    const returnVal = await response.json();
    return returnVal;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const tabsUrl = "http://localhost:8080/api/tabs";

export async function fetchAllTabs() {
  try {
    const response = await fetch(`${tabsUrl}/`);
    const returnVal = await response.json();
    return returnVal;
  } catch (err) {
    console.log(err);
    return err;
  }
}
