// components/common/UserCard.tsx
import React from "react"
import { UserProps } from "@/interfaces"

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm">{phone}</p>
      <p className="text-sm">{website}</p>
      <p className="text-sm italic">{company.name}</p>
      <p className="text-xs text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  )
}

export default UserCard
