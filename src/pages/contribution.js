import Head from "next/head";

import PageLayout from "@/components/PageLayout/PageLayout";

export default function Contribution() {
  return (
    <>
      <Head>
        <title>Đóng góp</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageLayout title={"Đóng góp"}></PageLayout>
    </>
  );
}
