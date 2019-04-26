import { Track } from "./track.js";
export function Album(data) {
    this.name = data.name;
    this.tracks = data.tracks.track.map(function(track) {
        return new Track(track);
    });
    this.image = data.image;

}