import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// 1º SEARCH DATA
async function getData(id: any) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

// SEO Dynamic metadata
export async function generateMetadata({ params }: any) {

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc
    }
}

// 2º INSERT DATA INTO THE COMPONENT
const BlogPost = async ({ params }: any) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt="Author"
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt=""

                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost