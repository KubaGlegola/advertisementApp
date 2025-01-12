"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CategoryType } from "@/types/category";
import { AnnouncementTitle } from "@/components/Announcements/AnnouncementForm/AnnouncementTitle";
import { AnnouncementCategory } from "@/components/Announcements/AnnouncementForm/AnnouncementCategory";
import { AnnouncementImages } from "@/components/Announcements/AnnouncementForm/AnnouncementImages";
import { AnnouncementDescription } from "@/components/Announcements/AnnouncementForm/AnnouncementDescription";
import { AnnouncementPrice } from "@/components/Announcements/AnnouncementForm/AnnouncementPrice";
import { AnnouncementLocation } from "@/components/Announcements/AnnouncementForm/AnnouncementLocation";

export const formSchema = z.object({
  title: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  category: z.string().nonempty({ message: "Category is required." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  price: z
    .number()
    .positive()
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: "Price must have at most two decimal places",
    }),
  location: z.string().nonempty(),
  images: z.array(z.instanceof(File)).optional(),
});

export function AnnouncementForm({ categories }: { categories: CategoryType[] }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8">
        <AnnouncementTitle control={form.control} />
        <AnnouncementCategory form={form} categories={categories} />
        <AnnouncementImages form={form} />
        <AnnouncementDescription control={form.control} />
        <AnnouncementPrice control={form.control} />
        <AnnouncementLocation control={form.control} />

        <Button type="submit">Add announcement</Button>
      </form>
    </Form>
  );
}
