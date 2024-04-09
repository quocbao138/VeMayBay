import { Col, Row } from 'antd';
import FormSearchBooking from './component/FormSearchBooking';

const SearchBookingComponent = () => {
	return (
		<div className='px-16 py-8'>
			<Row justify={'space-between'}>
				<Col span={10}>
					<FormSearchBooking />
				</Col>
				<Col span={12}>
					<img
						src='https://cdn.tgdd.vn/Files/2022/07/05/1444915/thumbnail_1280x720-800-resize.jpeg'
						alt='khuyenmai'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default SearchBookingComponent;
