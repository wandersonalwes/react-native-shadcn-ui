import { Text, TouchableOpacity } from 'react-native'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/utils'

const buttonVariants = cva('flex flex-row items-center justify-center rounded-md', {
  variants: {
    variant: {
      default: 'bg-slate-900 hover:bg-slate-700 active:bg-slate-700',
      secondary:
        'bg-white border border-slate-200 hover:bg-slate-100 active:bg-slate-100',
      destructive: 'bg-red-500 hover:bg-red-600 active:bg-red-600',
      ghost: 'bg-transparent hover:bg-slate-100 active:bg-slate-100',
      link: 'bg-transparent',
    },
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-2',
      lg: 'h-12 px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-secondary-foreground',
      destructive: 'text-white',
      ghost: 'text-primary-foreground',
      link: 'text-slate-900 underline',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
}
function Button({
  className,
  variant,
  size,
  children,
  label,
  labelClasses,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'justify-center items-center px-4 rounded-lg',
        buttonVariants({ variant, size, className })
      )}
      activeOpacity={1}
      {...props}
    >
      <Text
        className={cn(
          'leading-6 text-sm font-normal',
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export { Button, buttonVariants, buttonTextVariants }
