import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";

export function AnnouncementTitle({ control }: { control: Control<z.infer<typeof formSchema>> }) {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Announcement title</FormLabel>
          <FormControl>
            <Input placeholder="eg. Iphone 15 Pro Max 256GB" {...field} />
          </FormControl>
          <FormDescription>Type at least 8 characters</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
