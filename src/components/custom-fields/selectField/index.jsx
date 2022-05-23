import { Select, Typography } from 'antd';
import { axiosClient } from 'api/AxiosClient';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

SelectFields.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
};

SelectFields.defaultProps = {
	label: '',
};

function SelectFields(props) {
	const { field, label, form, required, typeData, placeholder, multiple } = props;
	const { name, value } = field;
	const { errors, touched } = form;
	const { Text } = Typography;
	const showError = errors[name] && touched[name];

	const { Option } = Select;

	const [options, setOptions] = useState([]);
	const [dataValue, setDataValue] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		let arr = [];
		if (value && value.length > 0 && typeof value !== 'string') {
			value.forEach(r => arr.push(String(r)));
			setDataValue(arr)
		} else {
			setDataValue(value ? String(value) : [])
		};
	}, [value]);

	const getData = async () => {
		let option = [];
		let res = null;
		let result = null;
		try {
			switch (typeData) {
				case 'gender':
					result = await axiosClient.get('/user/gender');
					res = [];
					for(let [key, value] of Object.entries(result.data.data)){
						res.push({
							id: key,
							name: value
						})
					}
					break;
				case 'relationship':
					res = [
						{ id: 1, name: 'Độc thân' },
						{ id: 2, name: 'Đã kết hôn' }
					]
					break;
				case 'country':
					res = [
						{ id: 'VN', name: 'Việt Nam' },
						{ id: 'JP', name: 'Nhật Bản' },
						{ id: 'CA', name: 'Canada' }
					]
					break;

				default:
					break;
			};
			let data = res?.data ? res?.data?.data : res;
			data && data.length > 0 && data.forEach((value) => {
				option.push(<Option key={value?.id}>{value?.name}</Option>);
			});
			setOptions(option);
		} catch (err) {
			console.log({ error: err })
		}
	}

	const handleChange = (data) => {
		form.setFieldValue(name, data);
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
							<Select
								style={{ width: '100%' }}
								onChange={handleChange}
								value={dataValue}
								placeholder={placeholder}
								mode={multiple ? 'multiple' : ''}
							>
								{options}
							</Select>
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

export default SelectFields;
