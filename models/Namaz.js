import mongoose from "mongoose";
const NamazSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      //   required: true,
      //   unique: true,
    },
    date: {
      type: String,
    },
    fajr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    dhuhr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    asr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    Namaz: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    isha: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Namaz", NamazSchema);
