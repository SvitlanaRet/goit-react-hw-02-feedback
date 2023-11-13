import { StatisticsList, StatisticsItem } from './Statistics.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const statisticsArray = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total' },
    { statItem: positivePercentage, title: 'Positive feedback' },
  ];

  return (
    <StatisticsList>
      {statisticsArray.map(({ statItem, title }) => (
        <StatisticsItem key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive Feedback'
                ? statItem
                : `${positivePercentage}`}
            </span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};
