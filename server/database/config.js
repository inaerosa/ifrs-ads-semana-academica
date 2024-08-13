import mongoose from 'mongoose';

const connection = mongoose
  .connect(
    `mongodb://127.0.0.1:27017/dbSemanaAcademica`,
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
