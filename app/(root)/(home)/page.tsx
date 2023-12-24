import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <h1>Hello!</h1>
    </div>
  )
}