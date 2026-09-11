import { useMutation } from "@tanstack/react-query"
import { login } from "../lib/APIs/auth.api"


export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("Login Success");
    },
    onError: () => {
      toast.error("Login Failed")
    }
  })
}