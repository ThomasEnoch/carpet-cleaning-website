"use client"

import { type ReactNode, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"

interface ClientWrapperProps {
  children: ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  useEffect(() => {
    console.log("Page mounted")
    return () => {
      console.log("Page unmounted")
    }
  }, [])

  return <ErrorBoundary fallback={<div>Something went wrong</div>}>{children}</ErrorBoundary>
}

