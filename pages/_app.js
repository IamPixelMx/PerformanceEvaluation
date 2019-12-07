import App from "next/app";
//import { register, unregister } from 'next-offline/runtime'
import "bulma/css/bulma.min.css";
import "hover.css/css/hover-min.css";

import OfflineSupport from "../components/OfflineSupport";
import Header from "../components/Header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <OfflineSupport />
        <Component {...pageProps} />
        <style jsx global>
          {`
            body {
              font-family: "Varela Round", sans-serif;
            }
            .view {
              height: 100vh;
            }
            .hide {
              display: none;
            }
            .is-purple {
              color: #8378f4;
            }
            .is-bg-purple {
              background-color: #8378f4;
            }
            .is-bg-aqua {
              backcolor: #64f4d9;
            }
            html.has-navbar-fixed-top {
              padding-top: 8rem;
            }
            .button {
              border-width:0.12rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;