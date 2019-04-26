function SocialEvent(id){
    this.name = "Events -" + id;
    this.registeredUsers = []; 
    this.inviteUsers = function(users){
        for (let index = 0; index < 5; index++) {
            let pickedUsers = getRandomNumber(0,49);
            users[pickedUsers].respondToEventinvite(this);
        }
    }

}