import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header';
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg';
import { api } from '../../services/api';
import "./login.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateFields = () => {
        if (!username || !password) {
            setError('Por favor, preencha todos os campos.');
            return false;
        }
        setError('');
        return true;
    };

    async function handleLogin() {
        if (!validateFields()) return;

        try {
            const response = await api.post('/api/login', { 
                username,
                password
            });

            const token = response.data;  
            if (token) {
                localStorage.setItem('token', token);  
                console.log('Token armazenado:', token); 
                navigate("/home");
            } else {
                console.error('Token não retornado pelo servidor');
            }
        
            console.log('Login realizado com sucesso:', response.data);
            alert('Login realizado com sucesso!');

        } catch (error) {
            let message = 'Erro ao tentar fazer login.';
            if (error instanceof Error) {
                if ((error as any).response) {
                    const apiError = (error as any).response;
                    if (apiError.status === 401) {
                        message = 'Usuário ou senha inválidos.';
                    } else {
                        message = apiError.data.message || message;
                    }
                } else {
                    message = error.message || message;
                }
            }
            setError(message);
        }
    }

    return (
        <>
            <Header />
            <div className='login-container'>
                <div className='logo-container'>
                    <img src={logo} alt="logo" className='logo-img' />
                </div>
                <form className='Login'>
                    <h1>Entrar</h1>
                    <input 
                        id='user' 
                        placeholder="Digite seu username" 
                        type='text' 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input 
                        id='senha' 
                        placeholder="Digite sua senha" 
                        type='password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    {error && <div className="error">{error}</div>}
                    <a href="#">Esqueceu a senha?</a>
                    <button 
                        id="acessar" 
                        type='button' 
                        onClick={handleLogin}
                    >
                        Acessar
                    </button>
                    <h2>ou</h2>
                    <button id="google" type="button">
                        <img src={google} alt="Google" className="logo-google" />Entrar com o Google
                    </button>
                    <p>Ainda não possui uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
