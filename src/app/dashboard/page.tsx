"use client"
// Adicione essa importação se ainda não a tiver
import { NextPage } from 'next';

import React, { useEffect, FormEvent } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Post {
    _id: string;
    title: string;
    desc: string;
    img: string;
    content: string;
}

interface ApiResponse<T> {
    data: T;
    error: Error | null;
}

const fetcher = async (): Promise<ApiResponse<Post[]>> => {
    const res = await fetch('/api/posts'); // Ajuste conforme necessário
    const data = await res.json();
    return { data, error: null };
};

const Dashboard: NextPage = () => {
    const { data, mutate, error, isValidating } = useSWR<ApiResponse<Post[]>>(
        '/api/posts',
        fetcher
    );
    const { data: sessionData, status: sessionStatus } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (sessionStatus === 'unauthenticated') {
            router?.push('/dashboard/login');
        }
    }, [sessionStatus, router]);

    if (sessionStatus === 'loading') {
        return <p>Loading...</p>;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const title = (form.elements[0] as HTMLInputElement).value;
        const desc = (form.elements[1] as HTMLInputElement).value;
        const img = (form.elements[2] as HTMLInputElement).value;
        const content = (form.elements[3] as HTMLTextAreaElement).value;


        try {
            // Verifica se sessionData e user estão definidos
            if (sessionData?.user) {
                await fetch('/api/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title,
                        desc,
                        img,
                        content,
                        username: sessionData.user.name,
                    }),
                });

                mutate(); // Não é necessário passar a URL novamente
                e.currentTarget.reset(); // reset form after submit
            } else {
                console.error('Error: sessionData or sessionData.user is undefined.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });
            mutate(); // Não é necessário passar a URL novamente
        } catch (err) {
            console.error(err);
        }
    };

    if (sessionStatus === 'authenticated') {
        return (
            <div className={styles.container}>

                {sessionData?.user && (
                    <div className={styles.user}>Welcome {sessionData.user.name}</div>
                )}
                <div className={styles.posts}>
                    {isValidating
                        ? 'loading'
                        : data?.data.map((post) => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imgContainer}>
                                    <Image src={post.img} alt="" width={200} height={100} />
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <span className={styles.delete} onClick={() => handleDelete(post._id)}>
                                    X
                                </span>
                            </div>
                        ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1 className={styles.formTitle}>Add New Post</h1>
                    <input type="text" placeholder="Title" className={styles.input} />
                    <input type="text" placeholder="Desc" className={styles.input} />
                    <input type="text" placeholder="Image" className={styles.input} />
                    <textarea
                        placeholder="Content"
                        className={styles.textArea}
                        cols={30}
                        rows={10}
                    ></textarea>
                    <button type="submit" className={styles.button}>
                        Send
                    </button>
                </form>
            </div>
        );
    }

    return null; // You might want to handle other cases accordingly
};

export default Dashboard;
