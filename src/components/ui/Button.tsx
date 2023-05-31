import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'relative overflow-hidden px-7 md:px-10 md:text-lg font-light py-2 rounded-lg group',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-gray-50 to-gray-600',
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          <span className="relative z-10 text-gray-900 bg-transparent">{children}</span>
          <div className="absolute inset-0 w-full transition duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-50 to-gray-50"></div>
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 text-gray-900 bg-transparent">{children}</span>
        <div className="absolute inset-0 w-full transition duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-50 to-gray-50"></div>
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }