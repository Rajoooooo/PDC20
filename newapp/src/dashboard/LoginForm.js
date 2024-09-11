import React, { useState } from "react";
import AdminPanel from "./Dashboard";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);

    const [loginAttempts, setLoginAttempts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Corrected import and usage

    const handleLogin = () => {
        const validAdminCredentials = {
            username: 'user123',
            password: 'pass123'
        };

        const isAdmin = accountType === 'admin';
        if (isAdmin && username === validAdminCredentials.username && password === validAdminCredentials.password) {
            setUser({ name: username, isAdmin });
        } else if (!isAdmin && username === validAdminCredentials.username && password === validAdminCredentials.password) {
            setUser({ name: username, isAdmin: false });
        } else {
            setLoginAttempts(prevAttempts => {
                const newAttempts = prevAttempts + 1;
                if (newAttempts >= 3) {
                    navigate('/auth-error'); // Corrected navigate usage
                }
                return newAttempts;
            });
            setErrorMessage('Invalid credentials');
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        margin: 0,
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    };

    const headingStyle = {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    };

    const inputGroupStyle = {
        marginBottom: '15px',
        textAlign: 'left',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#555',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
        boxSizing: 'border-box',
    };

    const selectStyle = {
        ...inputStyle,
        appearance: 'none',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={containerStyle}>
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div style={formStyle}>
                    <h1 style={headingStyle}>Login</h1>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Account Type: </label>
                        <select
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                            style={selectStyle}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button
                        onClick={handleLogin}
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Login
                    </button>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {loginAttempts > 0 && (
                        <p style={{ color: 'red' }}>Login Attempts: {loginAttempts}</p>
                    )}

                    {/* Add a separate function for signup if needed */}
                </div>
            )}
        </div>
    );
}

export default LoginForm;
