import jwt from 'jsonwebtoken';
import config from 'config';
const JWT_SECRET="Hello world"

const generateToken = (id) => {
    return jwt.sign({ id },  JWT_SECRET, {
      expiresIn: '30d',
    })
  }
  
export default generateToken;