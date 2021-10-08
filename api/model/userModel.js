import users from '../data/users.js';

class User{
    create(user){
        if(users.find(element => element.username=== user.username)){
            return "The user already exist"
        }
        user.userId = users[users.length-1].userId+1;
        users.push(user);
        return users;
    }
    login(user){
        return users.find(element => element.username=== user.username && element.password=== user.password);
    }

}

export default new User();