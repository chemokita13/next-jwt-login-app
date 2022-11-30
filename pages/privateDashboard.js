import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function PrivDashboard() {
    const [profileData, setProfileData] = useState({});

    const router = useRouter();

    const getProfile = async () => {
        try {
            const res = await axios.get("/api/profile");
            setProfileData(res.data);
        } catch (error) {
            alert("error");
            return;
        }
    };

    const logoutProfile = async () => {
        try {
            await axios.post("/api/logout");
        } catch (error) {
            alert("error");
            return;
        }
        router.push("/login");
    };

    return (
        <div>
            <h1>dashboard</h1>
            <pre>{JSON.stringify(profileData, null, 2)}</pre>
            <button onClick={getProfile}>get profile</button>
            <button onClick={logoutProfile}>logout</button>
        </div>
    );
}

export default PrivDashboard;
