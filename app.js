'use strict';

/*
  Получить геолокацию пользователя через
	Geolocation.getCurrentPosition() (WEB API)
	и по координатам определить город, отправив запрос:
	https://api.bigdatacloud.net/data/reverse-geocode-client?
	latitude=00&longitude=00
*/

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const responce =
      await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?
    latitude=${latitude}&longitude=${longitude}`);
    if (!responce.ok) {
      throw new Error(responce.status);
    }
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.err(error);
  }
}

getMyCity();
