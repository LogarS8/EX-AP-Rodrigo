import { SWRConfig } from "swr";

import "/assets/bootstrap/css/bootstrap.min.css";
import "/assets/css/styles.min.css";
import "/styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
