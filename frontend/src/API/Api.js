

const API_URL = "http://localhost:5000"

const logFile = async () => {
    const res = await fetch(`${API_URL}/api/logs/all`)
    return res.json()
}
export {
    logFile
}