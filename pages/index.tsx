import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Hero, { HeroComp, WCAComp } from '../components/home/Hero';
import Socials from '../components/home/Socials';
import Layout from '../components/layout/Layout';
import { CURRENT_COMP_REVALIDATE_TIME } from '../utils/constants';
import Sponsors from '../components/home/Sponsors';
import Stats from '../components/home/Stats';
import Divider from '../components/home/Divider';
import Products from '../components/home/Products';
import {
  shopify,
  session,
  simplifyShopifyProduct,
  SimplifiedProduct,
} from '../utils/shopify';
import upcoming_competitions from '../data/upcoming_competitions.json';
import Dict = NodeJS.Dict;

export const getStaticProps: GetStaticProps = async () => {
  const comps: Dict<WCAComp> = upcoming_competitions as Dict<WCAComp>;
  const heroComps: HeroComp[] = Object.keys(comps).map((key: string) => {
    const comp: WCAComp = comps[key] as WCAComp;
    return {
      id: comp.id,
      name: comp.name,
      registration_open: comp.openTime,
      registration_close: comp.closeTime,
      date: comp.date,
      city: comp.cityName,
    };
  });
  let simplifiedProducts: SimplifiedProduct[] = [];
  const shopifyProducts = session && shopify && await shopify.rest.Product.all({ session });
  if (shopifyProducts) {
    simplifiedProducts = shopifyProducts.data
      .filter((product) => product.status === 'active')
      .map(simplifyShopifyProduct);
  }

  return {
    props: {
      comps: heroComps,
      products: simplifiedProducts,
    },
    revalidate: CURRENT_COMP_REVALIDATE_TIME,
  };
};

export default function Home({
  comps,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Associació Catalana de Speedcubing</title>
        <meta name="description" content="speedcubing.cat té com a objectiu fer crèixer la comunitat catalana d'speedcubing proveint informació sobre les competicions oficials de la WCA així com participant en la seva organització" />
      </Head>
      <Hero comps={comps} />
      <Stats />
      <Divider />
      <Sponsors />
      <Socials />
      <Products products={products} />
    </Layout>
  );
}
