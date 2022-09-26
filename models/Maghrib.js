import mongoose from "mongoose";
const MaghribSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    Jamaat: {
      type: Boolean,
      default: true,
    },
    takbir_e_ula: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Maghrib", MaghribSchema);
