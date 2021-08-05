import { Input } from 'components/Input';

export default {
  title: 'Components/Input',
  component: Input
};

const template = (args) => <Input {...args} />;

export const Outlined = template.bind({});
Outlined.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'example@email.com',
  variant: 'outlined'
};
export const filled = template.bind({});
filled.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'example@email.com',
  variant: 'filled'
};
export const standard = template.bind({});
standard.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'example@email.com',
  variant: 'standard'
};
