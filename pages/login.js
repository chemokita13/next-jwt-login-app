import { useState } from "react";
import axios from "axios";

function Login() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/auth", credentials);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username: "
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password: "
                    onChange={(e) => handleInputChange(e)}
                />
                <button type="submit">Login</button>
            </form>
            <a href="/privateDashboard">go to dashboard</a>
        </div>
    );
}

export default Login;
