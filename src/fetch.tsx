export const fetchMusic = async () => {
  const response = await fetch("API_ENDPOINT");
  const data = await response.json();
  return data.url;
};
