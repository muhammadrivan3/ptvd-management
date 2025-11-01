/**
 * FormField Molecule Component
 * Combines Label and Input with error handling
 */

import { InputHTMLAttributes } from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import { cn } from "@/lib/utils/cn";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export default function FormField({
  label,
  error,
  helperText,
  required,
  id,
  containerClassName,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("space-y-2", containerClassName)}>
      <Label htmlFor={fieldId} required={required}>
        {label}
      </Label>
      <Input id={fieldId} error={!!error} {...inputProps} />
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
}
