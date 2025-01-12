"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { CategoryType } from "@/types/category";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";

export function AnnouncementCategory({
  form,
  categories,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  categories: CategoryType[];
}) {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Category</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(" justify-between", !field.value && "text-muted-foreground")}
                >
                  {field.value ? categories.find((category) => category.slug === field.value)?.name : "Select category"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        value={category.slug}
                        key={category.slug}
                        onSelect={() => {
                          form.setValue("category", category.slug);
                        }}
                      >
                        {category.name}
                        <Check className={cn("ml-auto", category.slug === field.value ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
