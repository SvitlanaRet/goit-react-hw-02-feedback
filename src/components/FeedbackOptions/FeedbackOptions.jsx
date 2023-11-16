import { OptionsList, OptionsItem, OptionsButton } from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsItem key={option}>
          <OptionsButton
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </OptionsButton>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};
