import { http } from "services/api";
import type {
  IActivityAreaResponse,
  IActivityAreasQuery,
  IActivityAreasSearchQuery,
  IGetActivityAreasResponse,
  IActivityAreaData,
} from "types";

export const getActivityAreas = async (latitude: number, longitude: number) => {
  return http.get<IGetActivityAreasResponse, IActivityAreasQuery>(
    "/activity-areas",
    { latitude, longitude, size: 30 },
  );
};

export const searchActivityAreas = async (keyword: string) => {
  return http.get<IGetActivityAreasResponse, IActivityAreasSearchQuery>(
    "/activity-areas/search",
    { keyword, size: 30 },
  );
};

export const registerActivityArea = async (
  emdId: IActivityAreaData["emdId"],
) => {
  return http.post<IActivityAreaResponse, IActivityAreaData>(
    "/activity-areas",
    { emdId },
  );
};

export const editActivityArea = async (emdId: IActivityAreaData["emdId"]) => {
  return http.patch<IActivityAreaResponse, IActivityAreaData>(
    "/activity-areas",
    { emdId },
  );
};

export const removeActivityArea = async (emdId: IActivityAreaData["emdId"]) => {
  return http.delete<IActivityAreaResponse, IActivityAreaData>(
    "/activity-areas",
    { emdId },
  );
};
