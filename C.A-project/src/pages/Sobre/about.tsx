import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import './about.css'

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className='top'>
          <h1>About Us</h1>
          <h2>Representando e Fortalecendo a Comunidade Estudantil de Ciência da Computação</h2>
          <h2>[Uepb Campus VII]</h2>
        </div>
        <div className='content'>
          <section>
            <h3>Introdução</h3>
            <p>
              O Centro Acadêmico de Ciência da Computação é a entidade que representa os estudantes do curso, promovendo a integração entre os alunos e defendendo seus interesses. Nosso objetivo é criar um ambiente colaborativo e dinâmico, 
              onde todos possam crescer acadêmica e profissionalmente.
            </p>
          </section>

          <section> 
            <h3>Nossa Historia</h3>
            <p>
              Desde a sua fundação, o centro acadêmico tem sido um pilar fundamental para o desenvolvimento da comunidade estudantil de Ciência da Computação. Ao longo dos anos, organizamos eventos, palestras, e ações que impactaram positivamente a vida de muitos estudantes. 
              Nosso compromisso com a inovação e a inclusão nos guia em todas as nossas atividades.
            </p>
          </section>

          <section> 
            <h3>Nossa Equipe</h3>
            <p>
              Nossa equipe é composta por alunos dedicados que atuam em diversas áreas para garantir que todas as demandas e necessidades dos estudantes sejam atendidas. Conheça os membros que 
              estão à frente de cada iniciativa e saiba como eles contribuem para o sucesso do centro acadêmico.
            </p>
          </section>

          <section> 
            <h3>Nossos valores</h3>
            <p>
              Estamos comprometidos com a excelência, a colaboração, a inovação e a inclusão. Acreditamos que cada aluno tem um papel importante na construção de uma comunidade forte e unida, 
              onde todos têm a oportunidade de crescer e se desenvolver.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
