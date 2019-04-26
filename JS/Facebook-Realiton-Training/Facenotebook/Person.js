function Person(index) {
    this.name = "Person - " + index;
    this.profilePicture = new Photo(true);
    this.bio = new Story(true);
    this.album = [];
    this.post = [];
    this.respondToEventinvite = function(socialEvent) {
        socialEvent.registeredUsers.push(this);
    }



    this.generatePost = function() {
        for (let j = 1; j <= 5; j++) {
            let elementOne = new Story();
            this.post.push(elementOne);
        }

    }
    this.generatePost();

    this.generatePictures = function() {

        let element = new Photo(false, "https://www.w3schools.com/w3css/img_lights.jpg", 0);
        element2 = new Photo(false, "https://cdn.pixabay.com/photo/2017/01/06/19/18/soap-bubble-1958666_1280.jpg", 1);
        element3 = new Photo(false, "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/hs-2016-13-a-large_web.jpg?itok=z-fRZ7ww&fc=50,50", 2);
        element4 = new Photo(false, "https://cdn.spacetelescope.org/archives/images/large/heic0910e.jpg", 3);
        element5 = new Photo(false, "https://images.newscientist.com/wp-content/uploads/2016/02/black-hole-jet-star.jpg", 4);
        element6 = new Photo(false, "https://st2.depositphotos.com/5545264/9424/v/600/depositphotos_94248330-stock-video-purple-spiral-galaxy-in-deep.jpg", 5);
        element7 = new Photo(false, "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/05/729665main_A-BlackHoleArt-pia16695_full-1024x576.jpg", 6);
        element8 = new Photo(false, "https://pbs.twimg.com/media/Dh8RNKFV4AUukH2.jpg", 7);
        element9 = new Photo(false, "https://www.irishtimes.com/polopoly_fs/1.3692620.1541793988!/image/image.jpg_gen/derivatives/landscape_685/image.jpg", 8);
        element10 = new Photo(false, "https://static.addtoany.com/images/dracaena-cinnabari.jpg", 9);
        this.album.push(element, element2, element3, element4, element5, element6, element7, element8, element9, element10);

    }
    this.generatePictures();

}