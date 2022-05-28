import * as Yup from 'yup';

export const STRING = Yup.string();
export const PASSWORDLogin = Yup.string().required("Vui lòng nhập mật khẩu")
export const NUMBER = Yup.string().matches(/^[0-9]+$/, 'Dữ liệu phải là số').required('Vui lòng điền thông tin');

export const EMAIL = Yup.string().email('Email không đúng định dạng').required('Vui lòng nhập Email ');

export const PHONE = Yup.string().matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, 'Số điện thoại không hợp lệ');

export const LINK = Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Vui lòng nhập đúng định dạng đường dẫn!'
).required('Vui lòng điền thông tin');