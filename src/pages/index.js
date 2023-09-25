import Head from "next/head";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GeoJiggle</title>
        <meta name='description' content='GeoJiggle is a user-friendly, decentralized platform for collaborative and interactive mapping experiences.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>GeoJiggle Demo</h1>

          <Map className={styles.homeMap} width='800' height='400' center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  );
}
