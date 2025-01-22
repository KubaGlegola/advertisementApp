import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Control } from "react-hook-form";
import { z } from "zod";

export function AnnouncementCondition({
  control,
}: {
  control: Control<z.infer<typeof formSchema>>;
}) {
  return (
    <FormField
      control={control}
      name="condition"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Condition</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="new" />
                </FormControl>
                <FormLabel className="font-normal">New</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="used" />
                </FormControl>
                <FormLabel className="font-normal">Used</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="refurbished" />
                </FormControl>
                <FormLabel className="font-normal">Refurbished</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="broken" />
                </FormControl>
                <FormLabel className="font-normal">Broken</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
