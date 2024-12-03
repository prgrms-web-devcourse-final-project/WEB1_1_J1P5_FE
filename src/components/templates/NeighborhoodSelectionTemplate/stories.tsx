import type { Meta, StoryObj } from "@storybook/react";
import { NeighborhoodSelectionTemplate } from ".";
import { NavermapsProvider } from "react-naver-maps";
import { useNeighborhoodSelection } from "hooks";

const meta: Meta<typeof NeighborhoodSelectionTemplate> = {
  title: "Templates/NeighborhoodSelectionTemplate",
  component: NeighborhoodSelectionTemplate,
  tags: ["autodocs"],
  decorators: (story) => (
    <NavermapsProvider
      ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
      submodules={["geocoder"]}
    >
      <div style={{ maxWidth: "375px", height: "600px", display: "flex" }}>
        {story()}
      </div>
    </NavermapsProvider>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const Component = () => {
      const { neighborhoods, handleGetNearbyNeighborhood } =
        useNeighborhoodSelection();

      const handleGetMyNeighborhood = () => {
        handleGetNearbyNeighborhood();
      };

      const handleNeighborhoodClick = (neighborhood: string) => {
        console.log(neighborhood);
      };

      return (
        <NeighborhoodSelectionTemplate
          neighborhoods={neighborhoods}
          onNeighborhoodClick={handleNeighborhoodClick}
          onFindCurrentLocationClick={handleGetMyNeighborhood}
        />
      );
    };
    return <Component />;
  },
};

export default meta;
