import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control } from "react-hook-form";
import { z } from "zod";

export function AnnouncementPrice({ control }: { control: Control<z.infer<typeof formSchema>> }) {
  return (
    <FormField
      control={control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormControl>
            <Input type="number" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
