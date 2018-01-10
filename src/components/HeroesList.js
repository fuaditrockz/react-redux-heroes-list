import React, { Component } from 'react'
import { List, Avatar, Button } from 'antd'
import { connect } from 'react-redux'
import { removeTeamById } from '../actions'

class HeroesList extends Component {
  render() { 
    return ( 
      <div className="CharacterList">
        <h4 className="title">Your Heroes List</h4>
        <div className="list">
          <List
            itemLayout="horizontal"
            dataSource={this.props.heroes}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={
                    <div>
                      <Button onClick={() => this.props.removeTeamById(item.id)}>- Remove Hero</Button>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
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

export default connect(mapStateToProps, { removeTeamById })(HeroesList)