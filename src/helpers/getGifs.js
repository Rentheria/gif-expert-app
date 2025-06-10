export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bJ5ihEir5HqDPQCBiwacpplbMVy8VeyL&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
};
