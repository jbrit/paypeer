import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paypeer | Home</title>
        <meta name="description" content="Paypeer Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>

     <li>
        <Link href="/login">login</Link>
     </li>
      <li>
        <Link href="/register">register</Link>
      </li>
      
      </ul>
    </div>
  );
}
