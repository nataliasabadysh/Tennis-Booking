import React, { Component } from 'react';
import TimeRangePicker from 'react-timerange-picker';

 
class AddBooking extends Component {
    state = {
        time: ['10:00', '11:00'],
      }
 
onChange = time => this.setState({ time })

 
  render() {
      const { handleChange,handlePostItem} = this.props;
    return (
      <div>
        <form onSubmit={handlePostItem}>
            <input
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                placeholder="Name"
                required
            />
            <input
                onChange={handleChange}
                value={lastName}
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
            />
        </form>
        <TimeRangePicker
          onChange={this.onChange}
          value={this.state.time}
        />
      </div>
    );
  }
}


export default AddBooking;

