const companyDetails = require('../models/CompanyDetails.js');

exports.create = async (req, res) => {
    const {
      name,
      numbers,
      emails,
      address,
      openingHours,
      logoUrl,
      locationUrl,
      socialMediaLinks,
      supportTime,
      createdBy,
      updatedBy,
    } = req.body;
    try {
      const storeData = await companyDetails.create({
        name,
        numbers,
        emails,
        address,
        openingHours,
        logoUrl,
        locationUrl,
        socialMediaLinks,
        supportTime,
        createdBy,
        updatedBy,
      });
      res.status(201).json({
        message: 'Company details created successfully!',
        storeData,
      });
    } catch (error) {
      console.error('Error in create API:', error); // Log the error to the console
      res.status(500).json({ message: 'Server error', error: error.message }); // Send detailed error message
    }
};

exports.getAllData = async (req , res) => {
  try{
    const getAllData = await companyDetails.find();
    if (!getAllData) {
        return res.status(404).json({ message: "Company Details Not Found" });
    }
    res.status(200).json(getAllData);
    }catch(error){
        res.status(500).json({ message: "Server error", error });
    }
}

exports.getDataById = async (req , res) => {
  const { id } = req.params;
  try{
      const getDataById = await companyDetails.findById(id);
      if (!getDataById) {
          return res.status(404).json({ message: "Company Details Not Found" });
      }
      res.status(200).json({getDataById});
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

exports.update = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters
  const {
    name,
    numbers,
    emails,
    address,
    openingHours,
    logoUrl,
    locationUrl,
    socialMediaLinks,
    supportTime,
    updatedBy,
  } = req.body; // Destructure the fields from the request body

  try {
    // Update the document by ID
    const updateData = await companyDetails.findByIdAndUpdate(
      id, // The ID of the document to update
      {
        name,
        numbers,
        emails,
        address,
        openingHours,
        logoUrl,
        locationUrl,
        socialMediaLinks,
        supportTime,
        updatedBy,
      }, // The fields to update
      { new: true } // Return the updated document
    );
    if (!updateData) {
      return res.status(404).json({ message: "Data not found" }); // Handle case where the document doesn't exist
    }

    res.status(200).json({ message: "Update successful", updateData });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.deleteData = async (req , res) => {
  const { id } = req.params;
  try {
    const removeData = await companyDetails.findByIdAndDelete(id);
    if (!removeData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data removed successfully", _id: id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
