import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DBconnected from './dbconnection.js';
import router from './router/routs.js';
import path from 'path'

dotenv.config();
const app = express();
const _dirname=path.resolve();

app.use(cors());
app.use(express.json());
DBconnected();

app.use("/api", router);

app.use(express.static(path.join(_dirname,"/Loginpage/dist")));
app.get(/.*/,(req,res)=>{
  res.sendFile(path.resolve(_dirname,"Loginpage","dist","index.html"));
});



app.get('/', (req, res) => {
  res.send('This is home page');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
