import axios from "axios";
import { useState } from "react";

function PrivDashboard() {
    const [profileData, setProfileData] = useState({});

    const getProfile = async () => {
        const res = await axios.get("/api/profile");
        setProfileData(res.data);
    };
    return (
        <div>
            <h1>dashboard</h1>
            <pre>{JSON.stringify(profileData, null, 2)}</pre>
            <button onClick={getProfile}>get profile</button>
        </div>
    );
}

export default PrivDashboard;
