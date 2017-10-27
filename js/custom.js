playNotes();

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
    
    
	    function playNotes(){
	        var playButton = document.getElementById('a');
	        playButton.addEventListener('click', playAudioA, false);

	        var playButton = document.getElementById('A#');
	        playButton.addEventListener('click', playAudioAs, false);

	        var playButton = document.getElementById('b');
	        playButton.addEventListener('click', playAudioB, false);

	        var playButton = document.getElementById('c');
	        playButton.addEventListener('click', playAudioC, false);

	        var playButton = document.getElementById('C#');
	        playButton.addEventListener('click', playAudioCs, false);

	        var playButton = document.getElementById('d');
	        playButton.addEventListener('click', playAudioD, false);

	        var playButton = document.getElementById('D#');
	        playButton.addEventListener('click', playAudioDs, false);

	        var playButton = document.getElementById('e');
	        playButton.addEventListener('click', playAudioE, false);

	        var playButton = document.getElementById('f');
	        playButton.addEventListener('click', playAudioF, false);

	        var playButton = document.getElementById('F#');
	        playButton.addEventListener('click', playAudioFs, false);

	        var playButton = document.getElementById('g');
	        playButton.addEventListener('click', playAudioG, false);

	        var playButton = document.getElementById('G#');
	        playButton.addEventListener('click', playAudioGs, false);

	        var playButton = document.getElementById('a2');
	        playButton.addEventListener('click', playAudioA2, false);

	        var playButton = document.getElementById('A#2');
	        playButton.addEventListener('click', playAudioA2s, false);

	        var playButton = document.getElementById('b2');
	        playButton.addEventListener('click', playAudioB2, false);
	    }

	    
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



	    function myFunction() {
	    var aString = "This is a string";

	    var res = aString.toUpperCase();
	    document.getElementById("demo").innerHTML = res;
	}

	    console.log(window.resizeBy);