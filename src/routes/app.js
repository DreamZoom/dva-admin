import React from 'react';
import { connect } from 'dva';
import styles from './app.css';

import SliderMenu from '../components/slider'

import { Table, Popconfirm, Button, Layout,Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function App({children, location, dispatch, routes, params}) {
	return(
		<Layout className={styles.container}>
		  <Sider className={styles.slider}><SliderMenu /></Sider>
		  <Layout>
		  	<Header className={styles.main_header}>管理系统</Header>	
		  	<Breadcrumb className={styles.main_breadcrumb} routes={routes} params={params} />
		    <Content className={styles.main_container}>{children}</Content>
			<Footer className={styles.main_footer}>copyright wxllzf</Footer>
		  </Layout>		  
		</Layout>
	);
}

App.propTypes = {};

export default connect()(App);