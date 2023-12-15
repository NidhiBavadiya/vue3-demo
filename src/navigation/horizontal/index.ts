import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'User Data',
    to: { name: 'UserData' },
    icon: { icon: 'tabler-user' },
  },
] as HorizontalNavItems
