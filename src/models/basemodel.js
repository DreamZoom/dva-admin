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
		actions: []
	},
	reducers: {
		'action'(state, { payload }) {
			console.log(payload);
			return state;
		}
	},
};