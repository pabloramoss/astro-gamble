import Head from "next/head";
import { Inter } from "@next/font/google";
import { Stack } from "@chakra-ui/react";

import View from "@/components/Rocket/View";
import GameView from "@/components/GameView/GameView";
import RocketGame from "@/components/Game/RocketGame";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Stack align="center" background="lightgrey" height="100vh" justify="center" width="100%">
          {/* <GameView /> */}
          <RocketGame />
        </Stack>
      </main>
    </>
  );
}
