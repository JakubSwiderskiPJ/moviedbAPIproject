import useGet from "./useGet";
import {videoURL} from "../API/API.envy";

export default function useVideo(filmId) {
    const video = useGet(videoURL(filmId), [], `results`)
    const videoKEY = () => (video[0] !== undefined) ? video[0].key : null;

    return `https://www.youtube.com/watch?v=${videoKEY()}`;
}