import { ReactNode } from "react"
import { HomePage } from "./HomePage"
import { UserPage } from "./UserPage"

interface Route {
  path: string,
  element: ReactNode,
}

export const routes: Route[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/user/:id',
    element: <UserPage />
  }
]