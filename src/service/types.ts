export interface IUsage {
  id: number;
  title: string;
}

export interface IVehicleItem {
  id: number;
  title: string;
  usages: IUsage[];
}

export type TVehicleApiData = IVehicleItem[];
