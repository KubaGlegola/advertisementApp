"use client";

import { formSchema } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export function AnnouncementImages({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const newImages = [...images, ...files];
    setImages(newImages);
    form.setValue("images", newImages);

    const filePreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(filePreviews);
  }

  function handleRemoveImage(index: number) {
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(newImagePreviews);

    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    form.setValue("images", newImages);
  }

  return (
    <FormField
      control={form.control}
      name="images"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Images</FormLabel>
          <FormControl>
            <Input type="file" multiple accept="image/*" onChange={handleImageChange} ref={inputRef} />
          </FormControl>
          <FormMessage />
          <div className="mt-4 flex flex-wrap gap-4">
            {imagePreviews.map((src, index) => (
              <div key={index} className="relative">
                <Image src={src} alt={`Preview ${index}`} width={128} height={128} className="w-32 h-32 object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute text-xs top-1 right-1 aspect-square w-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </FormItem>
      )}
    />
  );
}
