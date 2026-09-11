import { useMutation } from "@tanstack/react-query"
import { register } from "../lib/APIs/auth.api"

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      console.log("Register Success");
    },
    onError: () => {
      console.log("Register Failed");
    }
  })
}