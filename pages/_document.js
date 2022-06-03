import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>

              {/* fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Bebas+Neue|Poppins:300,400&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Oswald:wght@400;700&display=swap"
              rel="stylesheet"
            />

            
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
}
  
export default MyDocument