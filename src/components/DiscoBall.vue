<template>
    <div>
        <div id="discoBallLight"></div>
        <div id="discoBall" ref="discoBallRef">
            <div id="discoBallMiddle"></div>
        </div>
    </div>
</template>

<script is:inline client:only >
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const radius = 50;
        const squareSize = 6.5;
        const prec = 19.55;
        const fuzzy = 0.001;
        const inc = (Math.PI - fuzzy) / prec;
        const discoBallRef = ref(null);
        const runDiscoBall = () => {

            for (let t = fuzzy; t < Math.PI; t += inc) {
                const z = radius * Math.cos(t);
                const currentRadius =
                    Math.abs(
                        (radius * Math.cos(0) * Math.sin(t)) -
                        radius * Math.cos(Math.PI) * Math.sin(t)
                    ) / 2.5;
                const circumference = Math.abs(2 * Math.PI * currentRadius);
                const squaresThatFit = Math.floor(circumference / squareSize);
                const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

                for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
                    const square = document.createElement("div");
                    const squareTile = document.createElement("div");

                    squareTile.style.width = `${squareSize}px`;
                    squareTile.style.height = `${squareSize}px`;
                    squareTile.style.transformOrigin = "0 0 0";
                    squareTile.style.webkitTransformOrigin = "0 0 0";
                    squareTile.style.webkitTransform = `rotate(${i}rad) rotateY(${t}rad)`;
                    squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;

                    if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
                        squareTile.style.backgroundColor = randomColor("bright");
                    } else {
                        squareTile.style.backgroundColor = randomColor("any");
                    }

                    square.appendChild(squareTile);
                    square.className = "square";
                    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
                    squareTile.style.webkitAnimationDelay = `${randomNumber(0, 20) / 10}s`;
                    squareTile.style.animation = "reflect 2s linear infinite";
                    squareTile.style.animationDelay = `${randomNumber(0, 20) / 10}s`;
                    squareTile.style.backfaceVisibility = "hidden";

                    const x = radius * Math.cos(i) * Math.sin(t);
                    const y = radius * Math.sin(i) * Math.sin(t);

                    square.style.webkitTransform = `translateX(${Math.ceil(x)}px) translateY(${y}px) translateZ(${z}px)`;
                    square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;

                    discoBallRef.value.appendChild(square);
                }
            }
        }


        function randomColor(type) {
            let c;
            if (type == "bright") {
                c = randomNumber(130, 255);
            } else {
                c = randomNumber(110, 190);
            }
            return "rgb(" + c + "," + c + "," + c + ")";
        }

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        onMounted(() => {
            runDiscoBall();
            console.log(discoBallRef.value);
        });

        return {
            discoBallRef,
        };
    },
};
</script>

<style scoped>
html {
    width: 100%;
    height: 100%;
}

body {
    background-color: #333;
    background: -webkit-linear-gradient(bottom left, #111, #222);
    background: -moz-linear-gradient(bottom left, #111, #222);
    background: linear-gradient(bottom left, #111, #222);
    margin: 0;
}

@-webkit-keyframes rotateDiscoBall {
    0% {
        -webkit-transform: rotateX(90deg) rotateZ(0deg) rotate(0deg);
    }

    100% {
        -webkit-transform: rotateX(90deg) rotateZ(360deg) rotate(0deg);
    }
}

@keyframes rotateDiscoBall {
    0% {
        transform: rotateX(90deg) rotateZ(0deg) rotate(0deg);
    }

    100% {
        transform: rotateX(90deg) rotateZ(360deg) rotate(0deg);
    }
}

@-webkit-keyframes rotateDiscoBallMiddle {
    0% {
        -webkit-transform: rotateX(90deg) rotateY(0deg) rotate(0deg);
    }

    100% {
        -webkit-transform: rotateX(90deg) rotateY(-360deg) rotate(0deg);
    }
}

@keyframes rotateDiscoBallMiddle {
    0% {
        transform: rotateX(90deg) rotateY(0deg) rotate(0deg);
    }

    100% {
        transform: rotateX(90deg) rotateY(-360deg) rotate(0deg);
    }
}

@-webkit-keyframes reflect {
    0% {
        -webkit-filter: brightness(60%);
    }

    50% {
        -webkit-filter: brightness(120%);
    }

    100% {
        -webkit-filter: brightness(90%);
    }
}

@keyframes reflect {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
}

#discoBall {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -50px;
    -webkit-animation: rotateDiscoBall 18s linear infinite;
    animation: rotateDiscoBall 18s linear infinite;
}

#discoBallLight {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -50px;
    border-radius: 100%;
    background-color: white;
    opacity: 0.2;
    -webkit-filter: blur(20px);
}

.square {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: absolute;
    top: 50px;
    left: 50px;
    width: 6px;
    height: 6px;
    position: absolute;
    transform: rotateX(90deg) rotateY(0deg) translateZ(0px);
}

#discoBallMiddle {
    height: 100%;
    border-radius: 100%;
    background-color: #111;
    position: absolute;
    background: -webkit-linear-gradient(top, #111, #333);
    background: -moz-linear-gradient(top, #111, #333);
    background: linear-gradient(top, #111, #333);
    -webkit-animation: rotateDiscoBallMiddle 18s linear infinite;
    animation: rotateDiscoBallMiddle 18s linear infinite;
}

a {
    position: absolute;
    bottom: 12px;
    right: 20px;
}
</style>