export type GraphData = {
  health: Health;
  allWorlds: World[];
};

export type World = {
  name: string;
  population: number;
  factionPopulation: FactionPopulation;
  id: string;
};

export type FactionPopulation = {
  nc: number;
  tr: number;
  vs: number;
  ns: number;
};

export type Health = {
  redis: Status;
  pc: WebsocketStatus;
  ps4us: WebsocketStatus;
  ps4eu: WebsocketStatus;
};

export enum WebsocketStatus {
  Primary = "PRIMARY",
  Backup = "BACKUP",
  Down = "DOWN",
}

export enum Status {
  Up = "UP",
  Down = "DOWN",
}
