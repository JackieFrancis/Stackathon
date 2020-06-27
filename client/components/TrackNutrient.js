import React, {Component} from 'react'
import {connect} from 'react-redux'
import {trackNutrient} from '../store/user'

export class TrackNutrient extends Component {
  constructor() {
    super()
    this.state = {
      nutrientName: 'calories',
      qty: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.track(this.state)
    this.setState({
      nutrientName: 'calories',
      qty: ''
    })
  }

  render() {
    const {nutrient} = this.props.user
    return (
      <div>
        <h1>Select Nutrient To Track</h1>
        {nutrient ? (
          <h3>
            Nutrient: {nutrient.name} Limit: {this.props.user.macroLimit}{' '}
            {nutrient.measurement}
          </h3>
        ) : (
          <h3>You are not tracking anything</h3>
        )}
        <form onSubmit={this.handleSubmit}>
          <select
            name="nutrientName"
            value={this.state.nutrientName}
            onChange={this.handleChange}
            required
          >
            <option value="calories">Calories</option>
            <option value="cholesterol">Cholesterol</option>
            <option value="saturated fat">Saturated Fat</option>
            <option value="trans fat">Trans Fat</option>
            <option value="sodium">Sodium</option>
            <option value="sugar">Sugar</option>
            <option value="carbohydrates">Carbohydrates</option>
            <option value="protein">Protein</option>
            <option value="total fat">Total Fats</option>
          </select>
          <input
            type="number"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
            placeholder="e.g. 500"
            required
          />
          <button type="submit">Track</button>
        </form>
      </div>
    )
  }
}
const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    track: obj => dispatch(trackNutrient(obj))
  }
}

export default connect(mapState, mapDispatch)(TrackNutrient)
