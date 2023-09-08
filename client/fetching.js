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

export async function fetchSingleSong(songId) {
  try {
    const response = await fetch(`${baseUrl}/${songId}`);
    const result = await response.json();
    const singleSong = result;
    console.log(singleSong);
    return singleSong;
  } catch (err) {
    console.error("uhoh trouble fetching single song", err);
  }
}

export async function fetchSingleTab(tabId){
  try{
  const response = await fetch(`${tabsUrl}/${tabId}`)
  const result = await response.json();
  const singleTab = result;
  console.log(singleTab);
  return singleTab;
  } catch(err) {
    console.error("uh oh trouble fetching single tab", err);
  }
}
