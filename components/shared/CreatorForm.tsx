'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'sonner';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

import { useRouter } from 'next/navigation';
import { UserRegisterSchema } from '@/schemas';
import { login, registerUser } from '@/action/login';
import { useTransition } from 'react';
import { Button } from '../ui/button';
import NextForm from './NextForm';
import { useState } from 'react';
import { Input } from 'antd';

const CreatorRegister = () => {
  const [isPending, startTransition] = useTransition();
  const [showNextForm, setShowNextForm] = useState(false);
  
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
        const result1 = await login(values);
        if(result1.success){
            toast.success(result1.message);
            setShowNextForm(true);
        } else {
            toast.error(result1.message);
        }
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <>
      {!showNextForm ? (
        <Form {...userForm}>
          <form onSubmit={userForm.handleSubmit(onUserSubmit)} className="space-y-4">
            <FormField
              control={userForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username*</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your name" {...field} />
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
                    <Input type="email" placeholder="Your email" {...field} />
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
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full font-bold py-3 mt-6" disabled={isPending}>
              {isPending ? "Submitting..." : "Next"}
            </Button>
          </form>
        </Form>
      ) : (
        <NextForm />
      )}
    </>
  );
};

export default CreatorRegister;
