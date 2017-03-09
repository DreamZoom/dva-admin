import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
	initialState: {
		products: {
			data: [
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 },
				{ name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 },
				{ name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 },
				{ name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 },
				{ name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 }, { name: 'dva', id: 1 },
				{ name: 'dva2', id: 2 }
			],
			metadata: {
				name: "products",
				displayName: "产品列表",
				fields: [{
					name: 'id',
					desc: "编号"
				}, {
					name: 'name',
					desc: "产品名称"
				}]
			},
			actions: [{
				name:"edit",
				text:"编辑",
				api:"edit",
				prompt:""
			},{
				name:"delete",
				text:"删除",
				api:"delete",
				prompt:"是否删除记录"
			}]
		}
	}
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/basemodel'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');