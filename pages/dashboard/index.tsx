import Head from "next/head";
import Link from "next/link";
import DashboardLayout from "../../components/layout";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Paypeer | Home</title>
        <meta name="description" content="Paypeer Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardLayout/>
    </div>
  );
}
