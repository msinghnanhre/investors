import React from 'react'
import Particles from 'react-particles-js';

function Particle() {
    return (
        <Particles
            params={{
                particles: {
                    "number": {
                        "value": 60
                    },
                    line_linked: {
                        color: "#F9AA4B",
                        width: "1",
                        shadow: {
                            blur: 5
                        }
                    },
                    color: {
                        "value": ["#f2a900", "#3c3c3d", "#006097", "#333333"]
                    },
                    size: {
                        "value": 3,
                        "random": true
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                },
            }}
            height="100vh"
        />
    )
}

export default Particle
