import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthProvider";
import { loginUser } from "../AuthService";
import '../auth.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { token, setToken } = useAuth();

    useEffect(() => {
        if (token) {
            console.log("token in login (after update)", token);
            navigate('/');
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginUser(username, password, setToken);
        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <h2>Login</h2>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <button onClick={() => navigate('/register')} style={{
                    color: '#ba3d63',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                }}>Register</button></p>
            </div>
        </div>
            );
            };

            export default Login;
