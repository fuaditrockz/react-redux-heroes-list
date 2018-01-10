import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'

class HeroesStats extends Component {
  designSkill() {
    let designSkill = 0;
    this.props.heroes.forEach(hero => {
      designSkill += hero.design
    });
    return designSkill
  }
  frontEndSkill() {
    let frontEndSkill = 0;
    this.props.heroes.forEach(hero => {
      frontEndSkill += hero.frontend
    })
    return frontEndSkill
  }
  backEndSkill() {
    let backEndSkill = 0
    this.props.heroes.forEach(hero => {
      backEndSkill += hero.backend
    })
    return backEndSkill
  }
  businessSkill() {
    let businessSkill = 0
    this.props.heroes.forEach(hero => {
      businessSkill += hero.business
    })
    return businessSkill
  }
  render() { 
    return ( 
      <div className="CharacterList">
        <h4 className="title">Heroes Stats</h4>
        <div className="list" style={{color: "#fff"}}>
          <Row>
            <Col span={15}>
              <h4>Overall Design Skill:</h4>
            </Col>
            <Col span={9}>
              <p>{this.designSkill()}</p>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <h4>Overall Frontend Skill:</h4>
            </Col>
            <Col span={9}>
              <p>{this.frontEndSkill()}</p>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <h4>Overall Backend Skill:</h4>
            </Col>
            <Col span={9}>
              <p>{this.backEndSkill()}</p>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <h4>Overall Business Skill:</h4>
            </Col>
            <Col span={9}>
              <p>{this.businessSkill()}</p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}
 
export default connect(mapStateToProps, null)(HeroesStats)