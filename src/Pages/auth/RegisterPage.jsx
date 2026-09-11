import { useRegister } from "../../hooks/use-register";
import { regex } from "../../lib/APIs/regex";
import { useState } from "react";

export default function Register() {
  const Register = useRegister();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "male",
    height: 170,
    weight: 70,
    age: 70,
    goal: "Gain weight",
    activityLevel: "level1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register.mutate(formData);
  };
return (
    <>
    <form className="mt-10 justify-center max-w-7xl m-auto" onSubmit={handleSubmit}>
    <div className="mb-5">
        <label
            htmlFor="name"
            className="block mb-2.5 text-sm font-medium text-blue-500"
        >
            name
        </label>
        <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.firstName}
            name="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body"
            placeholder="Enter Your Name"
            required
        />
    </div>
    <div className="mb-5">
        <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-blue-500"
        >
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
            required
        />
    </div>
    <div className="mb-5">
        <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-blue-500"
        >
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
            required
        />
    </div>
    <div className="mb-5">
        <label
            htmlFor="rePassword"
            className="block mb-2.5 text-sm font-medium text-blue-500"
        >
            rePassword
        </label>
        <input
            type="password"
            id="rePassword"
            onChange={handleChange}
            value={formData.rePassword}
            name="rePassword"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body"
            placeholder="Enter Your rePassword"
            required
        />
    </div>
    <div className="mb-5">
        <label
            htmlFor="phone"
            className="block mb-2.5 text-sm font-medium text-blue-500"
        >
            phone
        </label>
        <input
            type="tel"
            id="phone"
            onChange={handleChange}
            value={formData.rePassword}
            name="phone"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body"
            placeholder="Enter Your Phone"
            required
        />
    </div>
    
    <button 
          type="submit" 
          className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          Submit
        </button>
    </form>
    </>
)
}

