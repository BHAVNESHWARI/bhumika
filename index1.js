function login(userName, password) {
    // Existing users array
    const users = ['JohnDoe', 'JaneDoe', 'Alice', 'Bob'];
    const correctPassword = 'Emp@123'; // Set correct password

    // Check if user exists
    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    // Check if password is correct
    if (password === correctPassword) {
        return "Login Successful...";
    } else {
        return "Wrong Password....";
    }
}

module.exports = { signup, login }; 