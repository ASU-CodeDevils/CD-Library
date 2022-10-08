import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

export default {
    title: "Elements/Button",
    component: Button,
    argTypes: {
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "Primary",
};
