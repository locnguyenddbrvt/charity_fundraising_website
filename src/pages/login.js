import AuthLayout from "@/components/AuthLayout/AuthLayout";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        {" "}
        <title>Đăng nhập</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AuthLayout></AuthLayout>
    </>
  );
}
