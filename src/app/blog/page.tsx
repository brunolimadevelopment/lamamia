import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next'


// SEO Static metadata
export const metadata: Metadata = {
    title: 'Lamamia Blog',
    description: 'This is Blog Page',
}

// 1º SEARCH DATA
async function getData() {

    try {
        const res = await fetch("https://bloglamamia.vercel.app/api/posts", {
            cache: "no-store",
        });

        if (!res.ok) {
            //console.log(res)
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log('Error fetching data', error)
    }
}

// 2º INSERT DATA INTO THE COMPONENT
const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map((item: any) => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;