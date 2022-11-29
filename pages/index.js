import Head from "next/head";
import Header from "../app/components/Header";
import Sidebar from "../app/components/Sidebar";
import styled from "styled-components";
import Chat from "../app/components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/utils/firebase";
import Login from "../app/components/Login";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Slack Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
          </AppBody>
        </>
      )}
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
