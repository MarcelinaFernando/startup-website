import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import InfoCard from "../components/InfoCard";
// import Footer from "../components/Footer"; // caso tenha um footer

export default function HomePage() {
  return (
    <>
      {/*HEADER*/}
      <Header />

      {/*MAIN CONTENT*/}
      <main>
        {/*HERO SECTION*/}
        <Hero />

        {/*PARTNERS SECTION*/}
        <Partners/>

        {/*INFOR-CARD SECTION*/}
         <InfoCard />

      </main>

      {/*FOOTER*/}
      {/* <Footer /> */}
    </>
  );
}
