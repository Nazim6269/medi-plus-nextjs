'use client';

import { E164Number } from 'libphonenumber-js/core';
import Image from 'next/image';
import { Control } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FormFieldType } from './forms/PatientForm';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

//custom props are defined here
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  iconSrc?: string;
  iconAlt?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: string;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

//reusable input field
const RenderedField = ({
  field,
  props,
}: {
  field: any;
  props: CustomProps;
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border-dark-500 border bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              width={24}
              height={24}
              alt={props.iconAlt || 'Icon'}
            />
          )}

          <FormControl>
            <Input
              {...field}
              placeholder={props.placeholder}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="BD"
            placeholder={props.placeholder}
            international
            value={field.value as E164Number | undefined}
            className="input-phone"
            onChange={field.onChange}
          />
        </FormControl>
      );
    default:
      break;
  }
};

//custom field component
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, label, name } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          {/* custom input */}
          <RenderedField field={field} props={props} />

          {/* message */}
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
