import React from "react";

import type { AutoFormInputComponentProps } from "@acme/ui/auto-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@acme/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@acme/ui/select";

import { api } from "~/trpc/react";

const SkillSelect = ({
  field,
  fieldConfigItem,
  //   fieldProps,
  isRequired,
  label,
}: AutoFormInputComponentProps) => {
  const { data } = api.skill.all.useQuery();
  return (
    <FormItem>
      <div className="space-y-1 leading-none">
        <FormLabel>
          {label}
          {isRequired && <span className="text-destructive"> *</span>}
        </FormLabel>
        {fieldConfigItem.description && (
          <FormDescription>{fieldConfigItem.description}</FormDescription>
        )}
      </div>
      <FormControl>
        <Select value={field.value} onValueChange={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {data?.map((skill) => (
              <SelectItem key={skill.id} value={skill.id.toString()}>
                {skill.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  );
};

export default SkillSelect;
