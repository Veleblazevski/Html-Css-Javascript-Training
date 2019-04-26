import { Album } from "../1entities/album.js"
export function AlbumRepository() {

    this.getAlbumsByName = async function(artistName, albumNames) {
        var albums = [];
        albumNames = albumNames.slice(0, 5);
        for (let index = 0; index < albumNames.length; index++) {
            try {
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=848f6071b165b1c692c367674225cf56&artist=" +
                    artistName + "&album=" + albumNames[index] + "&format=json")
                var data = await response.json();


                albums.push(new Album(data.album));

            } catch (error) {
                console.log("error out" + error);
                return null;
            }
        }
        return albums;
    }
}