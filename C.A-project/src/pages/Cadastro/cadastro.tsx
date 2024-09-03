import { useRef } from "react";
import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header'
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg'
import api from '../../services/api'
import "./style.css"

function cadastro() {

    const inputName = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const inputDate = useRef<HTMLInputElement>(null);
    
    async function createUsers() {
        if (inputName.current && inputEmail.current && inputPassword.current && inputDate.current) {
            try {
                const response = await api.post('/Cadastro', {
                    name: inputName.current.value,
                    email: inputEmail.current.value,
                    password: inputPassword.current.value,
                    birthdate: inputDate.current.value
                });
 
                console.log('Usuário cadastrado com sucesso:', response.data);
    
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
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
                                <input id='user' placeholder="Digite seu username" type='text' ref={inputName} />
                                <input id='email' placeholder="Digite seu email" type='text' ref={inputEmail} />
                                <input id='senha' placeholder="Digite sua senha" type='password' ref={inputPassword} />
                                <input id='aniversario' type='date' ref={inputDate} />
                                <button id="cadastrar" type="button" onClick={createUsers}>Cadastrar</button>
                                <h2>ou</h2>
                                <button id="google" type="button">
                                    <img src={google} alt="google" className="logo-google" />Entrar com o Google
                                </button>
                                <p>Já possui uma conta? <a href="/Login">Entrar</a></p>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </>
            );
        }

export default cadastro;


