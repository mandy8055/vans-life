import { VANS_LIST } from '../constants';

export default async function fetchData(urlEndpoint) {
  const cachedData = sessionStorage.getItem(VANS_LIST);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  try {
    const resp = await fetch(urlEndpoint);
    const response = await resp.json();
    sessionStorage.setItem(VANS_LIST, JSON.stringify(response));
    return response;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export function getVanById(urlEndpoint, id) {
  let allVans = JSON.parse(sessionStorage.getItem(VANS_LIST));
  if (!allVans) {
    allVans = fetchData(urlEndpoint);
  }
  return allVans?.vans?.find((van) => van.id === id);
}
