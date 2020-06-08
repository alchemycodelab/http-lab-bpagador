module.exports = rawRequest => {
  const parseRequest = rawRequest.split(' ');
  const [method, path, , , body] = parseRequest;

  if(!body.includes('\n')) {
    return {
      method, 
      path 
    };
  } else {
    const bodyParseRequest = body.split('\n');
    return {
      method, 
      path, 
      body: bodyParseRequest[2]
    };
  }

};
