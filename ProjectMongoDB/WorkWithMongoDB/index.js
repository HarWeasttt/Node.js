import express from 'express';
import mongoose from 'mongoose';
import {registerValidation,loginValidation} from './validation/validation.js'
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js'


mongoose.connect('mongodb+srv://andry1203:QPKtPSyd8WpTgnG7@cluster0.jgjuhxa.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('db ok'))
.catch((err)=>console.log(err))
const app = express();

app.use(express.json());

app.get('/auth/me', loginValidation, UserController.getMe);

app.post('/auth/login', UserController.login );

app.post('/auth/register',registerValidation, UserController.register);

app.listen(3000,(err)=>{
    if(err){return console.log(err);}
    else{console.log("Server work!")}});