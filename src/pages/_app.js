import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "@store/index";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    const [isAuth, setIsAuth] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user);
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });
    }, [setIsAuth]);

    console.log(isAuth);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
