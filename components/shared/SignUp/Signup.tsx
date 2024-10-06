// components/SignUp.tsx
'use client';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';


import UserRegister from '../UserForm';
import CreatorRegister from '../CreatorForm';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState<"user" | "creator">("user");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "user" | "creator")}>
          <TabsList className="flex justify-center">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="creator">Creator</TabsTrigger>
          </TabsList>

          <TabsContent value="user">
            <UserRegister />
          </TabsContent>

          <TabsContent value="creator">
            <CreatorRegister />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignUp;
