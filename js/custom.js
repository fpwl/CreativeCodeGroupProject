playNotes();
		//creating the audio (i.e adding audio)
        var createAudio = function(){
            window.noteA = new Audio();
            noteA.src = 'sounds_edited/A.mp3';

            window.noteAs = new Audio();
            noteAs.src = 'sounds_edited/As.mp3';

            window.noteB = new Audio();
            noteB.src = 'sounds_edited/B.mp3';

            window.noteC = new Audio();
            noteC.src = 'sounds_edited/C.mp3';

            window.noteCs = new Audio();
            noteCs.src = 'sounds_edited/Cs.mp3';

            window.noteD = new Audio();
            noteD.src = 'sounds_edited/D.mp3';

            window.noteDs = new Audio();
            noteDs.src = 'sounds_edited/Ds.mp3';

            window.noteE = new Audio();
            noteE.src = 'sounds_edited/E.mp3';

            window.noteF = new Audio();
            noteF.src = 'sounds_edited/F.mp3';

            window.noteFs = new Audio();
            noteFs.src = 'sounds_edited/Fs.mp3';

            window.noteG = new Audio();
            noteG.src = 'sounds_edited/G.mp3';

            window.noteGs = new Audio();
            noteGs.src = 'sounds_edited/Gs.mp3';

            window.noteA2 = new Audio();
            noteA2.src = 'sounds_edited/A2.mp3';

            window.noteA2s = new Audio();
            noteA2s.src = 'sounds_edited/A2s.mp3';

            window.noteB2 = new Audio();
            noteB2.src = 'sounds_edited/B2.mp3';
        }();
    
    	//functions that target what happens when something is clicked
	    function playNotes(){
	        var playButtonA= document.getElementById('a');
	        playButtonA.addEventListener('click', playAudioA, false);

	        var playButtonAs = document.getElementById('A#');
	        playButtonAs.addEventListener('click', playAudioAs, false);

	        var playButtonB = document.getElementById('b');
	        playButtonB.addEventListener('click', playAudioB, false);

	        var playButtonC = document.getElementById('c');
	        playButtonC.addEventListener('click', playAudioC, false);

	        var playButtonCs = document.getElementById('C#');
	        playButtonCs.addEventListener('click', playAudioCs, false);

	        var playButtonD = document.getElementById('d');
	        playButtonD.addEventListener('click', playAudioD, false);

	        var playButtonDs = document.getElementById('D#');
	        playButtonDs.addEventListener('click', playAudioDs, false);

	        var playButtonE = document.getElementById('e');
	        playButtonE.addEventListener('click', playAudioE, false);

	        var playButtonE = document.getElementById('f');
	        playButtonF.addEventListener('click', playAudioF, false);

	        var playButtonFs = document.getElementById('F#');
	        playButtonFs.addEventListener('click', playAudioFs, false);

	        var playButtonG = document.getElementById('g');
	        playButtonG.addEventListener('click', playAudioG, false);

	        var playButtonGs = document.getElementById('G#');
	        playButtonGs.addEventListener('click', playAudioGs, false);

	        var playButtonA2 = document.getElementById('a2');
	        playButtonA2.addEventListener('click', playAudioA2, false);

	        var playButtonA2s = document.getElementById('A#2');
	        playButtonA2s.addEventListener('click', playAudioA2s, false);

	        var playButtonB2 = document.getElementById('b2');
	        playButtonB2.addEventListener('click', playAudioB2, false);
	    }

	    //More functions play the corresponding audio when the previous function has been innvoked
	    function playAudioA() {
	        noteA.play()
	    }
	    function playAudioAs() {
	        noteAs.play()
	    }
	    function playAudioB() {
	        noteB.play()
	    }
	    function playAudioC() {
	        noteC.play()
	    }
	    function playAudioCs() {
	        noteCs.play()
	    }
	    function playAudioD() {
	        noteD.play()
	    }
	    function playAudioDs() {
	        noteDs.play()
	    }
	    function playAudioE() {
	        noteE.play()
	    }
	    function playAudioF() {
	        noteF.play()
	    }
	    function playAudioFs() {
	        noteFs.play()
	    }
	    function playAudioG() {
	        noteG.play()
	    }
	    function playAudioGs() {
	        noteGs.play()
	    }
	    function playAudioA2() {
	        noteA2.play()
	    }
	    function playAudioA2s() {
	        noteA2s.play()
	    }
	    function playAudioB2() {
	        noteB2.play()
	    }

	    //A switch statement to make the keyboard key correspond to the notes. 
	    document.addEventListener("keypress", function(e) {
    		var key = e.keyCode;

    		console.log(key);

		    switch (key) {
		        // A key
		        case 97:
		            noteA.currentTime = 0;
		            playAudioA();
		            break;
		        case 119:
		            noteAs.currentTime = 0;
		            playAudioAs();
		            break;
		        case 115:
		            noteB.currentTime = 0;
		            playAudioB();
		            break;
		        case 100:
		            noteC.currentTime = 0;
		            playAudioC();
		            break;
		        case 114:
		            noteCs.currentTime = 0;
		            playAudioCs();
		            break;
		        case 102:
		            noteD.currentTime = 0;
		            playAudioD();
		            break;
		        case 116:
		            noteDs.currentTime = 0;
		            playAudioDs();
		            break;
		        case 103:
		            noteE.currentTime = 0;
		            playAudioE();
		            break;
		        case 104:
		            noteF.currentTime = 0;
		            playAudioF();
		            break;
		        case 117:
		            noteFs.currentTime = 0;
		            playAudioFs();
		            break;
		        case 106:
		            noteG.currentTime = 0;
		            playAudioG();
		            break;
		        case 105:
		            noteGs.currentTime = 0;
		            playAudioGs();
		            break;

		        default:
		        	console.log('bye');
		        	break;
			}
		});