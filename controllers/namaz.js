import Namaz from "../models/Namaz.js";

export const createNamaz = async (req, res, next) => {
  const newNamaz = new Namaz(req.body);

  try {
    const savedNamaz = await newNamaz.save();
    res.status(200).json(savedNamaz);
  } catch (err) {
    next(err);
  }
};

export const updateNamaz = async (req, res, next) => {
  try {
    const updatedNamaz = await Namaz.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNamaz);
  } catch (err) {
    next(err);
  }
};


// Namazs
export const getNamazs = async (req, res, next) => {
  const { email, ...others } = req.query;
  try {
    const namazs = await Namaz.find({
      email,
      ...others
    });
    res.status(200).json(namazs);
  } catch (err) {
    next(err);
  }
};

