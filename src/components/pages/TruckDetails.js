import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  Typography,
  Divider,
  message,
} from "antd";
import { Grid, Paper } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";

const { Title } = Typography;
const { Option } = Select;

const TruckRegistrationForm = () => {
  const [form] = Form.useForm();
  const [showBankDetails, setShowBankDetails] = useState(false);

  const truckTypes = [
    "Open Truck",
    "Container Truck",
    "Trailer",
    "Refrigerated Truck",
  ];

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    message.success("Truck Registration Details Submitted Successfully!");
  };

  const handleFileUpload = (info) => {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <Paper elevation={3} style={{ padding: 24 }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          Truck Registration Form
        </Title>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* Owner's Basic Information */}
          <Divider orientation="left">Owner's Basic Information</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="ownerFullName"
                label="Owner's Full Name"
                rules={[
                  { required: true, message: "Please enter owner's full name" },
                ]}
              >
                <Input placeholder="Enter Full Name" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="contactNumber"
                label="Contact Number"
                rules={[
                  { required: true, message: "Please enter contact number" },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit number",
                  },
                ]}
              >
                <Input placeholder="Enter 10-digit Mobile Number" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="emailAddress"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter email address" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Enter Email Address" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="governmentIdProof"
                label="Government ID Proof"
                rules={[
                  { required: true, message: "Please enter ID proof details" },
                ]}
              >
                <Input placeholder="Aadhar/PAN Card Number" />
              </Form.Item>
            </Grid>
          </Grid>

          {/* Truck Details */}
          <Divider orientation="left">Truck Details</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="truckRegistrationNumber"
                label="Truck Registration Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter truck registration number",
                  },
                ]}
              >
                <Input placeholder="Enter RC Number" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="truckType"
                label="Truck Type"
                rules={[
                  { required: true, message: "Please select truck type" },
                ]}
              >
                <Select placeholder="Select Truck Type">
                  {truckTypes.map((type) => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="truckDimensions"
                label="Truck Dimensions"
                rules={[
                  { required: true, message: "Please enter truck dimensions" },
                ]}
              >
                <Input placeholder="Length x Width x Height (in feet)" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="payloadCapacity"
                label="Payload Capacity (Tons)"
                rules={[
                  { required: true, message: "Please enter payload capacity" },
                  {
                    type: "number",
                    min: 0,
                    message: "Payload must be a positive number",
                  },
                ]}
              >
                <Input type="number" placeholder="Maximum load capacity" />
              </Form.Item>
            </Grid>
          </Grid>

          {/* Insurance and Legal Documents */}
          <Divider orientation="left">Insurance and Legal Documents</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Form.Item
                name="vehicleInsurance"
                label="Vehicle Insurance Certificate"
                rules={[
                  {
                    required: true,
                    message: "Please upload insurance certificate",
                  },
                ]}
              >
                <Upload
                  name="insuranceDoc"
                  onChange={handleFileUpload}
                  multiple={false}
                >
                  <Button icon={<CloudUploadOutlined />}>
                    Upload Insurance
                  </Button>
                </Upload>
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Form.Item
                name="fitnessCertificate"
                label="Fitness Certificate"
                rules={[
                  {
                    required: true,
                    message: "Please upload fitness certificate",
                  },
                ]}
              >
                <Upload
                  name="fitnessDoc"
                  onChange={handleFileUpload}
                  multiple={false}
                >
                  <Button icon={<CloudUploadOutlined />}>
                    Upload Fitness Doc
                  </Button>
                </Upload>
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Form.Item
                name="roadTaxReceipt"
                label="Road Tax Receipt"
                rules={[
                  { required: true, message: "Please upload road tax receipt" },
                ]}
              >
                <Upload
                  name="roadTaxDoc"
                  onChange={handleFileUpload}
                  multiple={false}
                >
                  <Button icon={<CloudUploadOutlined />}>
                    Upload Road Tax
                  </Button>
                </Upload>
              </Form.Item>
            </Grid>
          </Grid>

          {/* Bank Details */}
          <Divider orientation="left">
            Bank Details
            <Button
              type="link"
              onClick={() => setShowBankDetails(!showBankDetails)}
            >
              {showBankDetails ? "Hide" : "Show"}
            </Button>
          </Divider>
          {showBankDetails && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Form.Item name="bankAccountNumber" label="Bank Account Number">
                  <Input placeholder="Enter Bank Account Number" type="text" />
                </Form.Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Item name="ifscCode" label="IFSC Code">
                  <Input placeholder="Enter IFSC Code" />
                </Form.Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Item name="accountHolderName" label="Account Holder Name">
                  <Input placeholder="Enter Account Holder Name" />
                </Form.Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Item name="bankName" label="Bank Name">
                  <Input placeholder="Enter Bank Name" />
                </Form.Item>
              </Grid>
            </Grid>
          )}

          {/* Additional Information */}
          <Divider orientation="left">Additional Information</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Form.Item name="driverName" label="Driver Name">
                <Input placeholder="Enter Driver Name" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item
                name="driverLicenseNumber"
                label="Driver License Number"
              >
                <Input placeholder="Enter License Number" />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item name="truckImages" label="Truck Images">
                <Upload name="truckPhotos" multiple onChange={handleFileUpload}>
                  <Button icon={<CloudUploadOutlined />}>
                    Upload Truck Images
                  </Button>
                </Upload>
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item name="gpsTracking" label="GPS/Tracking Device">
                <Select placeholder="Select GPS Tracking Status">
                  <Option value="yes">Installed</Option>
                  <Option value="no">Not Installed</Option>
                </Select>
              </Form.Item>
            </Grid>
            <Grid item xs={12}>
              <Form.Item name="serviceAreas" label="Service Areas">
                <Input.TextArea
                  rows={3}
                  placeholder="Enter regions or cities where the truck is available"
                />
              </Form.Item>
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Submit Truck Registration
            </Button>
          </Form.Item>
        </Form>
      </Paper>
    </div>
  );
};

export default TruckRegistrationForm;
