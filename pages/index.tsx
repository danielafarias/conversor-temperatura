import Header from '../components/header';
import Converter from '../components/converter';
import Head from 'next/head';

export default function Home() {
  return (
    <> 
      <Head>
        <title>Conversor de Temperatura</title>
      </Head>
      
      <Header />
      <Converter />
    </>
  )
}
