import React from "react";
import Particles from "react-particles-js";


export default () => (
    <div>
        <Particles

            style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "-1", }}

            params={{
                "background": {
                  "color": {
                    "value": "#101010"
                  },
                  "image": "",
                  "position": "50% 50%",
                  "repeat": "repeat",
                  "background-size": "cover"
                },
                "backgroundMask": {
                  "cover": {
                    "color": {
                      "value": "#fff"
                    },
                    "opacity": 1
                  },
                  "enable": false
                },
                "detectRetina": true,
                "fpsLimit": 60,
                "infection": {
                  "cure": false,
                  "delay": 0,
                  "enable": false,
                  "infections": 0,
                  "stages": []
                },
                "interactivity": {
                  "detectsOn": "window",
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "onDiv": {
                      "elementId": "",
                      "enable": false,
                      "mode": []
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "grab",
                      "parallax": {
                        "enable": true,
                        "force": 60,
                        "smooth": 10
                      }
                    },
                    "resize": true
                  },
                  "modes": {
                    "bubble": {
                      "distance": 400,
                      "duration": 2,
                      "opacity": 0.8,
                      "size": 40
                    },
                    "connect": {
                      "distance": 80,
                      "links": {
                        "opacity": 0.5
                      },
                      "radius": 60
                    },
                    "grab": {
                      "distance": 400,
                      "links": {
                        "opacity": 1
                      }
                    },
                    "push": {
                      "quantity": 4
                    },
                    "remove": {
                      "quantity": 2
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4,
                      "speed": 1
                    },
                    "slow": {
                      "factor": 3,
                      "radius": 200
                    }
                  }
                },
                "particles": {
                  "collisions": {
                    "enable": false,
                    "mode": "bounce"
                  },
                  "color": {
                    "value": "#ffffff",
                    "animation": {
                      "enable": false,
                      "speed": 1,
                      "sync": true
                    }
                  },
                  "links": {
                    "blink": false,
                    "color": {
                      "value": "#ffffff"
                    },
                    "consent": false,
                    "distance": 150,
                    "enable": true,
                    "opacity": 0.4,
                    "shadow": {
                      "blur": 5,
                      "color": {
                        "value": "lime"
                      },
                      "enable": false
                    },
                    "triangles": {
                      "enable": false
                    },
                    "width": 1,
                    "warp": false
                  },
                  "move": {
                    "attract": {
                      "enable": false,
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "none",
                    "enable": true,
                    "noise": {
                      "delay": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0
                      },
                      "enable": false,
                      "factor": {
                        "horizontal": {
                          "value": 50,
                          "offset": 0
                        },
                        "vertical": {
                          "value": 10,
                          "offset": 40000
                        }
                      }
                    },
                    "outMode": "out",
                    "random": false,
                    "speed": 2,
                    "straight": false,
                    "trail": {
                      "enable": false,
                      "length": 10,
                      "fillColor": {
                        "value": "#000000"
                      }
                    },
                    "vibrate": false,
                    "warp": false
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "area": 800,
                      "factor": 1000
                    },
                    "limit": 0,
                    "value": 100
                  },
                  "opacity": {
                    "animation": {
                      "enable": true,
                      "minimumValue": 0.1,
                      "speed": 3,
                      "sync": false
                    },
                    "random": {
                      "enable": true,
                      "minimumValue": 1
                    },
                    "value": 0.5
                  },
                  "rotate": {
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "random": false,
                    "value": 0
                  },
                  "shadow": {
                    "blur": 0,
                    "color": {
                      "value": "#000000"
                    },
                    "enable": false,
                    "offset": {
                      "x": 0,
                      "y": 0
                    }
                  },
                  "shape": {
                    "options": {
                      "character": {
                        "fill": true,
                        "close": true,
                        "font": "Verdana",
                        "style": "",
                        "value": "*",
                        "weight": "400"
                      },
                      "char": {
                        "fill": true,
                        "close": true,
                        "font": "Verdana",
                        "style": "",
                        "value": "*",
                        "weight": "400"
                      },
                      "image": {
                        "fill": true,
                        "close": true,
                        "height": 100,
                        "replaceColor": false,
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 100
                      },
                      "images": {
                        "fill": true,
                        "close": true,
                        "height": 100,
                        "replaceColor": false,
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 100
                      },
                      "polygon": {
                        "fill": true,
                        "close": true,
                        "sides": 5
                      },
                      "star": {
                        "fill": true,
                        "close": true,
                        "sides": 5
                      }
                    },
                    "type": "circle"
                  },
                  "size": {
                    "animation": {
                      "destroy": "none",
                      "enable": true,
                      "minimumValue": 0.1,
                      "speed": 20,
                      "startValue": "max",
                      "sync": false
                    },
                    "random": {
                      "enable": true,
                      "minimumValue": 1
                    },
                    "value": 10
                  },
                  "stroke": {
                    "color": {
                      "value": "#000000"
                    },
                    "width": 0,
                    "opacity": 1
                  },
                  "twinkle": {
                    "lines": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    },
                    "particles": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    }
                  }
                },
                "pauseOnBlur": true
              }}
        />
    </div>
);
