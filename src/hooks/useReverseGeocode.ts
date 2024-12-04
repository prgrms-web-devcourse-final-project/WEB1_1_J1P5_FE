import { useNavermaps } from "react-naver-maps";
import { useCallback } from "react";

export const useReverseGeocode = () => {
  const navermaps = useNavermaps();

  const searchCoordinateToAddress = useCallback(
    (latlng: any): Promise<string> => {
      return new Promise((resolve, reject) => {
        navermaps.Service.reverseGeocode(
          {
            coords: latlng,
            orders: [
              navermaps.Service.OrderType.ADDR,
              navermaps.Service.OrderType.ROAD_ADDR
            ].join(",")
          },
          (status: any, response: any) => {
            if (status === navermaps.Service.Status.ERROR) {
              console.log("response", response);
              reject("Something went wrong!");
              return;
            }

            const items = response.v2.results;

            const address =
              items[0].region.area1.name +
              " " +
              items[0].region.area2.name +
              " " +
              items[0].region.area3.name;

            resolve(address);
          }
        );
      });
    },
    [navermaps]
  );

  const searchAddressToCoordinate = useCallback(
    (address: string): Promise<any> => {
      return new Promise((resolve, reject) => {
        navermaps.Service.geocode(
          {
            query: address
          },
          (status: any, response: any) => {
            if (status === navermaps.Service.Status.ERROR) {
              if (!address) {
                reject("Geocode Error, Please check address");
                return;
              }
              reject("Geocode Error, address:" + address);
              return;
            }

            if (response.v2.meta.totalCount === 0) {
              reject("No result.");
              return;
            }

            const item = response.v2.addresses[0];
            console.log(item);
            resolve(item);
          }
        );
      });
    },
    [navermaps]
  );
  return { searchCoordinateToAddress, searchAddressToCoordinate };
};

