// next js
import dynamic from "next/dynamic";
import Head from "next/head";

// components
const NavigationBar = dynamic(() =>
  import("components/moleculs/NavigationBar")
);
const BannerHomepage = dynamic(() =>
  import("components/moleculs/BannerHomePage")
);
const PopularProducts = dynamic(() =>
  import("components/moleculs/PopularProducts")
);
const OurServices = dynamic(() => import("components/moleculs/OurServices"));
const WhyChooseUs = dynamic(() => import("components/moleculs/WhyChooseUs"));
const PopularHome = dynamic(() => import("components/moleculs/PopularHome"));
const FAQ = dynamic(() => import("components/moleculs/FAQ"));
const Footer = dynamic(() => import("components/moleculs/Footer"));

export default function HomePage() {
  return (
    <>
      <Head>
        {/* --- title --- */}
        <title>Renty</title>
        <link rel="icon" href="/favicon.ico" type="image/icon type" />
        {/* --- end title --- */}
      </Head>

      <div className="max-w-screen-lg m-auto">
        {/* --- navigation bar --- */}
        <NavigationBar />
        {/* --- end navigation bar --- */}

        {/* --- banner home page --- */}
        <BannerHomepage />
        {/* --- end banner home page --- */}
      </div>

      {/* --- popular products --- */}
      <PopularProducts />
      {/* --- end popular products --- */}
      <div className="max-w-screen-lg m-auto">
        {/* --- our service --- */}
        <OurServices />
        {/* --- end our service --- */}

        {/* --- Why Choose Us --- */}
        <WhyChooseUs />
        {/* --- end Why Choose Us --- */}

        {/* --- popular home --- */}
        <PopularHome />
        {/* --- end popular home --- */}

        {/* --- faq --- */}
        <FAQ />
        {/* --- end faq --- */}

        {/* --- footer --- */}
        <Footer />
        {/* --- end footer --- */}
      </div>
    </>
  );
}
