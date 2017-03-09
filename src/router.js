import React from 'react';
import { Router, Route,IndexRoute } from 'dva/router';
import App from './routes/app';
import products from './routes/products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" breadcrumbName="Home" component={App}>
      	<IndexRoute component={products} />
		    <Route path="/products" breadcrumbName="列表" component={products}/>
		  </Route>
    </Router>
  );
}

export default RouterConfig;
