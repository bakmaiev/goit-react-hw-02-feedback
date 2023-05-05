import { Btn, FeedbackListWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackListWrapper className="wrapper">
      {options.map(option => {
        return (
          <Btn
            key={option}
            type="button"
            className="btn"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Btn>
        );
      })}
    </FeedbackListWrapper>
  );
};
