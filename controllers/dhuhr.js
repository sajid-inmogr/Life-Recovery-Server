import Dhuhr from "../models/Dhuhr.js";

export const createDhuhr = async (req, res, next) => {
  const newDhuhr = new Dhuhr(req.body);

  try {
    const savedDhuhr = await newDhuhr.save();
    res.status(200).json(savedDhuhr);
  } catch (err) {
    next(err);
  }
};

export const updateDhuhr = async (req, res, next) => {
  try {
    const updatedDhuhr = await Dhuhr.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDhuhr);
  } catch (err) {
    next(err);
  }
};
