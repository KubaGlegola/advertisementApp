import { JSONSchemaType } from "ajv";

type registerSchema = {
  email: string;
  password: string;
  name: string;
};

const registerSchema: JSONSchemaType<registerSchema> = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8 },
    name: { type: "string", minLength: 2, maxLength: 64 },
  },
  required: ["email", "password", "name"],
  additionalProperties: false,
};

export default registerSchema;
