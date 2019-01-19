export const getAvatarColor = (name) => {
  let hex = Math.floor(Math.random() * 16777216).toString(16);
  while(hex.length < 6) hex = '0' + hex;
  return '#' + hex;
}