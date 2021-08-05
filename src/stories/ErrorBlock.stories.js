import ErrorBlock from 'components/molecules/ErrorBlock/ErrorBlock';

export default {
  title: 'Components/ErrorBlock',
  component: ErrorBlock
};

const template = (args) => <ErrorBlock message={args.message} />;

export const Short = template.bind({});
Short.args = {
  message: 'Something went wrong.'
};
export const Long = template.bind({});
Long.args = {
  message: 'Authorization went wrong. Please contact with support@google.com, because our system does not work fine.'
};
