import Head from 'next/head'
import Header from '../app/components/Header'
import Sidebar from '../app/components/Sidebar'
import styled from 'styled-components'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AppBody>
        <Sidebar />
        {/* <Chat /> */}
      </AppBody>
    </div>
  )
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
