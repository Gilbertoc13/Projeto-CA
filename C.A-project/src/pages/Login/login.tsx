import './style.css';
import GoogleIcon from '../../assets/icons8-google-logo.svg';
import Logo from '../../assets/Logo.svg';
import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import api from '../../services/api'
import { useRef } from 'react';

function Login() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  async function handleLogin() {
    if (inputEmail.current && inputPassword.current) {
      const email = inputEmail.current.value;
      const password = inputPassword.current.value;

      try {
        const response = await api.post('/login', {
          email: email,
          password: password
        });

        console.log('Resposta da API:', response.data);
      } catch (error) {
        console.error('Erro ao tentar fazer login:', error);

      }
    }
  }

  return (
    <>
      <Header />
      <div className='login-container'>
        <div className='logo-'>
          <img src={Logo} alt="logo" className='logo-img' />
        </div>
        <form className='Login'>
          <h1>Entrar</h1>
          <input id='email' placeholder="Digite seu email" type='text' ref={inputEmail} />
          <input id='senha' placeholder="Digite sua senha" type='password' ref={inputPassword} />
          <a href="#">Esqueceu a senha?</a>
          <button id="acessar" type='button' onClick={handleLogin}>Acessar</button>
          <h2>ou</h2>
          <button id="google" type="button">
            <img src={GoogleIcon} alt="Google" className="logo-google" />Entrar com o Google
          </button>
          <p>Ainda não possui uma conta? <a href="/Cadastro">Cadastre-se</a></p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
