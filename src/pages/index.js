import Head from "next/head";
import { useState } from "react";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";

import { useComposeDB } from '../hooks/useComposeDB'

const DEFAULT_CENTER = [19.413894958323255, -99.17421357377354];
const DESCRIPTION = 'GeoJiggle is a user-friendly, decentralized platform for collaborative and interactive mapping experiences.'


export default function Home() {

  const { compose, isAuthenticated } = useComposeDB()

  return (
      <Layout>
        <Head>
          <title>GeoJiggle</title>
          <meta name='description' content={DESCRIPTION} />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Section>
          <Container>
            <Map className={styles.homeMap} width='800' height='600' center={DEFAULT_CENTER} zoom={15}>
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={DEFAULT_CENTER}>
                    <Popup>
                      This is where GeoJiggle was born.
                      <br /> Date: <strong>September 25, 2023</strong>.
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
