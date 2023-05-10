import { Sidebar } from '../components/Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};


export const Standard = {
    args: {
        name: 'Adrian Tam',
      }, 
}
