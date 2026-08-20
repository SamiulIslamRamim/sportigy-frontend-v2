import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/registration')({
  component: RegistrationPage,
})

function RegistrationPage() {
  return <div>Hello "/user/registration"!</div>
}
