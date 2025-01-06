import { Request, Response, NextFunction } from "express";
import announcementService from "../services/announcement.service";
import { decodeToken } from "../utils/decodeToken";

async function getById(req: Request, res: Response) {
  const id = req.params.id;

  if (!id) {
    throw new Error("Id param is required");
  }

  res.json(await announcementService.getAnnouncementById(id));
}

async function getByCategory(req: Request, res: Response) {
  const category = req.params.category;

  if (!category) {
    throw new Error("Category param is required");
  }

  res.json(await announcementService.getAnnouncementsByCategory(category));
}

async function getByUser(req: Request, res: Response) {
  const userId = req.params.userId;

  if (!userId) {
    throw new Error("User ID param is required");
  }

  res.json(await announcementService.getUserAnnouncements(userId));
}

async function getAll(req: Request, res: Response) {
  res.json(await announcementService.getAllAnnouncements());
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const session = req.cookies.session;

    const decodedSession = decodeToken(session);

    if (!decodedSession) {
      throw new Error("Invalid session");
    }

    const { name, price, category, location } = req.body;
    const files = req.files;
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
  getById,
  getByCategory,
  getByUser,
  getAll,
  create,
  update,
  remove,
};
