import categorySchema from "../models/categorySchema";
import { slugify } from "../utils/slugify";

async function getAll() {
  return await categorySchema.find();
}

async function getOne(slug: string) {
  return await categorySchema.findOne({ slug });
}

async function create(name: string, image: string) {
  const category = new categorySchema({
    name,
    slug: slugify(name),
    image,
  });

  await category.save();
}

export default {
  getAll,
  getOne,
  create,
};
