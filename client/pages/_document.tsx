import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (err) {
      console.error(err);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery.min.js"></script>
          <script src="/js/jquery.appear.min.js"></script>
          <script src="/js/jquery.easing.min.js"></script>
          <script src="/js/jquery.cookie.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.validate.min.js"></script>
          <script src="/js/jquery.easypiechart.min.js"></script>
          <script src="/js/jquery.gmap.min.js"></script>
          <script src="/js/lazysizes.min.js"></script>
          <script src="/js/jquery.isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.magnific-popup.min.js"></script>
          <script src="/js/jquery.vide.min.js"></script>
          <script src="/js/vivus.min.js"></script>
          <script src="/js/theme.js"></script>
          <script src="/js/jquery.flipshow.min.js"></script>
          <script src="/js/view.home.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/js/theme.init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
