import { useEffect, useState } from "react";

export default function MainPage() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    const deleteRecord = async (e) => {
        e.preventDefault();

        console.log(e.target.id);
        const id = e.target.id;

        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (e) {
            console.log(e);
        }
    }

    console.log(records);

    return (
        <section className={"bg-white min-h-screen"}>

            <div class="border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
                    <li class="mr-2">
                        <a href="/" class="inline-flex p-4 text-amber-600 border-b-2 border-amber-600 rounded-t-lg active group" aria-current="page">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  <path d="M4.75 3A1.75 1.75 0 003 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0015.25 5h-3.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H4.75zM3.104 9a1.75 1.75 0 00-1.673 2.265l1.385 4.5A1.75 1.75 0 004.488 17h11.023a1.75 1.75 0 001.673-1.235l1.384-4.5A1.75 1.75 0 0016.896 9H3.104z"></path>
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
                        <a href="/" class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"></path></svg>Chat
                        </a>
                    </li>
                </ul>
            </div>

            <div className={"container px-6 py-10 mx-auto"}>
                <h1 className={"w-[500px] mx-auto text-center text-5xl font-serif font-bold text-orange-600"}>Your Sticky Wall</h1>
                <p className={"w-[1000px] mx-auto text-center mt-4 text-2xl font-serif text-orange-600"}>Paste here all your sticky notes</p>

                <div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
                    {
                        records.map(record => (
                            <div key={record._id}
                                className={"max-w-sm p-6 border border-gray-300 rounded-xl shadow bg-clip-border p-6 bg-amber-200 border-4 border-gray-300 border-solid flex flex-col items-center"}
                            >
                                <h3 className={"mb-2 text-2xl font-bold text-center font-serif font-style: italic text-orange-600"}>{record.titlu}</h3>
                                <p className={"font-serif text-black text-center"}>{record.descriere}</p>

                                <button type="button"

                                    onClick={deleteRecord}
                                    id={record._id}
                                    className="text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-lg text-sm px-3 py-1 text-center mt-5">
                                    Erase
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}