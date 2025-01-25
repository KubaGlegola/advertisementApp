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
import { AnnouncementCondition } from "@/components/Announcements/AnnouncementForm/AnnouncementCondition";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

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
  condition: z.enum(["new", "used", "refurbished", "broken"]),
});

export function AnnouncementForm({ categories }: { categories: CategoryType[] }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("description", values.description);
    formData.append("price", values.price.toString());
    formData.append("location", values.location);
    formData.append("condition", values.condition);
    if (values.images) {
      values.images.forEach((image, index) => {
        formData.append(`images`, image);
      });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/announcement`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      toast({ description: "" });
    }

    const data = await response.json();
    const announcementId = data.id;
    router.push(`/announcement/create/success?announcementId=${announcementId}`);

    //http://localhost:3000/announcement/create/success?announcementId=db4fe531-8e44-4ae1-91a2-8cdf867813c0
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8">
        <AnnouncementTitle control={form.control} />
        <AnnouncementCategory form={form} categories={categories} />
        <AnnouncementCondition control={form.control} />
        <AnnouncementImages form={form} />
        <AnnouncementDescription control={form.control} />
        <AnnouncementPrice control={form.control} />
        <AnnouncementLocation control={form.control} />

        <Button type="submit">Add announcement</Button>
      </form>
    </Form>
  );
}
