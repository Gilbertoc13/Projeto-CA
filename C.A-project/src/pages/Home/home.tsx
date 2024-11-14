import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Footer from "../../components/Footer/footer";
import Header from "../../components/header_Home/header_Home";
import { api } from "../../services/api";
import './home.css';

interface Message {
    id: number;
    title: string;
    content: string;
    date: string;
    userId: number;
}

function Home() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newTitle, setNewTitle] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [newDate, setNewDate] = useState<string>(new Date().toISOString().split('T')[0]);  // formato YYYY-MM-DD
    const [date, setDate] = useState<Date | null>(new Date());

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        
        const formattedDate = date ? date.toISOString().split('T')[0] : '';

        
        api.get(`api/msg`, {
            params: { date: formattedDate }  
        })
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar mensagens:", error.response?.data || error.message);
            });
    }, [date]); 

    const adicionarMensagem = (e: React.FormEvent) => {
        e.preventDefault();

        const formattedDate = newDate ? new Date(newDate).toISOString() : new Date().toISOString();

        if (newTitle.trim() !== '' && newMessage.trim() !== '') {
            const token = localStorage.getItem('token');
            if (token) {
                api.post('api/msg', {
                    title: newTitle,
                    content: newMessage,
                    date: formattedDate
                }, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                    .then((response) => {
                        setMessages([...messages, response.data]);
                        setNewTitle('');
                        setNewMessage('');
                        setNewDate(new Date().toISOString().split('T')[0]);  
                    })
                    .catch((error) => {
                        if (error.response) {
                            console.error("Erro ao adicionar mensagem:", error.response.data);
                        } else {
                            console.error("Erro na solicitação:", error.message);
                        }
                    });
            }
        } else {
            console.error("Preencha todos os campos.");
        }
    };

    const removerMensagem = (id: number) => {
        const token = localStorage.getItem('token');
        if (token) {
            api.delete(`api/msg/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
                .then(() => {
                    const updatedMessages = messages.filter((msg) => msg.id !== id);
                    setMessages(updatedMessages);
                })
                .catch((error) => {
                    if (error.response) {
                        console.error("Erro ao remover mensagem:", error.response.data);
                    } else {
                        console.error("Erro na solicitação:", error.message);
                    }
                });
        }
    };

    return (
        <>
            <Header />
            <div className="container-home">
                <div className="Mural">
                    <h1>Avisos</h1>
                    <form onSubmit={adicionarMensagem} className="formulario">
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Digite o título"
                            required
                        />
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Escreva sua mensagem"
                            required
                        />
                        <input
                            type="date"
                            value={newDate}
                            onChange={(e) => setNewDate(e.target.value)}
                            required
                        />
                        <button type="submit">Adicionar</button>
                    </form>

                    <div className="messages-list">
                        {messages.map((msg) => (
                            <div key={msg.id} className="message">
                                <p><strong>Título: {msg.title}</strong></p>
                                <p>Conteúdo: {msg.content}</p>
                                <small>ID do Usuário: {msg.userId}</small>
                                <br />
                                <small>Publicado em: {new Date(msg.date).toLocaleDateString()}</small>
                                <button onClick={() => removerMensagem(msg.id)} className="delete-button">
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="calendario">
                    <aside>
                        <h2>Calendário</h2>
                        <Calendar
                            onChange={(value) => setDate(value as Date)}
                            value={date}
                        />
                        {date && <p>Data Selecionada: {date.toDateString()}</p>}
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
