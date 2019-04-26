import { ArtistPageLogic } from "../3buisness/artist-logic.js"
export function Renderer() {

    this.pageData = null;
    this.mainContainer = $("#mainContainer");
    var $divLeft = $("<div>").addClass("divLeft").appendTo(this.mainContainer);
    var $divRight = $("<div>").addClass("divRight").appendTo(this.mainContainer);
    var $self = this;
    this.pageLogic = new ArtistPageLogic();
    this.renderAll = function() {

        $divLeft = $("<div>").addClass("divLeft").appendTo(this.mainContainer);
        $divRight = $("<div>").addClass("divRight").appendTo(this.mainContainer);
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        this.renderProfile();
        this.renderBio();
    }
    this.renderRight = function() {
        this.renderAlbum();
        this.renderArtist();
        this.renderSearch();
    }
    this.renderProfile = function() {
        var $nameArts = $("<h1>").addClass("headingName").text(this.pageData.artist.name).appendTo($divLeft);
        var $imgDiv = $("<img>").addClass("imageArtist").appendTo($divLeft);
        $imgDiv.attr("src", this.pageData.artist.image[3]["#text"]);
    }
    this.renderBio = function() {
        var $paraDiv = $("<p>").addClass("paragraphBio").appendTo($divLeft);
        $paraDiv.text(this.pageData.artist.bio.content);

    }
    this.renderAlbum = function() {
        var $albumDiv = $("<div>").addClass("albumDiv").appendTo($divRight);
        for (let index = 0; index < this.pageData.albumData.length; index++) {
            var $albumSmallDiv = $("<div>").addClass("albumSmallDiv").appendTo($albumDiv);
            var $imgDiv = $("<img>").addClass("albumImg").appendTo($albumSmallDiv);
            var $paraAlbum = $("<p>").addClass("albumPara").appendTo($albumSmallDiv);

            $paraAlbum.text(this.pageData.albumData[index].name);
            $imgDiv.attr("src", this.pageData.albumData[index].image[2]["#text"]);

            for (let j = 0; j < this.pageData.albumData[index].tracks.length; j++) {
                var $li = $("<li>").addClass("liTracks").appendTo($albumSmallDiv);
                $li.text(this.pageData.albumData[index].tracks[j].name);

            }



        }
    }
    this.renderArtist = function() {

        var $divArtistsSim = $("<div>").appendTo($divRight);

        for (let j = 0; j < 5; j++) {
            var $simImage = $("<img>").appendTo($divArtistsSim);
            var $artistNamePara = $("<p>").appendTo($divArtistsSim);
            $simImage.attr("src", $self.pageData.similar.similarartists.artist[j].image[2]["#text"]);
            $artistNamePara.text($self.pageData.similar.similarartists.artist[j].name);
            $simImage.click(function(e) {
                e.preventDefault();
                $self.init($self.pageData.similar.similarartists.artist[j].name);
            });
        }
        this.renderSearch = function() {

            var $searchDiv = $("<div>").appendTo($divRight);
            var $inputSearch = $("<input>").attr("id", "searchInput").appendTo($searchDiv);
            var $someDiv = $("<div>").attr("id", "sugggestion").appendTo($searchDiv).hide();
            var $searchButton = $("<button>").attr("id", "searchButton").text("Search").appendTo($searchDiv);
            $("#searchButton").on("click", (e) => {
                e.preventDefault();

                this.init($("#searchInput").val());
            });
            $("#searchInput").on("input", async(e) => {
                if (this.activeSearch) {
                    clearTimeout(this.searchTimeout);
                }
                this.activeSearch = true;
                this.searchTimeout = setTimeout(async() => {

                    var result = await $self.searchSmth($(e.target).val());
                    console.log(result)
                    if (result.length > 0) {
                        $someDiv.css({
                            display: 'block',
                        });
                        $someDiv.html("");
                        for (var index = 0; index < result.length; index++) {
                            const element = result[index];
                            $("<span>").addClass("search-results").css("display", "block").text(element.name).appendTo($someDiv);
                        }
                    }
                }, 500);

            });
            $(document).on("click", ".search-results", (e) => {
                this.init($(e.target).text());
            });
        }

    }

    this.init = async function(artistName) {
        this.mainContainer.html("");
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);

        this.renderAll();
    }
    this.searchSmth = async function(artistName) {
        return await this.pageLogic.searchFuntion(artistName);
    }
}