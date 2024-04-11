import type { AutoFormInputComponentProps } from "../types";
import { FormControl, FormItem, FormMessage } from "../../form";
import { Textarea } from "../../textarea";
import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";

export default function AutoFormTextarea({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = _showLabel === undefined ? true : _showLabel;
  return (
    <FormItem>
      {showLabel && <AutoFormLabel label={label} isRequired={isRequired} />}
      <FormControl>
        <Textarea {...fieldPropsWithoutShowLabel} />
      </FormControl>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
      <FormMessage />
    </FormItem>
  );
}
