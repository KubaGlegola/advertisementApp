import { JSONSchemaType } from "ajv";

type AddAnnouncementSchema = {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  location: string;
};

const addAnnouncementSchema: JSONSchemaType<AddAnnouncementSchema> = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
    condition: { type: "string" },
    location: { type: "string" },
  },
  required: ["title", "description", "price", "category", "condition", "location"],
  additionalProperties: false,
};

export default addAnnouncementSchema;
