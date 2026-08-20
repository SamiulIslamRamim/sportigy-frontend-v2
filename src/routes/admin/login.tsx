import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/login')({
  component: LoginPage,
})

function LoginPage() {
  return <div>Hello "/admin/login"!</div>
}
