import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import stitches from "../stitches"
import StitchesImage from "../images/stitches.svg"
import VercelImage from "../images/vercel.svg"
import NextJSImage from "../images/nextjs.svg"

const Container = stitches.styled("main", {
  display: "block",
  minHeight: "100vh",
})

const Fold = stitches.styled("section", {
  display: "flex",
  maxWidth: "1200px",
  padding: "0px $rg",
  width: "100%",
  margin: "0px auto",
  color: "$black",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  fontFamily: "sans-serif",
})

const ImageContainer = stitches.styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>NextJS + Stitches SSG Boilerplate</title>
      </Head>
      <Fold>
        <h1>NextJS + Stitches SSG Boilerplate</h1>
        <ImageContainer>
          <Image
            src={NextJSImage}
            alt="Next JS Logo"
            width="100"
            layout="fixed"
          />
          <Image
            src={StitchesImage}
            alt="Stitches Logo"
            width="100"
            layout="fixed"
          />
          <Image
            src={VercelImage}
            alt="Vercel Logo"
            width="100"
            layout="fixed"
          />
        </ImageContainer>
      </Fold>
    </Container>
  )
}

export default Home
