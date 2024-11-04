import { ReactNode } from "react"

export default function Grid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
}
