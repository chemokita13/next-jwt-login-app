import React from "react";

function Login() {
    const handleInputChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    name="username"
                    id=""
                    placeholder="Enter username: "
                />
                <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter password: "
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
