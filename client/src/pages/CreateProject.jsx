import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styles } from "../components/styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
});

const CreateProject = ({ setRoute, setOpen, handleClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: { name: ""},
    validationSchema: schema,
    onSubmit: async ({ name }) => {
      setFormData({
        name
      });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/createProject", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          setError(data.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        setError(null);
        navigate("/projects");
        handleClose();
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    // Check if the required fields are present in formData
    if (formData.name) {
      fetchData();
    }
  }, [formData, navigate, handleClose]);
  
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Create a Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className={`${styles.label}`}>
            Enter name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            placeholder="name"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <div className="w-full text-center mt-5">
          <input
            type="submit"
            value="Create"
            className={`${styles.button}`}
          />
        </div>
      </form>
      <br />
    </div>
  );
};

export default CreateProject;
