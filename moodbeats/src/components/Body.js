import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div>
                <h1 id="title">Moodbeats</h1>

                <div id="div-body">
                <button id="tracking-mode" type="button" className="btn btn-danger">Tracking Mode</button>
                <p>During the tracking mode MoodBeats will follow your heart rate while you are doing your daily 
                work. When an event happens where your heartrate changes
                significantly MoodBeats will help assist you with changing the mood</p>
                <button id="calibration-mode" type="button" className="btn btn-danger">Calibration Mode</button>
                <p>During the calibration mode Moodbeats will analyse your played music with you to suggest songs in the future</p>
                </div>
            </div>
        );
    }
}

export default Body;