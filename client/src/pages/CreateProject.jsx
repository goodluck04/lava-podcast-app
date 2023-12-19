import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styles } from "../components/styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  description: Yup.string().required("Please enter your description"),
});

const CreateProject = ({ setRoute, setOpen, handleClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: { name: "", description: "" },
    validationSchema: schema,
    onSubmit: async ({ name, description }) => {
      setFormData({
        name,
        description,
        userId: currentUser._id,
      });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/createProject", {
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
        setLoading(error.message);
        setLoading(false);
      }
    };

    if (formData.name && formData.description) {
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
        <div className="w-full mt-5 relative mb-1">
          <label htmlFor="description" className={styles.label}>
            Enter description
          </label>
          <input
            type={"text"}
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            placeholder="description"
            className={`${
              errors.description && touched.description && "border-red-500"
            } ${styles.input}`}
          />
        </div>
        {errors.description && touched.description && (
          <span className="text-red-500 pt-2 block">{errors.description}</span>
        )}
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
