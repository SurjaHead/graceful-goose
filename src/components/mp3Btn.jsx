import React from "react"

export const Mp3Btn = () => {
    
    return (
        <form>
            <label>
                Upload file:
                <input type="file" name="file" onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const audio = new Audio(e.target.result);
                        audio.onloadedmetadata = function() {
                            console.log(audio.duration);
                            const audioElement = document.createElement('audio');
                            audioElement.src = e.target.result;
                            audioElement.controls = true;
                            document.body.appendChild(audioElement);
                            audioElement.play();
                        };
                    };
                    reader.readAsDataURL(file);
                }} />
            </label>
            <canvas id='myChart'></canvas>
            <button onClick={async (e) => {
                e.preventDefault();
                // Initialize the chart
            }}></button>
            </form>
        )
        }