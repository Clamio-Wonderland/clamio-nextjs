// components/UserRegister.tsx
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'sonner';

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { UserRegisterSchema } from '@/schemas';
import { registerUser } from '@/action/login';
import {  useTransition } from 'react';
import { Button } from '../ui/button';

const UserRegister = () => {
    const [isPending, startTransition] = useTransition();
  const userForm = useForm({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onUserSubmit = async (values: z.infer<typeof UserRegisterSchema>) => {
    console.log(values);
    
    startTransition(async () => {
      const result = await registerUser(values);
      if (result.success) {
        router.replace('/');
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Form {...userForm}>
      <form onSubmit={userForm.handleSubmit(onUserSubmit)} className="space-y-4">
        <FormField
          control={userForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username*</FormLabel>
              <FormControl>
                <input type="text" placeholder="Your name" {...field} className="input-class" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={userForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <input type="email" placeholder="Your email" {...field} className="input-class" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={userForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <input type="password" placeholder="Password" {...field} className="input-class" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Button type="submit" className="w-full font-bold py-3 mt-6" disabled={isPending}>
                  {isPending ? "Submitting..." : "Sign Up"}
                </Button>
      </form>
    </Form>
  );
};

export default UserRegister;
