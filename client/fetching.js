// song fetch requests

// const baseUrl = "http://localhost:8080/api/";
const songUrl = "http://localhost:8080/api/songs";
const tabsUrl = "http://localhost:8080/api/tabs";

export async function fetchAllSongs() {
  try {
    const response = await fetch(`${songUrl}/`);
    const returnVal = await response.json();
    return returnVal;
  } catch (err) {
    console.log(err);
    return err;
  }
}

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
    const response = await fetch(`${songUrl}/${songId}`);
    const result = await response.json();
    const singleSong = result;
    console.log(singleSong);
    return singleSong;
  } catch (err) {
    console.error("uhoh trouble fetching single song", err);
  }
}

export async function fetchSingleTab(tabId) {
  try {
    const response = await fetch(`${tabsUrl}/${tabId}`);
    const result = await response.json();
    const singleTab = result;
    console.log(singleTab);
    return singleTab;
  } catch (err) {
    console.error("uh oh trouble fetching single tab", err);
  }
}

// delete song
export async function deleteSong(songId) {
  try {
    const response = await fetch(`${songUrl}/${songId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("uh oh trouble deleting song", error);
  }
}

// make a song
export async function createSong(levelsId, name, artist, image) {
  try {
    const response = await fetch(`${songUrl}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        levelsId,
        name,
        artist,
        image,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("trouble making song", error);
  }
}

// update a song
export async function updateSong(songId, song) {
  try {
    const response = await fetch(`${songUrl}/${songId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(song),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("trouble updating song", error);
  }
}
