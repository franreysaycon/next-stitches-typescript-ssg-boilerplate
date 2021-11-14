import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import stitches from "../stitches"

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
  "> *": {
    "+ *": {
      marginLeft: "$rg",
    },
  },
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
          <img src="/nextjs.svg" alt="Next JS Logo" width="100" height="100" />
          <img src="/stitches.svg" alt="Stitches Logo" width="50" />
          <img src="/vercel.svg" alt="Vercel Logo" width="100" height="100" />
        </ImageContainer>
      </Fold>
    </Container>
  )
}

export default Home
