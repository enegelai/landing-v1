---
title: TicketSpice Bot Test
description: TicketSpice Bot Test
date: 2023-09-29
---

# Please click the lower-right button to start chat.


<ClientOnly>
<chat-bot name="TicketSpice" stream custom-request> </chat-bot>
<script>
    window.addEventListener('load', () => {
        const chatBot = document.querySelector('chat-bot');
        const chatBotState = chatBot.store.state;

        chatBotState.clearMessages();
        const firstMessage = chatBot.addMessage();
        chatBotState.updateMessage(firstMessage, 'Hello! Welcome to TicketSpice. We\'re here to make your event ticketing experience seamless and affordable. How can I assist you today?');

        let text = '';
        chatBot.addEventListener('chatbot:send', (e) => {
            console.log(e.detail);
            const { messages, newMessage } = e.detail;
            if (!messages || !messages[0] || !newMessage) return;
            const lastMessage = messages[messages.length - 1];
            //chatBotState.updateMessage(newMessage, 'This is the test response. This is the test response.This is the test response.This is the test response.');
            chatBot.fetchStream(
                //`http://localhost:3070/api/bot/message`,
                'https://bot-service-poqiruzabq-uc.a.run.app/api/bot/message',
                {
                    method: 'POST',
                    headers: {
                        accept: 'text/event-stream',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'null'
                    },
                    body: JSON.stringify({ text: lastMessage.content }),
                    onmessage: (res) => {
                        const data = chatBot.decodeStreamData(res);
                        try {
                            const resp = JSON.parse(data);
                            text += resp?.result?.text;
                        }catch (e){
                            text += `Error: ${e.message}`;
                        }
                        // add to chatbot message
                        chatBotState.updateMessage(newMessage, text);
                    },
                    onclose: () => {
                        console.log('close', text);
                        text = '';
                    },
                },
            );
        });

        chatBot.addEventListener('chatbot:send:file', (e) => {
            console.log(e.detail);
        });
    });
</script>
</ClientOnly>
