import { JSONSchemaType } from "ajv";

type UpdateAnnouncementSchema = {
  title?: string;
  description?: string;
  price?: number;
  category?: string;
  location?: string;
  condition?: string;
};

const updateAnnouncementSchema: JSONSchemaType<UpdateAnnouncementSchema> = {
  type: "object",
  properties: {
    title: { type: "string", nullable: true },
    description: { type: "string", nullable: true },
    price: { type: "number", minimum: 0, nullable: true },
    category: { type: "string", nullable: true },
    location: { type: "string", nullable: true },
    condition: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export default updateAnnouncementSchema;
