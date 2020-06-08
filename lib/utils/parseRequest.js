module.exports = rawRequest => {
  const parseRequest = rawRequest.split(' ');
  const [method, path] = parseRequest;
  const [, body] = rawRequest.split('\r\n\r\n');

  if(body) {
    return {
      method,
      path,
      body
    };
  } else {
    return {
      method,
      path
    };
  }

};
