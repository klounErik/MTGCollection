import React, { Component } from 'react'
import {setCards} from '../Queries/getCards'
import { Layout, Menu, Icon, BackTop} from 'antd';
import {grn, m19, dom, rix, xln, hou, akh, aer, kld} from '../../Images/svg/svg'
import './Cards.css'

const { Sider } = Layout

export default class Cards extends Component {
    state = {
        set: "grn",
        collapsed: false
    }

    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }

    handleChange = (value) => {
        this.setState({set: value})
      }

  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
      <BackTop />
        <Sider
          theme="light"
          className="sider"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="light" onSelect={(e) => this.setState({set: e.key})} defaultSelectedKeys={['grn']} mode="inline">
            <Menu.Item key="grn">
              <Icon component={grn}/>
              <span>Guilds of Ravnica</span>
            </Menu.Item>
            <Menu.Item key="m19">
            <Icon component={m19}/>
              <span>Core Set 19</span>
            </Menu.Item>
            <Menu.Item key="dom">
              <Icon component={dom} />
              <span>Dominaria</span>
            </Menu.Item>
            <Menu.Item key="rix">
              <Icon component={rix} />
              <span>Rivals of Ixalan</span>
            </Menu.Item>
            <Menu.Item key="xln">
              <Icon component={xln} />
              <span>Ixalan</span>
            </Menu.Item>
            <Menu.Item key="hou">
              <Icon component={hou} />
              <span>Hour of Devastation</span>
            </Menu.Item>
            <Menu.Item key="akh">
              <Icon component={akh} />
              <span>Amonkhet</span>
            </Menu.Item>
            <Menu.Item key="aer">
              <Icon component={aer} />
              <span>Aether Revolt</span>
            </Menu.Item>
            <Menu.Item key="kld">
              <Icon component={kld} />
              <span>Kaladesh</span>
            </Menu.Item>
          </Menu>
        </Sider>
      <div className="Cards">
        {setCards(this.state.set)}
      </div>
      </Layout>
    )
  }
}
