import Maghrib from "../models/Maghrib.js";

export const createMaghrib = async (req, res, next) => {
  const newMaghrib = new Maghrib(req.body);

  try {
    const savedMaghrib = await newMaghrib.save();
    res.status(200).json(savedMaghrib);
  } catch (err) {
    next(err);
  }
};

export const updateMaghrib = async (req, res, next) => {
  try {
    const updatedMaghrib = await Maghrib.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMaghrib);
  } catch (err) {
    next(err);
  }
};
