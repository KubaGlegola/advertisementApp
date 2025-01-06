import announcementSchema from "../models/announcementSchema";
import { v4 as uuid } from "uuid";

async function getAnnouncementById(id: string) {
  return await announcementSchema.findOne({ id });
}

async function getAllAnnouncements(page: number = 1, limit: number = 24) {
  const skip = (page - 1) * limit;
  const totalAnnouncements = await announcementSchema.countDocuments();
  const totalPages = Math.ceil(totalAnnouncements / limit);
  const announcements = await announcementSchema.find().skip(skip).limit(limit);

  return {
    announcements,
    page,
    totalPages,
  };
}

async function getUserAnnouncements(userId: string, page: number = 1, limit: number = 12) {
  const skip = (page - 1) * limit;
  const totalAnnouncements = await announcementSchema.countDocuments({ createdBy: userId });
  const totalPages = Math.ceil(totalAnnouncements / limit);
  const announcements = await announcementSchema
    .find({ createdBy: userId })
    .skip(skip)
    .limit(limit);

  return {
    announcements,
    page,
    totalPages,
  };
}

async function getAnnouncementsByCategory(category: string, page: number = 1, limit: number = 24) {
  const skip = (page - 1) * limit;
  const totalAnnouncements = await announcementSchema.countDocuments({ category });
  const totalPages = Math.ceil(totalAnnouncements / limit);
  const announcements = await announcementSchema.find({ category }).skip(skip).limit(limit);

  return {
    announcements,
    page,
    totalPages,
  };
}

async function createAnnouncement(
  name: string,
  images: string[],
  price: number,
  category: string,
  description: string,
  location: string
) {
  const id = uuid();

  const announcement = new announcementSchema({
    id,
    name,
    images,
    price,
    category,
    description,
    location,
  });

  await announcement.save();
}

async function updateAnnouncement(
  id: string,
  name: string,
  images: string[],
  price: number,
  category: string,
  description: string,
  location: string
) {
  const announcement = await announcementSchema.findOne({ id });

  if (!announcement) {
    throw new Error("Announcement not found");
  }

  announcement.name = name;
  announcement.images = images;
  announcement.price = price;
  announcement.category = category;
  announcement.description = description;
  announcement.location = location;

  await announcement.save();
}

async function removeAnnouncement(id: string) {
  await announcementSchema.deleteOne({ id });
}

export default {
  getAnnouncementById,
  getUserAnnouncements,
  getAnnouncementsByCategory,
  getAllAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  removeAnnouncement,
};
