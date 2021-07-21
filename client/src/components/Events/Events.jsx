import "./Events.scss"
import { useState, useEffect } from "react"
import {latestEvents} from "../../utils/api"

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        latestEvents()
            .then(res => {
                setEvents(res.data.data)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    if (events === []) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="events">
                <h2>Events</h2>
                <ul className="events__items">
                    {events.map(event => {
                        return (
                            <li>
                                <h4>
                                    <a href={event.website}>{event.title}</a>
                                </h4>
                                <strong>
                                   Starts from {event.start_date} to {event.end_date} 
                                </strong>
                                <p>{event.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }  
}

export default Events
