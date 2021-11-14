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
          <img
            src={require("../images/nextjs.svg?url")}
            alt="Next JS Logo"
            width="100"
          />
          <img
            src={require("../images/stitches.svg?url")}
            alt="Stitches Logo"
            width="50"
          />
          <img
            src={require("../images/vercel.svg?url")}
            alt="Vercel Logo"
            width="100"
          />
        </ImageContainer>
      </Fold>
    </Container>
  )
}

export default Home
