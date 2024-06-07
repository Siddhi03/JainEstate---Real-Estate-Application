import "./Login.scss";
import {Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login(){
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        
        try{
            const res = await apiRequest.post("/auth/login",{
                username,
                password
            });
            updateUser(res.data);
            navigate("/");
        }catch(err){
            setError(err.response.data.message)
        }finally{
            setIsLoading(false);
        }

        
    }
    return(
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username"></input>
                    <input name="password" type="password" required placeholder="Password" />
                    <button disabled={isLoading}>Login</button> 
                    {error && <span className="error">{error}</span>}
                    <div>
                        Don't have an account?  
                        <span className="register"> <Link to="/register">Register</Link></span>
                    </div>
                    
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""></img>
            </div>
        </div>
    )
}

export default Login;