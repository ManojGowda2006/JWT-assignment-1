const jwt = require('jsonwebtoken')

const encrypt = (payload) => {
  // encrypt the payload and return token
  const token = jwt.sign({
    data : payload},
    'secret',
    {expiresIn : 60 * 60}
  )
  console.log("Token : ",token);
  return token;
}

const decrypt = (token) => {
  // return decoded payload
  const decoded = jwt.verify(token,'secret')
  console.log("Decoded token : ",decoded)
  return decoded;
}

module.exports = {
  encrypt,
  decrypt
}
