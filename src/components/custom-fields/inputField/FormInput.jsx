import React from "react";
import PropTypes from "prop-types";
import { Input, Typography } from "antd";
import { ErrorMessage } from "formik";

FormInput.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  typeInput: PropTypes.string,
};

FormInput.defaultProps = {
  label: "",
  placeholder: "Vui lòng điền thông tin",
  required: false,
  icon: {},
  typeInput: "text",
};

function FormInput(props) {
  const { field, form, label, placeholder, required, icon, typeInput } = props;
  const { Text } = Typography;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="scope-form">
      <div className="scope-label">
        <span>
          {label}
          {required && <Text type="danger">*</Text>}
        </span>
      </div>
      <div className="scope-main">
        <div className="scope-left">
          <div className="scope-item scope-bg">
            <div
              className={
                Object.keys(icon).length > 0
                  ? "scope-item-input icon"
                  : "scope-item-input"
              }
            >
              {Object.keys(icon).length > 0 && <span>{icon}</span>}
              {typeInput === "string" ? (
                <Input {...field} name={name} placeholder={placeholder} />
              ) : (
                <input
                  {...field}
                  type="text"
                  placeholder={placeholder}
                  name={name}
                  className="form-control form-control-sm"
                />
              )}
            </div>
            {showError && (
              <ErrorMessage
                name={name}
                render={(msg) => <Text type="danger">{msg}</Text>}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
