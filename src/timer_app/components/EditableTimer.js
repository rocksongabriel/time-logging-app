import React from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";


class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  }

  handleEditFormOpen = () => {
    this.setState({
      editFormOpen: true,
    })
  }

  handleEditFormClose = () => {
    this.setState({
      editFormOpen: false,
    })
  }

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm 
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormClose={this.handleEditFormClose}
        />
      )
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditFormOpen={this.handleEditFormOpen}
        />
      )
    }
  }
}


export default EditableTimer;