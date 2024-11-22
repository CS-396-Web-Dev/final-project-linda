"use client"
import React from 'react';
import UserCard from '@/components/UserCard';

export default function Login() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Select User</h1>
      <div className="space-y-4 w-96">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
