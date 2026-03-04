import type { AnyFieldApi } from "@tanstack/react-form";
import React from "react";

type FormInputFieldProps = {
  field: AnyFieldApi;
  type: React.HTMLInputTypeAttribute;
  label: string;
  autoComplete: string;
  autoFocus?: boolean;
};

const FormInputField = ({
  field,
  type,
  label,
  autoComplete,
  autoFocus = false,
}: FormInputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="floating-label-effect w-[50vw]">
        <input
          type={type}
          id={field.name}
          name={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          placeholder=""
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          required
        />
        <label htmlFor={field.name}>
          {label}
          {type !== "tel" && <span className="text-red-500">*</span>}
        </label>
      </div>
      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <em className="text-red-500 text-sm">
          {field.state.meta.errors.map((err) => err?.message).join(", ")}
        </em>
      )}
    </div>
  );
};

export default FormInputField;
