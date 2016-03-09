import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addItem, deleteAll, filterItem } from '../actions/index'


export default class Controls extends React.Component {
  render() {
    const { items, actions } = this.props

    let style = { marginLeft: '15px' }
    return (
      <div>
        <button style={style} onClick={() => actions.addItem()}>add</button>
        <button style={style} onClick={() => actions.deleteAll()}>deleteAll</button>
      </div>
    )
  }
}

// map state of redux store to react component's props
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

// map dispatch method of redux store to react component's props
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ addItem, deleteAll, filterItem }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
