// AuthService.js
// Login.js



class AuthService {
  async login(email, password) {
    // Call your backend API to authenticate the user
    // Example:
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      // Store user information in local storage or session storage
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid credentials');
    }
  }

  logout() {
    // Clear user information from local storage or session storage
    localStorage.removeItem('user');
  }
}

export default new AuthService();
