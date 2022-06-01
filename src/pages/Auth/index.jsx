import FormInput from "components/custom-fields/inputField/FormInput";
import { FastField, Form, Formik } from "formik";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { EMAIL, PASSWORDLogin, NAME } from "constants/validationYup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, fetchGetLogin, fetchResgiter } from "redux/authSlice";
import { useNavigate } from "react-router-dom";
const initialLogin = {
  username: "",
  password: "",
};
const initialRegister = {
  username: "",
  password: "",
  name: "",
};
const validationSchema = Yup.object().shape({
  username: EMAIL,
  password: PASSWORDLogin,
});
export default function Auth() {
  const [dataLogin, setDataLogin] = useState(initialLogin);
  const [dataRes, setDataRes] = useState(initialRegister);
  let dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);

  let navigate = useNavigate();
  const handleSubmit = async (value) => {
    console.log(value);
    const { payload } = await dispatch(fetchGetLogin(value));
    if (payload?.data?.accessToken) {
      navigate("/");
    }
  };
  const handleRegister = async (value) => {
    const { payload } = await dispatch(fetchResgiter(value));
    console.log(payload);
  };

  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);
  return (
    <section className="py-12 bg-gray" style={{}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
              <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">Returning Customer</h6>
                <div className="col-12 col-md">
                  <div className="form-group">
                    <Formik
                      initialValues={dataLogin}
                      enableReinitialize={true}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        values,
                        errors,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                      }) => {
                        return (
                          <Form
                            id="form-login"
                            onSubmit={handleSubmit}
                            onBlur={handleBlur}
                          >
                            <div className="row">
                              <div className="col-12 mb-3">
                                <FastField
                                  component={FormInput}
                                  name="username"
                                  placeholder="Email Address *"
                                />
                              </div>
                              <div className="col-12">
                                <FastField
                                  component={FormInput}
                                  name="password"
                                  placeholder="Password *"
                                  typeInput="password"
                                />
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
                <div className="col-12 col-md">
                  {/* Remember */}
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="loginRemember"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="loginRemember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Link */}
                  <div className="form-group">
                    <a
                      className="font-size-sm text-reset"
                      data-toggle="modal"
                      href="#modalPasswordReset"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  {/* Button */}

                  <Button type="primary" htmlType="submit" form="form-login">
                    Đăng nhập
                  </Button>
                </div>
                {/* Form */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
              <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">New Customer</h6>
                {/* Form */}
                <div className="col-12 col-md">
                  <div className="form-group">
                    <Formik
                      initialValues={dataRes}
                      enableReinitialize={true}
                      validationSchema={validationSchema}
                      onSubmit={handleRegister}
                    >
                      {({
                        values,
                        errors,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                      }) => {
                        return (
                          <Form id="form-res" onBlur={handleBlur}>
                            <div className="row">
                              <div className="col-12 mb-3">
                                <FastField
                                  component={FormInput}
                                  name="username"
                                  placeholder="Email Address *"
                                />
                              </div>
                              <div className="col-12  mb-3">
                                <FastField
                                  component={FormInput}
                                  name="password"
                                  placeholder="Password *"
                                  typeInput="password"
                                />
                              </div>
                              <div className="col-12">
                                <FastField
                                  component={FormInput}
                                  name="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
                <div className="col-12">
                  {/* Button */}

                  <Button type="primary" htmlType="submit" form="form-res">
                    Đăng Ký
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
