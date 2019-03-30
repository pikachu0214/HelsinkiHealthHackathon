import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div>
                <h1 id="title">Moodbeats</h1>

                <button id="tracking-mode">Tracking Mode</button>
                <p>During the tracking mode MoodBeats will follow your heart rate while you are doing your daily 
                work. When an event happens where your heartrate changes</p>
                <button id="calibration-mode">Calibration Mode</button>

            </div>
        );
    }
}

export default Body;