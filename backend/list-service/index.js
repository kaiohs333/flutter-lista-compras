const express = require('express');
const amqp = require('amqplib');

const app = express();
app.use(express.json());

const PORT = 3000;
const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';
const EXCHANGE_NAME = 'shopping_events';
const ROUTING_KEY = 'list.checkout.completed';

let channel;

async function connectRabbitMQ() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        channel = await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME, 'topic', { durable: true });
        console.log('Conectado ao RabbitMQ');
    } catch (error) {
        console.error('Erro ao conectar ao RabbitMQ:', error.message);
        // Tentar reconectar após um tempo
        setTimeout(connectRabbitMQ, 5000);
    }
}

connectRabbitMQ();

app.post('/lists/:id/checkout', async (req, res) => {
    const listId = req.params.id;
    // Em um cenário real, o userEmail viria da autenticação (JWT, sessão, etc.)
    // ou de um serviço de usuário. Para este exemplo, vamos simular.
    const userEmail = req.body.userEmail || 'usuario@example.com'; 

    if (!channel) {
        return res.status(500).send('Serviço não conectado ao RabbitMQ.');
    }

    try {
        const message = {
            listId: listId,
            userEmail: userEmail,
            timestamp: new Date().toISOString()
        };
        
        channel.publish(
            EXCHANGE_NAME,
            ROUTING_KEY,
            Buffer.from(JSON.stringify(message))
        );
        console.log(`Mensagem publicada: ${JSON.stringify(message)} com routing key ${ROUTING_KEY}`);
        res.status(202).send('Checkout da lista aceito para processamento assíncrono.');
    } catch (error) {
        console.error('Erro ao publicar mensagem:', error.message);
        res.status(500).send('Erro interno ao processar checkout.');
    }
});

app.listen(PORT, () => {
    console.log(`List Service rodando na porta ${PORT}`);
});
