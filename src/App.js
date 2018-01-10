import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import CharacterList from './components/CharacterList'
import HeroesList from './components/HeroesList'
import HeroesStats from './components/HeroesStats';

const { Header, Footer, Content } = Layout;

export class App extends Component {
  render() { 
    return ( 
      <div>
         <Layout className="LayoutContainer">
            <Header className="Header">
             <h1>TELECREATIVE SQUAD</h1>
            </Header>
            <Content className="Content">
              <Row>
                <Col span={6}>
                  <CharacterList />    
                </Col>
                <Col span={1} />
                <Col span={6}>
                  <HeroesList />
                </Col>
                <Col span={1} />
                <Col span={6}>
                  <HeroesStats />
                </Col>
              </Row>
            </Content>
            <Footer className="Footer">
              Footer
            </Footer>
          </Layout>
      </div>
     )
  }
}
 
export default App;