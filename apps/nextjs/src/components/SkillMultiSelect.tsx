import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import React from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui/form";
import MultiSelect from "@acme/ui/multi-select";

import { api } from "~/trpc/react";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "form">;

const SkillMultiSelect = <TFieldValues extends FieldValues = FieldValues>({
  form,
  ...props
}: InputProps & {
  label: string;
  description?: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
}) => {
  const { data } = api.skill.all.useQuery();
  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <MultiSelect
              values={field.value}
              onValuesChange={field.onChange}
              options={
                data?.map(({ name }) => ({
                  label: name,
                  value: name,
                })) ?? []
              }
            />
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

export default SkillMultiSelect;
