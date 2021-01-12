import { TextInputProps } from './textinput/TextInput';
import { CheckboxBlockProps } from './checkbox/CheckboxBlock';
import { CheckboxProps } from './checkbox/Checkbox';
import { RadioProps } from './radio/Radio';

export type FormInputProps =
  Partial<
    TextInputProps
    & CheckboxProps
    & RadioProps
>;
