"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const formSchema = z.object({ search: z.string().nonempty() });

export function HeroSearch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center bg-white/5 rounded-md  p-3"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="flex items-center space-y-0 text-white md:px-4 px-2 w-full">
              <Search size={24} className="text-primary" />
              <FormControl>
                <Input
                  placeholder="Search by title, keyword..."
                  className="border-0 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
          <Search size={24} />
          <span className="hidden md:inline">Search</span>
        </Button>
      </form>
    </Form>
  );
}
