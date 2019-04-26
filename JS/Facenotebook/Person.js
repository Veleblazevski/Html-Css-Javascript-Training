function Person(index) {
    this.name = "Person - " + index;
    this.profilePicture = new Photo(true);
    this.bio = new Story(true);
    this.album = [];
    this.post = [];
    this.respondToEventinvite = function (socialEvent) {
        socialEvent.registeredUsers.push(this);
    }



    this.generatePost = function () {
        for (let j = 1; j <= 5; j++) {
            let elementOne = new Story();
            this.post.push(elementOne);
        }

    }
    this.generatePost();

    this.generatePictures = function () {
        for (let i = 1; i <= 10; i++) {
            let element = new Photo();
            this.album.push(element);
        }
    }
    this.generatePictures();

}