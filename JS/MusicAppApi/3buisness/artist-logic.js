import { ArtistRepository } from "../2repository/artist-repo.js";
import { AlbumRepository } from "../2repository/album-repo.js";

export function ArtistPageLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.searchFuntion = async function(artistName) { return await this.artistRepo.getSearchArtist(artistName); }

    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var topAlbums = await this.artistRepo.getTopAlbumNames(artistName);
        var albums = await this.albumRepo.getAlbumsByName(artistName, topAlbums);
        var similar = await this.artistRepo.getSimularArtists(artistName);
        var search = await this.artistRepo.getSearchArtist(artistName);

        var pageData = {
            artist: artistData,
            albumData: albums,
            similar: similar,
            search: search
        };
        // console.log(pageData)
        return pageData;
    }
}