import Footer from "../../components/Footer/footer";
import Header from '../../components/header/header'
import logo from "../../assets/Logo.svg";
import google from '../../assets/icons8-google-logo.svg'
import "./style.css"

function cadastro() {
    return (

        <><><Header></Header>
            <body>
                <div className="container">
                    <div className="logo">
                        <a href="/Login">
                            <img src={logo} alt="logoCA" />
                        </a>
                        </div>

                    <div className="form">
                        <form>
                            <input id='user' placeholder="Digite seu username" type='text' />
                            <input id='email' placeholder="Digite seu email" type='text' />
                            <input id='senha' placeholder="Digite sua senha" type='text' />
                            <input id='aniversario' placeholder="DD/MM/AAAA" type='text' />
                            <button id="cadastrar" type="button">Cadastrar</button>
                            <h2>ou</h2>
                            <button id="google">
                                <img src={google} alt="google" className="logo-google"/>Entrar com o Google
                            </button>

                            <p>Já possui uma conta? <a href="/Login">Entrar</a></p>

                        </form>

                    </div>

                </div>

                

            </body></><Footer>

            </Footer></>

        

    );

}
export default cadastro;


