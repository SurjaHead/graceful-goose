from flask import Flask
from librosa import piptrack
import librosa
from matplotlib import pyplot as plt
import PIL
import numpy as np
import crepe
from scipy.io import wavfile
from flask import request
from flask import session
import json

app = Flask(__name__)
app.secret_key = "goosegoose"
port = 5100
@app.route("/", methods=["GET"])
def upload_mp3():
    #load the react somehow
    #recieve the mp3 file
    #API it over to MASV
    #pull mp3 from MASV
    temppath=r"C:\Users\dolev\Desktop\Programs\VocalGoose\ken-carson-type-synth-lead-mixed_150bpm_D_major.wav"

    #run frequency analysis
    sr, audio = wavfile.read(temppath)  
    time, frequency, confidence, activation = crepe.predict(audio, sr, viterbi=True, step_size=75)
    
    yvalues = frequency
    xvalues = time
    session.new()
    yvalues = np.array(yvalues)
    xvalues = np.array(xvalues)

    session["freqs"] = yvalues

    fig = plt.figure(figsize=(14, 5))
    plt.plot(xvalues, yvalues, "o")
    plt.xlabel('Time (s)')
    plt.ylabel('Pitch (Hz)')
    plt.title('Pitch-Time Graph')
    fig.savefig(r"C:/Users/dolev/Downloads/GooseFig.png")


    #send to /play

    return {"xvalues":xvalues, "yvalues":yvalues}

@app.route("/play", methods=["POST"])
def start_song():
    sumdelta=request.sumdelta

    #Produce data point every 5 seconds
    time = request.form["time"]
    index = (time*100/75).truncate()
    sr, audio = wavfile.read(request.files)
    t, frequency, confidence, activation = crepe.predict(audio, sr, viterbi=True, step_size=1000)

    #measure delta 
    delta = session["freqs"][index]-frequency
    #send array to frontend js library
    sumdelta+=delta
    return {"x":time, "y":frequency, "sumdelta":sumdelta}
    
    #while the song plays
    #start microphone recording
    #send frequency data point to frontend 
    #if delta frequency is > significant measurement
    ##send delta to voiceflow
    #recieve goose speech back 
    #Send SPEECH to frontend
    

#have some overall process to determine # for next screen
    path = r'C:/Users/dolev/Downloads/GooseFig.png'

    return f"<img src={path}>"

@app.route("/end")
def end_song():
    #display either goosepun
    #display precent
    #live laugh love
    pass

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=port, debug=True)