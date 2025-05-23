import Head from "next/head";
import NonDashboardNavBar from "@/components/NonDashboardNavBar";
import Landing from "./(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Custom Home Page</title>
        <meta name="description" content="This is the landing page of my awesome site." />
      </Head>

      <div className="nondashboard-layout">
        <NonDashboardNavBar />
        <main className="nondashboard-layout__main">
          <Landing />
        </main>
        <Footer />
      </div>
    </>
  );
}
