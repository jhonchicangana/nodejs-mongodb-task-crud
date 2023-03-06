import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async() => {
  try {
  const db = await connect(MONGODB_URI);//"mongodb://172.16.0.133:27018/crud-mongo"
  console.log("conexion ok", db.connection.name);
  }catch (error) {
    console.error(error);
  }
  })();

