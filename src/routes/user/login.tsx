import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/login')({
  component: LoginPage,
})

function LoginPage() {
  return <div>Hello "/login"!</div>
}
