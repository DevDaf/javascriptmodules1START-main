
const randomFromArray = (arr) => {
  if (arr.length === 0) {
      return undefined; 
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]; 
};


export { randomFromArray as randomSelect };

