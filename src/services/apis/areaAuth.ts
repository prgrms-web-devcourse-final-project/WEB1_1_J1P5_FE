import { http } from "services/api";
import type { IAreaAuthPost, IAreaAuthResponse } from "types";

export const registerAreaAuth = async (areaAuthPost: IAreaAuthPost) => {
  return await http.post<IAreaAuthResponse, IAreaAuthPost>(
    "/area-auth",
    areaAuthPost
  );
};

