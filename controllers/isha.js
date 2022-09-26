import Isha from "../models/Isha.js";

export const createIsha = async (req, res, next) => {
  const newIsha = new Isha(req.body);

  try {
    const savedIsha = await newIsha.save();
    res.status(200).json(savedIsha);
  } catch (err) {
    next(err);
  }
};

export const updateIsha = async (req, res, next) => {
  try {
    const updatedIsha = await Isha.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedIsha);
  } catch (err) {
    next(err);
  }
};
