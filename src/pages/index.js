import Head from "next/head";

import { signInWithPopup, signOut } from "firebase/auth";

import { firebaseAuth, googleProvider } from "@app/firebase/firebase-instance";

export default function Home() {
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const user = await result.user;

            console.log(user);
        } catch (e) {
            console.log(e);
        }
    };

    const logout = async () => {
        try {
            await signOut(firebaseAuth);
            await console.log("Deslogueado");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Head>
                <title>Eventos Oriente.dev</title>
                <meta
                    name="description"
                    content="Aplicacion de eventos de oriente.dev"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Eventos Oriente.dev</h1>

            <button onClick={loginWithGoogle}>Login with Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
