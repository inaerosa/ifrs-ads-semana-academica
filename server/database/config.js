import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connection = mongoose
  .connect(
    `mongodb://${process.env.DBU}:${process.env.DBP}@127.0.0.1:27017/dbSemanaAcademica`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexão com o banco estabelecida");
  })
  .catch((err) => {
    console.log("Erro ao conectar com o banco....");
    console.log(err);
  });


export default connection;
