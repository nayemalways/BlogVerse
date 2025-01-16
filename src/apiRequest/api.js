import axios from "axios";
import toast from 'react-hot-toast';

export const ApiRequest = async (method, EndPoint, postBody) => {
    try {
        const basUrl = `https://blogverse-igtn.onrender.com`;
        const config = {
            method: method,
            url: `${basUrl}${EndPoint}`,
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }

        // If request not GET and DELETE the postBody will included as data in config
        if(method !== "GET" && method !== "DELETE" && postBody) {
            config.data = postBody
        }


        // Requested to server
        const response = await axios(config);



        //Toast message
        if(response.data.status === "success") {
            toast.success(response.data.message);
            return true;
        }else {
            toast.error(response.data.message);
            return false;
        }
    }catch(e) {
        // Error handling
        console.log(e.toString());
        toast.error(`Something went wrong`);
        return false;
    }
}