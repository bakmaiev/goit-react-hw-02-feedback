import {
  StatisticsItem,
  StatisticsList,
  StatisticsListWrapper,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsListWrapper>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
      </StatisticsListWrapper>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive Feedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};
