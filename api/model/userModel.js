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
    saveRoute(route){
        users[0].routes.push(route);
        return users[0].routes;
    }
    checkroute(){
        return users[0].routes;
    }
    deleteroute(route){
        console.log(users[0].routes.findIndex(element => element.stringify()=== route.stringify()));
        if(users[0].routes.findIndex(element => element.stringify()=== route.stringify())>=0){
            users[0].routes.splice(user.routes.findIndex(route),1)
        }
        else{
            return "The route doesn't exist"
        }
        
        return users[0].routes;
    }

}

export default new User();