import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "form">;
export const InputField = <TFieldValues extends FieldValues = FieldValues>({
  form,
  ...props
}: InputProps & {
  label: string;
  description?: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
}) => {
  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
