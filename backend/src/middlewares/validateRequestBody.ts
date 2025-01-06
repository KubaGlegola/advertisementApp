import { NextFunction, Request, RequestHandler, Response } from "express";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export function validateRequestBody(schema: any): RequestHandler {
  const validate = ajv.compile(schema);
  return (req: Request, res: Response, next: NextFunction) => {
    const valid = validate(req.body);
    if (!valid) {
      const errors = validate.errors?.map((error) => ({
        message: `${error.instancePath.replace("/", "")} ${error.message}`.trim(),
      }));
      res.status(400).json({ errors });
      return;
    }
    next();
  };
}
