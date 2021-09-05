import React from "react";

import uuid from "react-uuid";

import "../../js/helpers";

// importing components
import EditableTimerList from "./EditableTimerList";
import ToggeableTimerForm from "./ToggeableTimerForm";


class TimersDashboard extends React.Component {

  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: 1273998,
        runningSince: null,
      },
    ]
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  }

  createTimer = (timer) => {
    const t = window.helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    })
  }

  render() {
    console.log(this.state.timers);
    return (
      <div>
        <EditableTimerList 
          timers={this.state.timers}
        />
        <ToggeableTimerForm isOpen={false}
          onFormSubmit={this.handleCreateFormSubmit}
        />
      </div>
    )
  }
}


export default TimersDashboard;