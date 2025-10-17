'use client'

import { Toaster as SonnerPrimitive } from 'sonner'
import * as React from 'react'

type ToasterProps = React.ComponentProps<typeof SonnerPrimitive>

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <SonnerPrimitive
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: 'group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border group-[.toaster]:shadow-md',
                    description: 'group-[.toast]:text-muted-foreground',
                    actionButton:
                        'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                    cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
export default Toaster
