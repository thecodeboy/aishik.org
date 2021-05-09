import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Aishik</strong> a software engineer working at ServiceNow. Welcome to my personal site
          and blog built with NextJS.
        </p>
        <p>Sometimes I surf by <a href="https://twitter.com/thecodeboy">Twitter</a>.</p>
      </section>
    </Layout>
  );
}
