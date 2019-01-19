export const getImageFromId = id => {
  return `https://picsum.photos/600/600?image=${id}`
}

export const fetchImages = async () => {
  const res = await fetch('https://picsum.photos/list');
  const imagesList = await res.json();
  const items = imagesList.map(item => ({ id: item.id, author: item.author }));
  return items;
}