import Head from "next/head";

import PageLayout from "@/components/PageLayout/PageLayout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Liên hệ</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageLayout title={"Thông tin liên hệ"}></PageLayout>
    </>
  );
}
