import Asr from "../models/Asr.js";

export const createAsr = async (req, res, next) => {
  const newAsr = new Asr(req.body);

  try {
    const savedAsr = await newAsr.save();
    res.status(200).json(savedAsr);
  } catch (err) {
    next(err);
  }
};

export const updateAsr = async (req, res, next) => {
  try {
    const updatedAsr = await Asr.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAsr);
  } catch (err) {
    next(err);
  }
};
