import { OptionsList, OptionsItem, OptionsButton } from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsItem key={option}>
          <OptionsButton name={option} type="button" onClick={leaveFeedback}>
            {option}
          </OptionsButton>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};
