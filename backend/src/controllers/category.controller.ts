import { Request, Response, NextFunction } from "express";
import categoryService from "../services/category.service";
import path from "path";

async function getAll(req: Request, res: Response) {
  res.json(await categoryService.getAll());
}

async function getOne(req: Request, res: Response) {
  res.json(await categoryService.getOne(req.params.slug));
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name } = req.body;
    const file = req.file;
    if (!file) {
      throw new Error("File is required");
    }

    const image = path.join("uploads", path.basename(file.path));

    res.json(await categoryService.create(name, image));
  } catch (err) {
    console.log("Error in category create controller", err);
    next(err);
  }
}

async function update(req: Request, res: Response) {
  res.send("Hello from category route");
}

async function remove(req: Request, res: Response) {
  res.send("Hello from category route");
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
