import InputField from "../../../shared/Components/InputField";
import Button from "../../../shared/Components/Button";

export default function LoginForm() {
  return (
    <div className="w-full max-w-107.5 rounded-md border border-gray-300 bg-white p-8 shadow-sm h-fit  
    max-sm:w-[90%]">

      {/* Heading */}
      <h1 className="text-[1.7rem] font-bold text-gray-900 tracking-wider
      max-sm:text-xl">
        Sign in to your account
      </h1>

      <p className="mt-2 text-[15px] text-gray-500 font-semibold max-sm:text-xs">
        Enter your credentials to access the system
      </p>

      {/* Form */}
      <form className="mt-8 space-y-6 w-full">

        <InputField
          label="Email Address"
          type="email"
          placeholder="john.doe@company.com"
          labelClassName= "max-sm:text-sm"
        />

        
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            labelClassName= "max-sm:text-sm"
          />

          <div className="mt-2 flex justify-end">
            <p className="text-sm font-semibold text-gray-800 underline hover:text-black"
            >
              Forgot password?
            </p>

          </div>
        

        <Button
          type="submit"
          text="Sign In"
          className="w-full px-4 py-3 font-bold"
        />
      </form>

    </div>
  );
}