import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  }

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
        />
      )
    }
    return (
      <TimerForm
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        isRunning={this.props.isRunning}
      />

    )
  }
}