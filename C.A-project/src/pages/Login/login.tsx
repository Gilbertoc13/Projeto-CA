import './style.css';
import GoogleIcon from '../../assets/icons8-google-logo.svg';
import Logo from '../../assets/Logo.svg';
import Header from '../../components/header/header'
import Footer from '../../components/Footer/footer';


function Login() {
  return (
    <><Header>
    </Header>
    <body>
    <div className='login-container'>
        <div className='logo-'>
          <img src={Logo} alt="logo" className='logo-img' />
        </div>
        <form className='Login'>
          <h1>Entrar</h1>
          <input id='email' placeholder="Digite seu email" type='text' />
          <input id='senha' placeholder="Digite sua senha" type='text' />
          <a href="#">Esqueceu a senha?</a>
          <button id="acessar" type='button'>Acessar</button>
          <h2>ou</h2>
          <button id="google" type="button">
            <img src={GoogleIcon} alt="Google" className="logo-google" />Entrar com o Google
          </button>
          <p>Ainda não possui uma conta? <a href="/Cadastro">cadastre-se</a></p>
        </form>
      </div>
      
    </body>
    <Footer>

      </Footer></>
  );
}

export default Login;
