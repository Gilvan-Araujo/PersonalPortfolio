import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

                    <meta charSet='utf-8' />
                    <meta name='description' content='Personal Portfolio with Front End Projects by Gilvan Araújo' />
                    <meta name='keywords' content='Front-end developer portfolio' />

                    <link rel="manifest" href="/manifest.json" />
                    <link rel="mask-icon" href="mask-icon.svg" color="#000000" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" />

                    <meta name="theme-color" content="#317EFB" />

                    <link rel="icon" href="favicon.svg" />
                    <link rel="canonical" href="https://gilvanaraujo.dev/" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}