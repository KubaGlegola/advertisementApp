import { JSONSchemaType } from "ajv";

type loginSchema = {
  email: string;
  password: string;
};

const loginSchema: JSONSchemaType<loginSchema> = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export default loginSchema;
