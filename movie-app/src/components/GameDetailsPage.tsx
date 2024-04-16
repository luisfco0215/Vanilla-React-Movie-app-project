import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
    const params = useParams();
    return (
        <div>GameDetailsPage {params.id}</div>
    )
}

export default GameDetailsPage