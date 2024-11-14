import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import './contact.css';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className='top'>
          <h1>Contato</h1>
          <h2>Entre em contato conosco para dúvidas, sugestões ou colaborações!</h2>
        </div>

        <div className='content'>
          <section>
            <h3>Informações de Contato</h3>
            <p>Estamos à disposição para ouvir suas sugestões, tirar dúvidas ou oferecer ajuda. Não hesite em entrar em contato conosco.</p>
            <ul>
              <li><strong>Email:</strong> ca.cienciacomputacao@uepb.edu.br</li>
              <li><strong>Telefone:</strong> (84) 1234-5678</li>
              <li><strong>Endereço:</strong> Campus VII, UEPB - Rua Universitária, SN, Paraíba</li>
            </ul>
          </section>

          <section>
            <h3>Envie uma Mensagem</h3>
            <form className="contact-form">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Digite seu nome" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Digite seu email" required />

              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Escreva sua mensagem aqui" required></textarea>

              <button type="submit">Enviar Mensagem</button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
