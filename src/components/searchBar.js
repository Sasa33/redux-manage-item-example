import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setFilterValue } from '../actions/index'

export default class SearchBar extends React.Component {
  render() {
    const { actions } = this.props

    let input

// let text = this.refs.input.getDOMNode().value.trim();
    return (
      <input type="text" ref={node => { input = node }} placeholder="请输入查找的item" onChange={() => {
        let value = input.value.trim()
        actions.setFilterValue(value)
      }}/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ setFilterValue }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
