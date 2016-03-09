import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteItem } from '../actions/index'


class Item extends React.Component {
  render() {
    const { number, onDeleteItem } = this.props

    return (
      <div>
        <li style={ { display: 'inline-block', marginRight: '15px' } }>{ number }</li>
        <button onClick={ onDeleteItem }>delete</button>
      </div>
    )
  }
}


export default class ItemList extends React.Component {
  render() {
    const { items, actions } = this.props

    let Items = items.map((item) => {
        return (  //do not forget return or you will get nothing!
          <Item key={item.id} number={item.text} onDeleteItem={ () => { actions(item.id) }} />
        )
    })

    return (
      <ul style={{listStyle: 'circle'}}>
        { Items }
      </ul>
    )
  }
}

const getFilteredItem = (items, filterValue) => {
  return filterValue !== '' ? items.filter(item => item.text.toString() === filterValue) : items
}

const mapStateToProps = (state) => {
  return {
    items: getFilteredItem(state.items, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators( deleteItem , dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
