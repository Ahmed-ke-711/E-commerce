import { useLogin } from "../../../src/hooks/use-login";
import { useState } from "react";
import { schema } from "../../schemas/auth.schema";

export default function Login() {
  const login = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData)
    login.mutate(formData);
    if(!result.success) {
      setErrors(result.error.flatten().fieldErrors)
    }
    return
  }; 

  return (
    <>
    <div>
      <form className="mt-10 justify-center max-w-7xl m-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-black">
                email
            </label>

            <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body"
                placeholder="Enter Your Email"
                
            />
            {errors.email && (
              <div className="flex items-center gap-3 rounded-lg border border-blue-300 bg-blue-50 p-4 text-blue-800 mt-7">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">i</div>
                <span>{errors.email[0]}</span>
              </div>
            )}
        </div>

        <div className="mb-5">
            <label
                htmlFor="password"
                className="block mb-2.5 text-sm font-medium text-black">
                password
            </label>

            <input
                type="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
                name="password"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body"
                placeholder="Enter Your Password"
                
            />
            {errors.password && (
              <div className="flex items-center gap-3 rounded-lg border border-blue-300 bg-blue-50 p-4 text-blue-800 mt-7">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">i</div>
              <span>{errors.email[0]}</span>
            </div>
            )}
        </div>

        <button 
          type="submit" 
          className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          Submit
        </button>

      </form>
      </div>
</>
)
}

