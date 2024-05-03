import {Layout} from "antd"
const { Header, Footer, Content } = Layout;

import React from 'react'

function mainLayout() {
   
  return (
    <div>
      <Layout style={{height:"100%"}} >
      <Header style={{background:"grey"}} >Header</Header>
      <Content >Content</Content>
      <Footer style={{background:"grey"}} >Footer</Footer>
    </Layout>
    </div>
  )
}

export default mainLayout
