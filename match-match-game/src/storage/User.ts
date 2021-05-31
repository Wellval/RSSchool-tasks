export class User {

    public name: String;
    public surname: String;
    public email: String;
    public score: Number = 0;

    constructor(name: String, surname: String, email: String) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}