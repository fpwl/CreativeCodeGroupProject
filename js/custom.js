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



	    function myFunction() {
	    var aString = "This is a string";

	    var res = aString.toUpperCase();
	    document.getElementById("demo").innerHTML = res;
	}

	    console.log(window.resizeBy);