// components/FormInput.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

const FormInput = ({
  id,
  label,
  placeholder,
  register,
  error,
  type = "text",
}: FormInputProps) => {
  return (
    <div className="grid gap-1">
      <Label htmlFor={id} className="text-accent">
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        {...register}
        className="border border-gray-300 rounded-md p-2"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
