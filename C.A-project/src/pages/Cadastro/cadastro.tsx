import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header'
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg'
import api from '../../services/api'
import "./cadastro.css"

function Cadastro() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');

    async function createUsers() {
        if (!name || !email || !password || !birthdate) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post('/api/cadastro', {
                name,
                email,
                password,
                birthdate,
            });

            console.log('Usuário cadastrado com sucesso:', response.data);
            alert('Usuário cadastrado com sucesso!');

        } catch (error) {
            if (error instanceof Error) {

                if ((error as any).response) {
                    const apiError = (error as any).response; 
    
                    if (apiError.status === 409) {
                        alert('Email ou username já em uso.');
                    } else {
                        alert('Erro ao cadastrar usuário: ' + apiError.data.message);
                    }
                } else {
                    console.error('Erro ao cadastrar usuário:', error.message);
                    alert('Erro ao cadastrar usuário.');
                }
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro desconhecido ao cadastrar usuário.');
            }
        }
    }

    return (
        <>
            <Header />
            <div className="container">
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
                            value={name} 
                            onChange={e => setName(e.target.value)} 
                        />
                        <input 
                            id='email' 
                            placeholder="Digite seu email" 
                            type='text' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <input 
                            id='senha' 
                            placeholder="Digite sua senha" 
                            type='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                        <input 
                            id='aniversario' 
                            type='date' 
                            value={birthdate} 
                            onChange={e => setBirthdate(e.target.value)} 
                        />
                        <button id="cadastrar" type="button" onClick={createUsers}>Cadastrar</button>
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
