import { JSONSchemaType } from "ajv";

type AddAnnouncementSchema = {
  title: string;
  description: string;
  price: number;
  category: string;
};

const addAnnouncementSchema: JSONSchemaType<AddAnnouncementSchema> = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
  },
  required: ["title", "description", "price", "category"],
  additionalProperties: false,
};

export default addAnnouncementSchema;
