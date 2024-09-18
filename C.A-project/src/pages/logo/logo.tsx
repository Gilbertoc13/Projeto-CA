import logo from '../../assets/Logo.svg'
import Footer from '../../components/Footer/footer'
import './logo.css'


function Logo() {

    return (
        <><div className='container'>
            <a href="/login"><img src={logo} alt="logo" />
            </a>

        </div>
        <Footer>

            </Footer></>

        
    )




}
export default Logo;