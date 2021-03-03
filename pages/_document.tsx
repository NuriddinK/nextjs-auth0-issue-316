import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document<unknown> {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
