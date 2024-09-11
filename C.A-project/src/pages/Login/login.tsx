import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header';
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg';
import {api} from '../../services/api';
import "./login.css";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post('/api/login', { 
                username,
                password
            });

            const { token } = response.data;

            localStorage.setItem('token', token);

            console.log('Login realizado com sucesso:', response.data);
            alert('Login realizado com sucesso!');
            

        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro ao tentar fazer login:', error.message);
                alert('Erro ao tentar fazer login: ' + error.message);
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro desconhecido ao tentar fazer login.');
            }
        }
    }
    return (
        <>
            <Header />
            <div className='login-container'>
                <div className='logo-'>
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
