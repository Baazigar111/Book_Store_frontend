const getBaseUrl = () => {
    // If VITE_BACKEND_URL exists in the environment, use it. 
    // Otherwise, fall back to localhost for local coding.
    return import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
}

export default getBaseUrl;