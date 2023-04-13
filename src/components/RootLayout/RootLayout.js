import MainFooter from "../MainFooter/MainFooter";
import MainNavigation from "../MainNavigation/MainNavigation";

export default function RootLayout({ children }) {
  return (
    <div className="container-fluid p-0">
      <>
        <MainNavigation />
        {children}
        <MainFooter />
      </>
    </div>
  );
}
