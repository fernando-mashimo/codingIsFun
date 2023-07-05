const checkValidIP = (ipAddresses) => {
  if (ipAddresses.length !== 4) return false;
//   console.log(Number(ipAddresses[0])/1);
    // console.log(0/1);
    // console.log(0>=0);
    // console.log(0<256);
  return ipAddresses.every(
    (ipAddress) =>
      ipAddress !== ""
      && Number(ipAddress) / 1 !== 'NaN' && Number(ipAddress).toString.length === ipAddress.length
      && Number(ipAddress) >= 0
      && Number(ipAddress) < 256
  );
};

const isValidIP = (str) => {
  const arrayIP = str.split(".");
  return checkValidIP(arrayIP);
};

console.log(isValidIP("123.45.67.89"));