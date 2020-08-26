import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {

    private users: User[] = [
        new User('Jean', 'Bal', 'Jean.Bal@Jean.com', 'Ice-Tea', ['Programmer', 'Jouer aux jeux vidéos'])
    ];

    userSubject = new Subject<User[]>(); //Observable de users

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }

}