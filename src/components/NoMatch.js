import { useNavigate } from "react-router-dom"

function NoMatch () {

    const navigate = useNavigate()

    return (
        <div className="flex">
            <h1>404 Page Not Found</h1> 
            <img src={`${process.env.PUBLIC_URL}/assets/images/unknown.png`} alt=""/>
            <h3>The Hunter's Guild still needs more research on that page!</h3>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default NoMatch