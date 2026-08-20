import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/forgot-password')({
  component: ForgotPasswordPage,
})

function ForgotPasswordPage() {
  return <div>Hello "/user/forgot-password"!</div>
}
