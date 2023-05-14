import React, { useState } from 'react';
import MessageBox from "@/js/components/MessageBox";

function ChatComponent(props) {
    const [chatMessages, setChatMessages] = useState([]);

    const filterChatHistory = chatHistory => {
        let filteredChatHistory = [];
        for (let i = 0; i < chatHistory.length; i++) {
            const currMessage = chatHistory[i];
            const nextMessage = chatHistory[i + 1];

            if (i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role)) {
                filteredChatHistory.push(currMessage);
            }
        }

        return filteredChatHistory;
    }

    const buildResponseMessageObject = response => {
        let responseMessageObject;

        responseMessageObject = response.data.message;

        return responseMessageObject;
    }

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            if (!e.target.value) {
                return;
            }

            const currentMessage = e.target.value;
            e.target.value = '';
            e.target.disabled = true;

            const currentMessageObject = {
                role: 'user',
                content: currentMessage,
            }

            setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
            const currentChatHistory = [...chatMessages, currentMessageObject];
            const filteredChatHistory = filterChatHistory(currentChatHistory);

            try {
                let response = await fetch('/api/answer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: filteredChatHistory,
                        type: 'simple_assistant',
                    }),
                    signal: AbortSignal.timeout(20000),
                });
                response = await response.json();

                e.target.disabled = false;
                e.target.focus();
                console.log(response);

                const responseMessageObject = buildResponseMessageObject(response);
                setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className="bg-white min-h-screen">
            <div class="border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
                    <li class="mr-2">
                        <a href="/" class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group" aria-current="page">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  <path d="M4.75 3A1.75 1.75 0 003 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0015.25 5h-3.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H4.75zM3.104 9a1.75 1.75 0 00-1.673 2.265l1.385 4.5A1.75 1.75 0 004.488 17h11.023a1.75 1.75 0 001.673-1.235l1.384-4.5A1.75 1.75 0 0016.896 9H3.104z"></path>
                            </svg>Notes
                        </a>
                    </li>
                    <li class="mr-2">
                        <a href="/insert" class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path></svg>Create
                        </a>
                    </li>
                    <li class="mr-2">
                        <a href="/chat" class="inline-flex p-4 text-amber-600 border-b-2 border-amber-600 rounded-t-lg active group">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"></path></svg>Chat
                        </a>
                    </li>
                </ul>
            </div>
            <div className={"w-full max-w-[1000px] mx-auto bg-white pt-16"}>
                <div className={"border rounded-lg border-gray-300"}>
                    <MessageBox chatMessages={chatMessages} />
                </div>
                <input
                    id={'chat-input'}
                    type={'text'}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-style: italic rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mt-4"
                    placeholder="Start typing here..."
                    onKeyDown={handleKeyDown}
                />
            </div>
        </section>
    );
}

export default ChatComponent;