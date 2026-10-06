class APIClient<T extends Record<string, string>> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    sendEmail = async (data: T) => {
        try {
            const baseUrl = import.meta.env.VITE_BASE_URL?.replace(/\/$/, "") ?? "";
            const response = await fetch(`${baseUrl}${this.endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(data).toString()
            });
            return response;
        } catch (error) {
            console.error("There was an error sending the email", error);
            throw error;
        }
    }
}

export default APIClient;
