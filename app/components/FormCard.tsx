"use client";

import type { ReactNode } from "react";

const inputCls = [
  "w-full px-4 py-3 rounded-[var(--radius-sm)] border-0 text-sm outline-none",
  "transition-shadow duration-200 focus:ring-2 focus:ring-[var(--color-accent)]/40",
].join(" ");

const labelCls = "block text-[0.72rem] font-extrabold uppercase tracking-[0.1em] mb-1";

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  color: "var(--color-fg)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
};

interface FieldProps {
  id: string;
  label: string;
  children: ReactNode;
}

export function Field({ id, label, children }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelCls} style={{ color: "var(--color-fg-muted)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
export function FormInput({ id, label, ...props }: InputProps) {
  return (
    <Field id={id} label={label}>
      <input id={id} className={inputCls} style={inputStyle} {...props} />
    </Field>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: string[];
}
export function FormSelect({ id, label, options, ...props }: SelectProps) {
  return (
    <Field id={id} label={label}>
      <select id={id} className={inputCls} style={{ ...inputStyle, appearance: "auto" }} {...props}>
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </Field>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}
export function FormTextarea({ id, label, ...props }: TextareaProps) {
  return (
    <Field id={id} label={label}>
      <textarea id={id} rows={4} className={inputCls} style={inputStyle} {...props} />
    </Field>
  );
}

export { inputCls, inputStyle };
