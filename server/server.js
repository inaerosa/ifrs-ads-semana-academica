/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express'
const app = express();
import database from  './database/config.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import Student from './schema/Student24.js';
import fs from 'fs';
import json2csv from 'json2csv';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import getDay from './helper/getDay.js';
import helmet from 'helmet';

dotenv.config();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ALLOW_URL);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api', async (req, res) => {
  try{
    const student = new Student24(req.body);
    student.save();
    console.log(student)
    res.status(201).json(student)
  }catch(err){
    console.log(err);
  }
  
})

app.get('/api/export', async (req, res, next) => {
  let {curso} = req.query;
  const dia = getDay(req.query.dia);

  if (curso.includes('mesa')) curso = 'true'

  const query = {
    [dia]: curso
  }

  const projection = {
    [dia]: 1,
    nome: 1,
    CPF: 1,
    email: 1,
    telefone: 1,
    instituicao: 1,
  }

  try{  
    const registers = await Student.find(query, projection).lean();
    if(registers.length === 0) return res.status(404).json({message: 'Nenhuma inscrição encontradas'})
    //gera arquivo csv
    const csv = json2csv.parse(registers, { fields: Object.keys(registers[0]) });
    fs.writeFileSync('./server/files/semana-academica.csv', csv.toString())

    //gera zip criptografado do arquivo
    const sourceDir = './server/files/semana-academica.csv'; 
    const zipFileName = './server/files/arquivo_com_senha.zip'; 
    const password = process.env.PASSWORD;

    const command = `zip -rP ${password} ${zipFileName} ${sourceDir}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao criar o arquivo zip: ${error.message}`);
        return;
      }
      console.log('Arquivo zip criado com sucesso!');
    });

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    var file = __dirname + '/files/arquivo_com_senha.zip';
    var filename = path.basename(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', 'application/zip');
    const fileStream = fs.createReadStream(file);

    //envia o arquivo
    fileStream.pipe(res);

    fileStream.on('error', (data, err) => {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send('Erro ao ler o arquivo ZIP.');    
    });
  }catch(err) {
    next(err)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Running at ${process.env.PORT}`);
})
export default app;
