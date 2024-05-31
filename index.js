import { faker } from '@faker-js/faker';
const createUser = () => {
    let user = [];
    for (let i = 0; i < 5; i++) {
        let users = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(10000000 * Math.random() * 900000000),
            balance: 1000000 * i
        };
        users.push(user);
    }
    return users;
};
const users;
 === createUser();
console.log(users);
