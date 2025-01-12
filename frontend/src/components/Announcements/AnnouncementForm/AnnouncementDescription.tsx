import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { z } from "zod";

export function AnnouncementDescription({ control }: { control: Control<z.infer<typeof formSchema>> }) {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Announcement description</FormLabel>
          <FormControl>
            <Textarea className="resize-none h-40" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
