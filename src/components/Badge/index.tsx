import React from "react"
import styles from "./Badge.module.css"

type Props = {
  children: React.ReactNode
}

export function Badge({ children }: Props) {
  return <div className={styles.badge}>{children}</div>
}
