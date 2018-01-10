import React, { Component } from 'react'
import { List, Avatar, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTeamById } from "../actions";

class CharacterList extends Component {
  render() { 
    console.log(this.props) //Just for test.
    return ( 
      <div className="CharacterList">
        <h4 className="title">Telecreative Character</h4>
        <div className="list">
          <List
            itemLayout="horizontal"
            dataSource={this.props.team}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={
                    <div>
                      <Button onClick={() => this.props.addTeamById(item.id)}>+ Add Hero</Button>
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
    team: state.team
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTeamById }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);