import { LuUser2 } from 'react-icons/lu'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image' // Import the Image component

async function UserIcon() {
  const user = await currentUser()
  const profileImage = user?.imageUrl

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="User profile picture" // Add alt text for accessibility
        width={24} // Specify width
        height={24} // Specify height
        className="rounded-full object-cover" // Apply styles
      />
    )
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
}

export default UserIcon
