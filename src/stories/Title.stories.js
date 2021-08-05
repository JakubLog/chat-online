import { Title } from 'components/Title';

export default {
  title: 'Components/Title',
  component: Title
};

const template = (args) => <Title {...args}>Tytuł</Title>;

export const Primary = template.bind({});
Primary.args = {};
