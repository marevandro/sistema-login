import { useNavigate } from "react-router-dom";

function Home(){
 const navigate = useNavigate()
    return(
        <div>
            <h1 style={{fontSize: "20"}}>HOME</h1>
        </div>
    )
}
export default Home;