import { Routes } from '.'

export type RoutePath = (typeof Routes)[keyof typeof Routes]

export interface Navigation {
  href: RoutePath
  label: string
}
