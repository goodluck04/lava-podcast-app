import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { styles } from "../components/styles";
import { useNavigate,useParams } from "react-router-dom";
import mongoose from "mongoose";



const schema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  description: Yup.string().required("Please enter decription"),
});

const UploadListModel = ({ setRoute, setOpen, }) => {
  const params = useParams()
  // console.log(params.id);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(params.id);

  const formik = useFormik({
    initialValues: { name: "",description:"" },
    validationSchema: schema,
    onSubmit: async ({ name, description }) => {
      setFormData((prevState) => ({
        ...prevState,
        name,
        description
      }));
      // console.log(name,description);
    },
  });

  useEffect(() => {
    const submitFormData = async () => {
      try {
        // console.log("clicked");
        setLoading(true);
        const res = await fetch(`/api/createUpload/${params.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          toast.error("Something went wrong")
          setError(data.message);
          setLoading(false);
          return;
        }
  
        setLoading(false);
        setError(null);
        setOpen(false);
        toast.success("file uploaded successfully");
        navigate(0)
      } catch (error) {
        toast.error("Something went wrong")
        setLoading(error.message);
        setLoading(false);
      }
    };
  
    if (formData.name && formData.description) {
      submitFormData();
    }
  }, [formData, navigate, params.id]);
  

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Upload file</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className={`${styles.label}`}>
            Enter Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className={`${styles.label}`}>
            Enter Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            
            value={values.description}
            onChange={handleChange}
            placeholder="Enter the description"
            className={`${errors.description && touched.description && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.description && touched.description && (
            <span className="text-red-500 pt-2 block">{errors.description}</span>
          )}
        </div>
        <div className="w-full text-center mt-5">
          <input type="submit" value="Create" className={`${styles.button}`} />
        </div>
      </form>
      <br />
    </div>
  );
};

export default UploadListModel;
