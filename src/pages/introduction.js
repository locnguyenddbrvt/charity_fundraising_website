import Head from "next/head";

import MainNavigation from "@/components/MainNavigation/MainNavigation";

export default function Introduction() {
  return (
    <>
      <Head>
        <title>Giới thiệu</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <MainNavigation />
    </>
  );
}
