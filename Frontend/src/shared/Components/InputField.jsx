import { useState } from "react";
import Icon from "./Icons";

export default function InputField({
  label,
  type,
  placeholder,
  className,
  labelClassName,
}) {
  const styles = {
    primary:
      "  mt-2 w-full rounded-md border px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 border-gray-300 focus:ring-yellow-200 placeholder:text-gray-400 placeholder:font-semibold",
  };
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      {label && (
        <label className={`${labelClassName} "font-semibold tracking-wide"`}>
          {label}
        </label>
      )}

      <div className="relative ">
        <input
          type={inputType}
          placeholder={placeholder}
          className={` ${type === "password" ? "pr-12" : ""}  ${className} ${styles.primary}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-8 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              name={showPassword ? "RiEyeOffLine" : "RiEyeLine"}
              size={20}
              className=""
            />
          </button>
        )}
      </div>
    </div>
  );
}
