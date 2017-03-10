import dva from 'dva';

export default {
	namespace: 'products',
	state: {
		data: [],
		metadata: {
			name: "products",
			displayName: "产品列表",
			fields: []
		},
		actions: [],
		show_edit_modal:false
	},
	reducers: {
		'action'(state, { payload }) {
			console.log(payload);
			return {...state};
		},
		'showEditModal'(state, { payload }){
			state.show_edit_modal = true;
			console.log(state);
			return {...state};
		},
		'hideEditModal'(state, { payload }){
			state.show_edit_modal = false;
			return {...state};
		}
	},
};