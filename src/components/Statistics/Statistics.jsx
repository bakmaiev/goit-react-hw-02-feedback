export const Statistics = ({ options }) => {
  return (
    <ul className="list">
      {options.map(option => {
        return <li className="item">{option}: </li>;
      })}
    </ul>
  );
};
