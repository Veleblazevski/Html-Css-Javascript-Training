import { Artist } from "../1entities/artist.js"
export function ArtistRepository() {
    this.getArtistInfo = async function getSomeData(artistName) {
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2,0/?method=artist.getInfo&artist=" + artistName + "&api_key=848f6071b165b1c692c367674225cf56&format=json")
            var data = await response.json();

            return new Artist(data.artist);

        } catch (error) {
            console.log("error out" + error);
            return null;
        }
    }
    this.getTopAlbumNames = async function(artistName) {
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2,0/?method=artist.getTopAlbums&artist=" + artistName + "&api_key=848f6071b165b1c692c367674225cf56&format=json")
            var data = await response.json();
            return data.topalbums.album.map((album) => {

                return album.name;

            })

        } catch (error) {
            console.log("error out" + error);
            return null;
        }
    }
    this.getSimularArtists = async function(artistName) {
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2,0/?method=artist.getsimilar&artist=" + artistName + "&limit=5&api_key=848f6071b165b1c692c367674225cf56&format=json")
            var data = await response.json();
            return data;

        } catch (error) {
            console.log("error out" + error);
            return null;
        }
    }

    this.getSearchArtist = async function(artistName) {
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2,0/?method=artist.search&artist=" + artistName + "&api_key=848f6071b165b1c692c367674225cf56&format=json")
            var data = await response.json();
            return data.results.artistmatches.artist.map((result) => {

                return result;
            });

        } catch (error) {
            console.log("error out" + error);
            return null;
        }
    }
}