import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { useApollo } from '../libs/apollo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '윤고딕310';
    src: url('/fonts/윤고딕310.ttf');
  }
  @font-face {
    font-family: '윤고딕320';
    src: url('/fonts/윤고딕320.ttf');
  }
  @font-face {
    font-family: '윤고딕330';
    src: url('/fonts/윤고딕330.ttf');
  }
  @font-face {
    font-family: '윤고딕340';
    src: url('/fonts/윤고딕340.ttf');
  }
  @font-face {
    font-family: '윤고딕350';
    src: url('/fonts/윤고딕350.ttf');
  }
`;

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>The Y 컨설팅 - The Why Consulting</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="keywords"
          content="커뮤니케이션, 교육, 강의, 더와이컨설팅, 더와이, The Y ConsulTing, Y"
        />
        <meta
          name="description"
          content="더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다"
        />
        <meta name="author" content="thewhy.kr" />
        <meta property="og:title" content="더와이컨설팅" />
        <meta
          property="og:description"
          content="더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다"
        />
        <meta property="og:image" content="/img/main-logo.png" />
        <meta
          name="naver-site-verification"
          content="f3f768e9435f138e44540040fb7a46bd8c6fd427"
        />
        <meta
          name="google-site-verification"
          content="m_pjAMeok3jUr2aJg_qWwvbBFERcYCjiuxWm4YE5_V4"
        />

        <link rel="shortcut icon" href="/img/favicon.ico" type="iamge/x-icon" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

        <link
          id="googleFonts"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.compat.css" />
        <link rel="stylesheet" href="/css/simple-line-icons.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />

        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/theme-elements.css" />
        <link rel="stylesheet" href="/css/theme-blog.css" />
        <link rel="stylesheet" href="/css/theme-shop.css" />

        <link rel="stylesheet" href="/css/component.css" />
        <link id="skinCSS" rel="stylesheet" href="/css/default.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <script src="/js/modernizr.min.js"></script>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services"></script>
      </Head>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
