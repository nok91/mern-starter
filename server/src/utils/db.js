import mongoose from 'mongoose';

function connect(url = process.env.MONGODB_URI, opts = {}) {
  console.log({
    env: process.env,
    uri: process.env.MONGODB_URI,
    PORT: process.env.PORT
  });
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default connect;
