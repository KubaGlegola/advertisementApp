import { JSONSchemaType } from "ajv";

type addCategorySchema = {
  name: string;
};

const addCategorySchema: JSONSchemaType<addCategorySchema> = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2, maxLength: 64 },
  },
  required: ["name"],
  additionalProperties: false,
};

export default addCategorySchema;
