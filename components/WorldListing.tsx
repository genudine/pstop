import styles from "../styles/worldlisting.module.css";
import { World } from "./types";

const FactionBox = ({
  factions: { nc, tr, vs },
}: {
  factions: World["factionPopulation"];
}) => {
  return (
    <div className={styles.factionBox} style={{ flexGrow: 1 }}>
      <div className={styles.vs} style={{ flexGrow: vs }}></div>
      <div className={styles.nc} style={{ flexGrow: nc }}></div>
      <div className={styles.tr} style={{ flexGrow: tr }}></div>
    </div>
  );
};

export default function WorldListing({ world }: { world: World }) {
  return (
    <div className={styles.root}>
      <div>
        <span>{world.name}</span> - <span>{world.population} players</span>
        &nbsp;
      </div>
      <FactionBox factions={world.factionPopulation} />
    </div>
  );
}
