import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { styles } from "../components/styles";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
});

const Login = ({ setRoute, setOpen }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: async ({ email }) => {
      setFormData((prevState) => ({
        ...prevState,
        email,
      }));
    },
  });

  useEffect(() => {
    const submitFormData = async () => {
      try {
        // console.log("clicked");
        setLoading(true);
        const res = await fetch("/api/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          toast.error("something went wrong")
          setError(data.message);
          setLoading(false);
          return;
        }

        setLoading(false);
        setError(null);
        toast.success("successfully login")
        navigate("/create-new-project");
      } catch (error) {
        toast.error("something went wrong")
        setLoading(error.message);
        setLoading(false);
      }
    };

    if (formData.email) {
      submitFormData();
    }
  }, [formData, navigate]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with LAMA</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className={`${styles.label}`}>
            Enter your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="loginmail@gmail.com"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>
        <div className="w-full text-center mt-5">
          <input
            type="submit"
            value="Login"
            className={`${styles.button}`}
          />
        </div>
      </form>
      <br />
    </div>
  );
};

export default Login;
