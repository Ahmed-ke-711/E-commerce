import * as React from "react"
import { cn } from "cn"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focusing:ring-brand focus:border-brand block w-full p-3 py-2.5 shadow-xs placeholder-text-body",
        className
      )}
      {...props}
    />
  )
}

export { Input }
