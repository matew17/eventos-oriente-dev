import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "@store/index";

import { onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "@app/firebase/firebase-instance";
import Layout from "@app/components/Layout/Layout";

import "../styles/globals.scss";

function MyApp(props) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
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
            <Layout {...props} />
        </Provider>
    );
}

export default MyApp;
