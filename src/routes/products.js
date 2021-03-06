import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Layout, Modal, Icon, Switch } from 'antd';
import EditModal from '../components/EditModal'

const { Header, Content, Footer, Sider } = Layout;

const Products = ({ dispatch, products }) => {

	let metadata = products.metadata;
	let columns = [];
	

	for(var field of metadata.fields) {
		columns.push({
			title: field.desc || field.name,
			dataIndex: field.name
		});
	}
	console.log(columns);

	let actions = products.actions;
	columns.push({
		title: '操作',
		render: (text, record) => {
			return actions.map(function(action, index) {
				if(action.prompt) {
					return(
						<Popconfirm key={index}  title="是否删除记录?" onConfirm={() => dispatch({type: 'products/action',payload: record})}>
				          <Button>{action.text}</Button>
				        </Popconfirm>
					);
				} else {
					return(
						<Button key={index} onClick={()=>dispatch({type: 'products/showEditModal',payload: record})}>{action.text}</Button>
					);
				}
			});

		},
	});


	return(
		<div>
	      <h2>{metadata.displayName||metadata.name}</h2>
	      <Table dataSource={products.data} columns={columns} />
	      <EditModal visible={products.show_edit_modal} onCancel={()=>dispatch({type: 'products/hideEditModal',payload: 0})} />
	    </div>
	);
};

// export default Products;
export default connect(({ products }) => ({ products }))(Products);