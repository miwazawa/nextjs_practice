import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name= "miwazawa";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/my_icon.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle} `}></img>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img src="/images/my_icon.jpg" className={`${styles.headerImage} ${utilStyles.borderCircle}`}></img>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}
                
            </header>
            <main>
                { children }
            </main>
            {!home && (
                <div>
                    <Link href="/">ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;
