import { Suspense } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, Redirect, Link, useLocation } from 'react-router-dom';
import routes from './routes';
import styles from './MyLayout.module.css';

const { Header, Content, Footer } = Layout;

export default function MyLayout() {
  const location = useLocation();

  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname.split('/')[1]]}
        >
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="shops">
            <Link to="/shops">Shops</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Bobby Brown</Breadcrumb.Item>
          {location.pathname
            .split('/')
            .map(
              (path, index) =>
                index !== 0 && (
                  <Breadcrumb.Item style={{ textTransform: 'capitalize' }}>
                    {index !== location.pathname.split('/').length - 1 ? (
                      <Link to={`/${path}`}>{path}</Link>
                    ) : (
                      path
                    )}
                  </Breadcrumb.Item>
                )
            )}
        </Breadcrumb>
        <div className={styles.site_layout_content}>
          <Suspense
            fallback={<div style={{ textAlign: 'center' }}>loading...</div>}
          >
            <Switch>
              {routes.map((route) => {
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={() => <route.component />}
                  />
                );
              })}
              <Redirect from="/" to="/home" exact />
              <Route
                path="*"
                render={() => (
                  <div style={{ textAlign: 'center' }}>page not found</div>
                )}
              />
            </Switch>
          </Suspense>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
