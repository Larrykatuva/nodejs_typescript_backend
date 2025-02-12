import {DataSource} from "typeorm";
import {User}  from './entities/User.entity'
import {Role}  from './entities/Role.entity'
import {Product} from './entities/Product.entity'
import {Profile} from './entities/Profile.entity'
import 'reflect-metadata';
export const databaseConfig = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "@Devtech@21",
    database: "typedb",
    synchronize: true,
    logging: true,
    entities: [User,Role, Product,Profile], 
    cache:true
})

databaseConfig.initialize()
    .then(()=>{
        console.log("Data Source has been initialized")
    })
    .catch((err)=>{
        console.log(`Error occured during initialization`, err);
    })