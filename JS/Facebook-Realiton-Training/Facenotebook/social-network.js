function SocialNetwork() {
    this.user = [];
    this.generateUsers = function() {
        for (let i = 1; i <= 50; i++) {
            let element = new Person(i);
            this.user.push(element);
        }
    }


    this.events = [];
    this.generateEvents = function() {
        for (let x = 1; x <= 5; x++) {
            let elementTwo = new SocialEvent(x);
            elementTwo.inviteUsers(this.user);
            this.events.push(elementTwo);
        }
    }


    this.generateUsers();
    this.generateEvents();
}