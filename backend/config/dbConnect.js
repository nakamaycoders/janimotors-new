const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology: true,
    useNewUrlParser: true,
    });
    console.log("Database Connected Successfully!",conn.connection.host, conn.connection.port);
  } catch (error) {
    console.error("Database connection failed!", error);
  }
};

module.exports = dbConnect;