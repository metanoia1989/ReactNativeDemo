export const getInitials = (name) => {
  const mathces = name.match(/\b(\w)/g).map(w => w.toUpperCase());
  const showText = mathces.join('');
  return showText;
}