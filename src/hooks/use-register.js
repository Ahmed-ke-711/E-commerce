import { useMutation } from "@tanstack/react-query"
import { register } from "../lib/APIs/auth.api"
import { toast } from "react-hot-toast"

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      console.log("Register Success");
      toast.success("Login successful")
    },
    onError: () => {
      console.log("Register Failed");
      toast.error("Login failed")
    }
  })
}