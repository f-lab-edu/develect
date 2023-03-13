export const Routes = {
  ROOT: '/',
  EXPLORE: '/explore',
  AUTH_SIGNIN: '/auth/signin',
} as const

export type RoutePath = (typeof Routes)[keyof typeof Routes]

export interface Navigation {
  href: RoutePath
  label: string
}
