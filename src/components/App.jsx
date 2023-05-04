import { FeedbackArea } from './FeedbackArea';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackArea></FeedbackArea>
      <Statistics></Statistics>
    </div>
  );
};
