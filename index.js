function signup(userName) {
    // Existing users array
    const users = ['JohnDoe', 'JaneDoe', 'Alice', 'Bob'];

    // Check if user already exists
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        // Add new user to the array
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

module.exports = { signup }; 
