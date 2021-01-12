import { FormInputProps } from './FormInputProps';
import React, { useContext } from 'react';

export const FormInputPropsContext = React.createContext<FormInputProps>({});

export const useFormInputProps = () => useContext(FormInputPropsContext);
