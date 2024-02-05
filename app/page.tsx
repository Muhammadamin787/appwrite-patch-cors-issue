"use client";

import { Button, Input } from "@/components/shadcn/ui";
import { Client, Databases } from "appwrite";
import { DB } from "@/utils/constans";
import { useEffect, useState } from "react";

export default function Home() {

    // States
    const [tasks, setTasks] = useState<Document[]>([]);

    // Effects
    useEffect(() => {
        const client = new Client();
        client.setEndpoint(String(process.env.ENDPOINT));
        client.setProject(String(process.env.PROJECT_ID));
        const databases = new Databases(client);

        async function fetchTasks() {
            try {
                const res = await databases.listDocuments(DB.id, DB.collections.TASKS_ID);
                // @ts-ignore
                setTasks(res.documents);
            } catch (err) {
                console.log(err);
            }
        }

        fetchTasks();
    }, []);

    const firstTaskId = "65c09761d1b39c067aac";


    const onChange = () => {
        const client = new Client();
        client.setEndpoint(String(process.env.ENDPOINT));
        client.setProject(String(process.env.PROJECT_ID));
        const databases = new Databases(client);

        const data = {
            title: "UPDATED"
        };

        // // Create method
        // databases.createDocument(
        //     DB.id,
        //     DB.collections.TASKS_ID,
        //     ID.unique(),
        //     data
        // ).then(res => {
        //     console.log(res);
        // });

        // Update method [the problem]
        databases.updateDocument(
            DB.id,
            DB.collections.TASKS_ID,
            firstTaskId,
            data
        ).then(res => {
            console.log(res);
        });
    };

    return (
        <main className="w-[400px] mx-auto flex flex-col gap-4">

            <div className="border p-4">
                <h3>Tasks:</h3>
                <div>
                    {
                        tasks.map((task: { title: string }, index) => (
                            <div key={index}>{index + 1}) {task.title}</div>
                        ))
                    }
                </div>
            </div>

            <div className="border p-4 flex flex-col gap-2">
                <Input name="title" />
                <Button className="w-full" onClick={onChange}>Change</Button>
            </div>

        </main>
    );
}