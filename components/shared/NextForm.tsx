"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { CreatorRegisterSchema } from "@/schemas";
import { z } from "zod";
import { FancySingleSelect } from "./FancySingleSelect";
import { registerCreator } from "@/action/login";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const options = [
  { value: "web-development", label: "Web Development" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "digital-marketing", label: "Digital Marketing" },
  // Add more options as needed
];

const NextForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const extraFieldsForm = useForm({
    resolver: zodResolver(CreatorRegisterSchema),
    defaultValues: {
      title: "",
      description: "",
      website: "",
      social_link: "",
      expertise: null, // Set expertise to null initially
      bank_account: undefined,
      avatar: null,
    },
  });

  const onCreatorSubmit = async (values: z.infer<typeof CreatorRegisterSchema>) => {
    const formData = new FormData();
    
    // Append fields to FormData
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    startTransition(async () => {
      const result = await registerCreator(formData);
      console.log("Result from registerCreator:", result); // Log the result
      if (result.success) {
        router.replace("/");
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };
  
  return (
    <Form {...extraFieldsForm}>
      <form
        onSubmit={extraFieldsForm.handleSubmit(onCreatorSubmit)}
        className="space-y-4"
      >
        {/* Title */}
        <FormField
          control={extraFieldsForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title*</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Title of your service"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={extraFieldsForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your service"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Website */}
        <FormField
          control={extraFieldsForm.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your website (optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Social Link */}
        <FormField
          control={extraFieldsForm.control}
          name="social_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Links</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="e.g., twitter: https://twitter.com/yourprofile"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Expertise */}
        <FormField
          control={extraFieldsForm.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expertise*</FormLabel>
              <FormControl>
                <FancySingleSelect
                  options={options}
                  initialSelected={
                    field.value
                      ? { value: field.value, label: field.value }
                      : null
                  }
                  placeholder="Select your expertise"
                  onChange={(selectedValue) => field.onChange(selectedValue)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bank Account */}
        <FormField
          control={extraFieldsForm.control}
          name="bank_account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Account</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Bank account number"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)} // Convert to number
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Avatar */}
        <FormField
          control={extraFieldsForm.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Avatar*</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files?.[0] || null)} // Correct file handling
                  accept="image/*"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full font-bold py-3 mt-6"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Sign Up as Creator"}
        </Button>
      </form>
    </Form>
  );
};

export default NextForm;
