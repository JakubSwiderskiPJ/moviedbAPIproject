import useGet from "./useGet";
import {genresListURL} from "../API/API.envy";

export default function useGenreId(name) {
    const genList = useGet(genresListURL, [], `genres`);

    const result = genList.filter(genre => genre.name === name).map(genre => genre.id);

    return result[0];
}