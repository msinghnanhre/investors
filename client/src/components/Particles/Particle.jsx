import React from 'react'
import Particles from 'react-particles-js';

function Particle() {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    line_linked: {
                        color: "#c8c8c8",
                        "opacity": 0.5,
                        shadow: {
                            blur: 5
                        }
                    },
                    "color": {
                        "value": ["#f2a900", "#3c3c3d", "#006097", "#333333"]
                    },
                    "size": {
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
