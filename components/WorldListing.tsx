import styles from "../styles/worldlisting.module.css";
import { World } from "./types";

const FactionBox = ({
  factions: { nc, tr, vs },
}: {
  factions: World["factionPopulation"];
}) => {
  return (
    <>
      <div className={styles.vs} style={{ flexGrow: vs }} />
      <div className={styles.nc} style={{ flexGrow: nc }} />
      <div className={styles.tr} style={{ flexGrow: tr }} />
    </>
  );
};

export default function WorldListing({ world }: { world: World }) {
  return (
    <tr>
      <td className={styles.worldName}>{world.name}</td>
      <td className={styles.population}>{world.population} players</td>
      <td
        className={styles.factionBox}
        style={{ maxWidth: "100vw", width: 1000 }}
      >
        <FactionBox factions={world.factionPopulation} />
        &nbsp;
      </td>
    </tr>
  );
}
