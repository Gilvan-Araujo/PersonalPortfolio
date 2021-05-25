import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

                    <script dangerouslySetInnerHTML={{ __html: `https://www.pagelr.com/Scripts/pglr-autoimg.js` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}