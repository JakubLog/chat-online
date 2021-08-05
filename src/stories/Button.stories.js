import { Button } from 'components/atoms/Button';

export default {
  title: 'Components/Button',
  component: Button
};

const template = (args) => <Button {...args}>Button placeholder</Button>;

export const Outlined = template.bind({});
Outlined.args = {
  variant: 'outlined',
  isDark: false
};
export const Contained = template.bind({});
Contained.args = {
  variant: 'contained',
  isDark: true
};
export const Text = template.bind({});
