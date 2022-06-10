<!-- <div id="minuteur" style="display:none;">
    <div id="minuteur-container" class="hour-text">
        <div class="time-row">
            <div class="nb-col">
                <button id="tenth-h-up" class="minuteur-btn">+</button>
                <span class="nb" id="tenth-h">0</span>
                <button id="tenth-h-down" class="minuteur-btn">-</button>
            </div>
        </div>
        <div class="time-row">
            <div class="nb-col">
                <button id="h-up" class="minuteur-btn">+</button>
                <span class="nb" id="h">0</span>
                <button id="h-down" class="minuteur-btn">-</button>
            </div>
            :
        </div>
        
        <div class="time-row">
            <div class="nb-col">
                <button id="tenth-m-up" class="minuteur-btn">+</button>
                <span class="nb" id="tenth-m">0</span>
                <button id="tenth-m-down" class="minuteur-btn">-</button>
            </div>
        </div>
        <div class="time-row">
            <div class="nb-col">
                <button id="m-up" class="minuteur-btn">+</button>
                <span class="nb" id="m">0</span>
                <button id="m-down" class="minuteur-btn">-</button>
            </div>
            :
        </div
        <div class="time-row">
            <div class="nb-col">
                <button id="tenth-s-up" class="minuteur-btn">+</button>
                <span class="nb" id="tenth-s">0</span>
                <button id="tenth-s-down" class="minuteur-btn">-</button>
            </div>
        </div>
        <div class="time-row">
            <div class="nb-col">
                <button id="s-up" class="minuteur-btn">+</button>
                <span class="nb" id="s">0</span>
                <button id="s-down" class="minuteur-btn">-</button>
            </div>
        </div>
    </div
    <button id="start-minuteur">Start</button>
    <button id="stop-minuteur">Stop</button>
</div> -->
        
<div id="minuteur" style="display:none;">
        <div class="box">
            <p id="h">00</p>:
        </div>
        <div class="box">
            <p id="m">00</p>:
        </div>
        <div class="box">
            <p id="s">00</p>
        </div>
    <form>
        <span>
            <label>Temps d'arrêt</label>
            <input type="time-local" id="time">
        </span>
        <div>
            <button id="play">
                play
                <!-- <img src="Images/play.png" alt=""> -->
            </button>
            <button id="pause">
                pause
                <!-- <img src="Images/pause.png" alt=""> -->
            </button>
            <button id="refresh">
                refresh
                <!-- <img src="Images/refresh.png" alt=""> -->
            </button>
        </div>
    </form>
</div>
