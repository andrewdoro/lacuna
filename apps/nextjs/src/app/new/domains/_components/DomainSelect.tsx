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

const DomainSelect = ({
  field,
  fieldConfigItem,
  //   fieldProps,
  isRequired,
  label,
}: AutoFormInputComponentProps) => {
  const domains = api.domain.all.useQuery();
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
            {domains.data?.map((domain) => (
              <SelectItem key={domain.id} value={domain.id.toString()}>
                {domain.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  );
};

export default DomainSelect;
