export const FeedbackOptions = ({ options }) => {
  return (
    <div className="wrapper">
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className="btn"
            onClick={() => {
              console.log('Done');
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
