import useGet from './useGet';
import { crewURL } from '../API/API.envy';

export default function useDirectorName(id) {
    const crew = useGet(crewURL(id), [], `crew`);

    return crew.filter(crewman => crewman.job === "Director").map(d => d.name);
}