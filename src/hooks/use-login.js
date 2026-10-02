import { useMutation } from "@tanstack/react-query"
import { login } from "../lib/APIs/auth.api"
import { toast } from "react-hot-toast"


export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("Login Success");
      toast.success("Login successful")
    },
    onError: () => {
      toast.error("Login failed")
    }
  })
}