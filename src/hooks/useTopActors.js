import useGet from "./useGet";
import { crewURL } from "../API/API.envy";

export default function useTopActors(id) {
    const cast = useGet(crewURL(id), [], `cast`);

    return cast.filter(actor => actor.order <= 15).map(actor => actor.name);
}