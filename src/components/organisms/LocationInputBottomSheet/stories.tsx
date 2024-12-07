import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LocationInputBottomSheet } from ".";

const meta: Meta<typeof LocationInputBottomSheet> = {
  title: "Organisms/LocationInputBottomSheet",
  component: LocationInputBottomSheet,
  tags: ["autodocs"],
  decorators: (story) => <div style={{ height: "300px" }}>{story()}</div>,
  render: (args) => {
    const Component = () => {
      const [open, setOpen] = useState(args.open);
      const [place, setPlace] = useState("");
      const handleRegistrationButtonClick = () => {
        console.log(place);
      };
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <LocationInputBottomSheet
            open={open}
            onClose={() => setOpen(false)}
            place={place}
            setPlace={setPlace}
            onRegistrationButtonClick={handleRegistrationButtonClick}
            isError={place === ""}
          />
        </>
      );
    };
    return <Component />;
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true
  }
};

export default meta;
