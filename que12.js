// The Token manager: you are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthtoken that takes an authentication token and sets it in localstorage with an expiration time.

function setAuthtoken(token, expirationMinutes) {
    // Get the current time
    const now = new Date();
    // Set the expiration time
    const expirationTime = new Date(now.getTime() + expirationMinutes * 60000)

    // Create an object to store the token and expiration time

    const tokenData = {
        token: token,
        expires: expirationTime.toISOString()
    }

    localStorage.setItem('authToken', JSON.stringify(tokenData))
}

setAuthtoken('your-auth-token',30);


function getAuthToken() {
    
    const tokenData = localStorage.getItem('authToken');
    
    if (!tokenData) {
        return null; // No token stored
    }

    const { token, expires } = JSON.parse(tokenData);
    const now = new Date();

    // Check if the token has expired
    if (new Date(expires) < now) {
        localStorage.removeItem('authToken'); // Remove expired token
        return null; // Token is expired
    }

    return token; // Return the valid token
}
