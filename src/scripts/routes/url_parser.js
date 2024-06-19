export const parseHash = () => {
  const hash = window.location.hash.substring(1);
  return hash || 'home';
};
