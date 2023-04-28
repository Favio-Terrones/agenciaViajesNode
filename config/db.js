import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';


// const db = new Sequelize('agenciaviajes','root','admin',{
//      host: 'localhost',
//      port: 3306,
//      dialect: 'mysql',
//      define:{
//          timestamps: false
//      },
//      pool: {
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle: 1000
//      },
//      operatorAliases: false
// });


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     dialect: 'mysql',
     define:{
         timestamps: false
     },
     pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 1000
     },
     operatorAliases: false
});


export default db;