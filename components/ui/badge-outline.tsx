import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeOutlineVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-transparent text-foreground hover:bg-secondary",
        secondary:
          "border-transparent bg-transparent text-secondary-foreground hover:bg-secondary",
        destructive:
          "border-transparent bg-transparent text-destructive hover:bg-destructive/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeOutlineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeOutlineVariants> {}

function BadgeOutline({
  className,
  variant,
  ...props
}: BadgeOutlineProps) {
  return (
    <div className={cn(badgeOutlineVariants({ variant }), className)} {...props} />
  )
}

export { BadgeOutline, badgeOutlineVariants }