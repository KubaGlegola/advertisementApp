import { JSONSchemaType } from "ajv";

type updateCategorySchema = {
  name: string;
};

const updateCategorySchema: JSONSchemaType<updateCategorySchema> = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2, maxLength: 64 },
  },
  required: ["name"],
  additionalProperties: false,
};

export default updateCategorySchema;
