import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header'
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg'
import { api } from '../../services/api';
import "./cadastro.css";

function Cadastro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        general: ''
    });

    const validateFields = () => {
        let isValid = true;
        let errors = {
            username: '',
            email: '',
            password: '',
            general: ''
        };

        if (!username) {
            errors.username = 'O username é obrigatório.';
            isValid = false;
        }

        if (!email) {
            errors.email = 'O email é obrigatório.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'O email deve ser válido.';
            isValid = false;
        }

        if (!password) {
            errors.password = 'A senha é obrigatória.';
            isValid = false;
        } else if (password.length < 6) {
            errors.password = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    async function createUsers() {
        if (!validateFields()) return;

        try {
            const response = await api.post('/api/user/cadastro', {
                username,
                email,
                password,
                birthdate,
            });

            console.log(response.data);
            alert('Usuário cadastrado com sucesso!');

        } catch (error) {
            let message = 'Erro ao cadastrar usuário.';
            if (error instanceof Error) {
                if ((error as any).response) {
                    const apiError = (error as any).response;
                    if (apiError.status === 409) {
                        message = 'Email ou username já em uso.';
                    } else {
                        message = apiError.data.message || message;
                    }
                }
            }

            setErrors(prevErrors => ({ ...prevErrors, general: message }));
        }
    }

    return (
        <>
            <Header />
            <div className="cadastro-container">
                <div className="logo">
                    <a href="/Login">
                        <img src={logo} alt="logoCA" />
                    </a>
                </div>

                <div className="form">
                    <form>
                        <input 
                            id='user' 
                            placeholder="Digite seu username" 
                            type='text' 
                            value={username} 
                            onChange={e => setUsername(e.target.value)} 
                        />
                        {errors.username && <div className="error">{errors.username}</div>}

                        <input 
                            id='email' 
                            placeholder="Digite seu email" 
                            type='text' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />
                        {errors.email && <div className="error">{errors.email}</div>}

                        <input 
                            id='senha' 
                            placeholder="Digite sua senha" 
                            type='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                        {errors.password && <div className="error">{errors.password}</div>}

                        <input 
                            id='aniversario' 
                            type='date' 
                            value={birthdate} 
                            onChange={e => setBirthdate(e.target.value)} 
                        />
                        
                        <button id="cadastrar" type="button" onClick={createUsers}>Cadastrar</button>
                        {errors.general && <div className="error">{errors.general}</div>}
                        
                        <h2>ou</h2>
                        <button id="google" type="button">
                            <img src={google} alt="google" className="logo-google" />Entrar com o Google
                        </button>
                        <p>Já possui uma conta? <a href="/login">Entrar</a></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cadastro;
