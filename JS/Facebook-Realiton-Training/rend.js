function Renderer(person) {
    this.user = person;
    this.mainContainer = document.getElementById("main-container");


    this.renderAll = function() {
        let leftDiv = document.createElement("div"); // left main div
        let rightDiv = document.createElement("div"); //right main div
        leftDiv.id = "leftDiv";
        leftDiv.classList.add("leftDiv"); // here I add my left main div class css

        rightDiv.id = "rightDiv";
        rightDiv.classList.add("rightDiv"); // here I add css for my Right div

        let myMainContainer = document.getElementById("main-container");
        myMainContainer.appendChild(leftDiv);
        myMainContainer.appendChild(rightDiv);


        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        this.renderProfilepic();
        this.renderAbout();
    }
    this.renderProfilepic = function() {
        let myLeftDiv = document.getElementById("leftDiv");
        let myDiv = document.createElement("div"); //Top-right div
        myDiv.id = ('myMainCover');
        myDiv.classList.add("bigDiv"); // here I add my firsDiv on the top left 

        let myProfileImg = document.createElement("img"); // here I create my profImg
        myProfileImg.src = this.user.bio.storyPhoto;
        myProfileImg.classList.add("meVele");
        myProfileImg.id = ("meVelee");

        myDiv.appendChild(myProfileImg);
        myLeftDiv.appendChild(myDiv);

        let myPopDiv = document.createElement("div");
        myPopDiv.id = ("myPop");
        myDiv.appendChild(myPopDiv);
        myPopDiv.style.display = "none";
        let myBotton = document.createElement("bottom");
        myBotton.id = ("myBtn");
        myPopDiv.appendChild(myBotton);
        let mySpan = document.createElement("span");
        mySpan.innerHTML = "X";
        mySpan.id = "mySpan";
        myBotton.appendChild(mySpan);
        myProfileImg.addEventListener("click", function() {
            myPopDiv.style.display = "block";
            myPopDiv.appendChild(myProfileImg);
            myProfileImg.style.boxShadow = ("0 0 0 10px hsl(0, 0%, 50%), 0 0 0 15px hsl(0, 0%, 60%), 0 0 0 20px hsl(0, 0%, 70%), 0 0 0 24px hsl(0, 0%, 80%), 0 0 0 30px hsl(0, 0%, 90%)");
        });
        myBotton.addEventListener("click", function() {
            myPopDiv.style.display = "none";
            myDiv.appendChild(myProfileImg);

        });

        // function myPopUps(element, parentEle) {
        //     element.style.display = "block";
        //     element.appendChild(parentEle);
        // }
        // myPopUps();

    }
    this.renderAbout = function() {
        let myLeftDiv = document.getElementById("leftDiv");

        let myDivUnder = document.createElement("div"); // under-div 
        myDivUnder.classList.add("divUnder"); // here I add my UnderDiv class css

        let myAboutHeader = document.createElement('h1');
        myAboutHeader.innerHTML = this.user.bio.title;
        myAboutHeader.classList.add = ("myText");
        myDivUnder.appendChild(myAboutHeader);

        let myAbout = document.createElement('p');
        myAbout.innerHTML = this.user.bio.description;
        myAbout.classList.add = ("myText");
        myDivUnder.appendChild(myAbout);
        myLeftDiv.appendChild(myDivUnder);

    }
    this.renderRight = function() {
        this.renderAlbum();
        this.renderStories();
    }

    this.renderAlbum = function() {
        let myRightDiv = document.getElementById("rightDiv");
        let albumDiv = document.createElement("div"); //albumdiv
        albumDiv.classList.add("albumDiv"); // here I add class for my albumDiv
        this.mainContainer.appendChild(albumDiv);
        for (let index = 0; index < this.user.album.length; index++) {
            let smallDiv = document.createElement("div"); //here I create 10 smallDivs in albumDiv
            smallDiv.classList.add("smallDiv"); //here I add css for smallDivs
            smallDiv.id = ("mySmallPop");
            albumDiv.appendChild(smallDiv);
            let mygifAlbumImg = document.createElement("img"); // here I create my albumPic
            mygifAlbumImg.src = this.user.album[index].url;

            mygifAlbumImg.classList.add("gifPictures");
            mygifAlbumImg.id = this.user.album[index].id;
            smallDiv.appendChild(mygifAlbumImg);



            let myOtherPop = document.createElement("div");
            myOtherPop.id = ("myOtherPop");
            albumDiv.appendChild(myOtherPop);
            myOtherPop.style.display = "none";
            let myNewBotton = document.createElement("bottom");
            myNewBotton.id = ("myBtn");

            let mySpan = document.createElement("span");
            mySpan.innerHTML = "X";
            mySpan.id = "mySpan";
            myNewBotton.appendChild(mySpan);
            let myLeftArrow = document.createElement("a");
            myLeftArrow.innerHTML = "<";
            myLeftArrow.id = ("myLeft");
            let myRightArrow = document.createElement("a");
            myRightArrow.id = ("myRight");
            myRightArrow.innerHTML = ">";



            myRightDiv.appendChild(albumDiv); //here I add my albumDiv in my right div


            mygifAlbumImg.addEventListener("click", function() {
                myOtherPop.style.display = "grid";

                let myNewImage = document.createElement("img");
                myNewImage.src = mygifAlbumImg.src;
                myNewImage.alt = mygifAlbumImg.alt;
                myNewImage.id = mygifAlbumImg.id;
                myNewImage.classList = ("myNewImage");
                //    myNewDiv.appendChild(myNewImage);
                myOtherPop.append(myNewImage, myNewBotton, myLeftArrow, myRightArrow);

            })
            myNewBotton.addEventListener("click", function() {
                myOtherPop.style.display = "none";
                smallDiv.appendChild(mygifAlbumImg);

            })


        };



        $(document).on("click", "#myRight", (event) => {

            let myNext = parseInt($(event.target).siblings("img").attr("id")) + 1;
            if (myNext == 10) myNext = 0;
            let nextImage = this.user.album.find(photo => photo.id === myNext);
            $(event.target).siblings("img").attr("src", nextImage.url);
            $(event.target).siblings("img").attr("id", nextImage.id);

        })

        $(document).on("click", "#myLeft", (event) => {

            let myNext = parseInt($(event.target).siblings("img").attr("id")) - 1;
            if (myNext == -1) myNext = 9;
            let nextImage = this.user.album.find(photo => photo.id === myNext);
            $(event.target).siblings("img").attr("src", nextImage.url);
            $(event.target).siblings("img").attr("id", nextImage.id);

        })


    }
    this.renderStories = function() {
        let myRightDiv = document.getElementById("rightDiv");
        let postDiv = document.createElement("div"); //postDiv
        myRightDiv.appendChild(postDiv);
        postDiv.classList.add("postDiv"); // here I add css for postDiv 

        for (let index = 0; index < this.user.post.length; index++) {

            let gridDiv = document.createElement("div"); //here I create 3 gridDivs in postDiv
            gridDiv.classList.add("gridDiv"); // here I add css for gridDiv
            gridDiv.id = "grid" + index;
            postDiv.appendChild(gridDiv); //here I add my albumDiv in my right div
            // postDiv.appendChild(gridDiv); // heree I add the gridDivs in my postDiv


            let myFirstParagraph = document.createElement("p");
            myFirstParagraph.classList = ("myFirstText");
            myFirstParagraph = this.user.post[index].title + index;
            myFirstParagraph.id = "prv" + index;
            let mySecondParagraph = document.createElement("p");
            mySecondParagraph.classList.add = ("mySecondText");
            mySecondParagraph = this.user.post[index].description;
            mySecondParagraph.id = "vtor" + index;
            let myBtm = document.createElement("button");
            myBtm.id = (index);
            myBtm.innerHTML = ("Delete The Post");
            myBtm.addEventListener("click", function() {

                let a = document.getElementById("grid" + this.id);
                a.parentNode.removeChild(a);

                // console.log("")
            })
            gridDiv.append(myFirstParagraph, mySecondParagraph, myBtm);


        }

    }


}