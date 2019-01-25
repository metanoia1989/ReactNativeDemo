export const fetchContacts = async (num=5) => {
  const url = `https://randomuser.me/api/?results=${num}&noinfo`;
  const res = await fetch(url);
  const { results } = await res.json();
  const contacts = results.map(item => {
    const { name: { first, last }, picture: { large: avatar }, phone, email } = item;
    const name = `${first} ${last}`
    return { name, avatar, phone, email };
  });
  return contacts;
};
