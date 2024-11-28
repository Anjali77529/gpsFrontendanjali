const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    numbers: [
      {
        type: String,
        trim: true,
      },
    ],
    emails: [
      {
        type: String,
        trim: true,
        match: [
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],
      },
    ],
    address: {
      type: String,
      required: true,
      trim: true,
    },
    openingHours: {
      type: String,
      trim: true,
    },
    logoUrl: {
      type: String,
      trim: true,
    },
    locationUrl: {
      type: String,
      trim: true,
    },
    socialMediaLinks: [
      {
        platform: {
          type: String,
          required: true,
          trim: true,
        },
        url: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    supportTime: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    updatedBy: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createDate', // Maps `createDate` to `createdAt`
      updatedAt: 'updateDate', // Maps `updateDate` to `updatedAt`
    },
  }
);

module.exports = mongoose.model('CompanyDetails', companyDetailsSchema);
