import Head from "next/head";

import PageLayout from "@/components/PageLayout/PageLayout";

export default function FinancialReport() {
  return (
    <>
      <Head>
        <title>Báo cáo tài chính</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageLayout title={"Báo cáo tài chính"}></PageLayout>
    </>
  );
}
