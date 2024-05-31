import inquirer from 'inquirer'
import {faker} from '@faker-js/faker'

// requirement
//users data
//atm machine
//atm functions


interface User {
    id:number
    pin:number
    name:string
    accountNumber:number
    balance:number
}

const createUser=()=>{
    let user:User[] = []

for(let i = 0; i < 5; i++){
    let users:User = {
        id:i,
        pin:1000+ i,
        name:faker.person.fullName(),
        accountNumber:Math.floor(10000000 * Math.random()*900000000),
        balance:1000000 * i
    }

    users.push(user);
}


    return users
}

const users: === createUser()



console.log(users)


//atm machine

const atmMachine = (users:User[])=>{
const res = await inquirer.prompt({
    type:"number",
    message:"write pin code",
    name:"pin"
})

}


const any = createUser()

atmMachine(users)

console.log(users)