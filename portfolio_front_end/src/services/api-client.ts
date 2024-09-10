import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://localhost/Projects/portfolio_2024/portfolio_back_end",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    sendEmail = async (data: T) => {
        try {
            const response = await axiosInstance.post(this.endpoint, data, {
                transformRequest: [(data) => new URLSearchParams(data).toString()]
            });
            return response; // Make sure to return the response if successful
        } catch (error) {
            console.error("There was an error sending the email", error);
            throw error; // Rethrow the error so the calling code can handle it
        }
    }
}

export default APIClient;
