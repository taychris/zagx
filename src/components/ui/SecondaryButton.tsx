import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'p-0.5 rounded-lg text-lg font-light',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-gray-50 to-gray-500 group hover:to-gray-50',
      },
      size: {
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          <p className="w-full py-2 text-white duration-300 bg-black rounded-lg px-7 md:px-10 focus:outline-none group-hover:bg-transparent group-hover:text-gray-900">{children}</p>
        </Link>
      )
    }
    return (
        <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <p className="w-full py-2 text-white duration-300 bg-black rounded-lg px-7 md:px-10 focus:outline-none group-hover:bg-transparent group-hover:text-gray-900">{children}</p>
      </button>
    )
  }
)
SecondaryButton.displayName = 'Button'

export { SecondaryButton, buttonVariants }