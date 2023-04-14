import Head from "next/head";

import PageLayout from "@/components/PageLayout/PageLayout";

export default function News() {
  return (
    <>
      <Head>
        <title>Tin tức</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageLayout title={"Tin tức"}></PageLayout>
    </>
  );
}
