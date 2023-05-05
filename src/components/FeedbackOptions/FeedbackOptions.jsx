export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="wrapper">
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className="btn"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
