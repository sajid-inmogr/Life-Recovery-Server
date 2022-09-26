import Fajr from "../models/Fajr.js";

export const createFajr = async (req, res, next) => {
  const newFajr = new Fajr(req.body);

  try {
    const savedFajr = await newFajr.save();
    res.status(200).json(savedFajr);
  } catch (err) {
    next(err);
  }
};

export const updateFajr = async (req, res, next) => {
  try {
    const updatedFajr = await Fajr.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFajr);
  } catch (err) {
    next(err);
  }
};
