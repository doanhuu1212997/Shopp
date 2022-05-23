import { ConfigProvider, DatePicker, Typography } from 'antd';
import locale from 'antd/lib/locale/vi_VN';
import { ErrorMessage } from 'formik';
import moment from 'moment';
import 'moment/locale/vi';
import PropTypes from 'prop-types';
import React from 'react';

DateTimeFields.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    format: PropTypes.object,
    picker: PropTypes.string
};

DateTimeFields.defaultProps = {
    label: '',
    placeholder: '',
    required: false,
    classStatus: true,
    format: {
        server: 'YYYY-MM-DD',
        client: 'DD/MM/YYYY'
    },
    picker: ''
};

function DateTimeFields(props) {
    const { field, form, label, placeholder, required, format, picker } = props;
    const { Text } = Typography;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleChange = (e) => {
        const data = moment(e).format(format?.server);
        form.setFieldValue(
            name,
            e === null ? moment(Date.now()).format(format?.server) : data
        );
    };

    return (
        <>
            <div className='scope-form'>
                <div className='scope-label'>
                    <span>{label}{required && <Text type="danger">*</Text>}</span>
                </div>
                <div className='scope-main'>
                    <div className="scope-left">
                        <div className="scope-item scope-bg">
                            <ConfigProvider locale={locale}>
                                <DatePicker
                                    onChange={handleChange}
                                    name={name}
                                    format={format?.client}
                                    value={moment(value)}
                                    placeholder={placeholder}
                                    style={{ width: '100%', padding: '0', border: '0' }}
                                    picker={picker}
                                />
                            </ConfigProvider>
                            {showError && (
                                <ErrorMessage
                                    name={name}
                                    render={(msg) => <Text type='danger'>{msg}</Text>}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateTimeFields;
