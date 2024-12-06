import { TransactionLocationTemplate } from "components/templates";
import { useSelectedLocationStore } from "stores";
import { useLocationErrorEvent } from "hooks";

export const TransactionLocationPage = () => {
  const coord = useSelectedLocationStore((state) => state.coord);
  const location = useSelectedLocationStore((state) => state.location);
  const locationErrorEvent = useLocationErrorEvent();

  return (
    <TransactionLocationTemplate
      coord={coord!}
      location={location!}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
