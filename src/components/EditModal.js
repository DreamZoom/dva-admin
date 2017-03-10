import { Modal, Button, Icon, Switch } from 'antd';

class EditModal extends React.Component {
	state = {
		visible: false,
	}

	render() {
		const {visible,onOk,onCancel} = this.props;
		return(
			<Modal title="Basic Modal" visible={visible} onOk={onOk} onCancel={onCancel} >
	          <p>some contents...</p>
	          <p>some contents...</p>
	          <p>some contents...</p>
	        </Modal>
		);
	}
}

export default EditModal;