import Head from "next/head";
import useSWR from "swr";
import Header from "../components/Header";
import { GraphData } from "../components/types";
import WorldListing from "../components/WorldListing";

export default function Pstop() {
  const { data, error } = useSWR<GraphData>(
    process.env.saerroUrl,
    (url: string) =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operationName: null,
          variables: {},
          query: `{
            health {
              redis
              pc
              ps4eu
              ps4us
            }
            allWorlds {
              id
              name
              population
              factionPopulation {
                nc
                tr
                vs
              }
            }
          }`,
        }),
      }).then((r) => r.json().then((r) => r.data)),
    { refreshInterval: 5000 }
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>PlanetSide 2 Live Stats | pstop</title>
      </Head>
      <Header health={data.health} failed={!!error} waiting={!data} />
      <table style={{ position: "absolute", left: 0, right: 0 }}>
        <tbody>
          {data.allWorlds
            .sort((a, b) => (a.population > b.population ? -1 : 1))
            .map((world, idx) => (
              <WorldListing world={world} key={idx} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
