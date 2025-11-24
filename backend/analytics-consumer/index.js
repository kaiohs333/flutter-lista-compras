const amqp = require('amqplib');

const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';
const EXCHANGE_NAME = 'shopping_events';
const BINDING_KEY = 'list.checkout.#'; // Escuta por list.checkout.completed, list.checkout.failed, etc.

async function startConsumer() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();

        await channel.assertExchange(EXCHANGE_NAME, 'topic', { durable: true });

        // Criar uma fila temporária e exclusiva para este consumidor
        const q = await channel.assertQueue('', { exclusive: true });
        console.log(`[*] Analytics Consumer aguardando mensagens na fila: ${q.queue}`);

        // Vincular a fila ao exchange com a binding key
        await channel.bindQueue(q.queue, EXCHANGE_NAME, BINDING_KEY);

        channel.consume(q.queue, (msg) => {
            if (msg.content) {
                const messageContent = JSON.parse(msg.content.toString());
                // Simula o cálculo do total gasto e atualização do dashboard
                console.log(
                    `[x] Analytics Service: Calculando total da lista [${messageContent.listId}] e atualizando dashboard para o usuário [${messageContent.userEmail}]`
                );
                // Confirma o recebimento da mensagem
                channel.ack(msg);
            }
        }, {
            noAck: false // Garante que a mensagem só será removida da fila após o ack
        });

    } catch (error) {
        console.error('Erro no Analytics Consumer:', error.message);
        // Tentar reconectar após um tempo
        setTimeout(startConsumer, 5000);
    }
}

startConsumer();
