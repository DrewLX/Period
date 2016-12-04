const remote = require('electron').remote
const main = remote.require('./main.js')

const {ipcRenderer} = require('electron')

ipcRenderer.on('updateTime', (event, message) => {
	vue.secsRemaining=message;
	//console.log('updateTime Run')
})

	var vue = new Vue({
	  el: '#app',
	  data: {
	    secsRemaining: remote.getGlobal('shared').secsRemaining
	  },

    methods: {
			StartTimer: function() {
        main.StartTimer()
      },
			PauseTimer: function() {
        main.PauseTimer()
      },
			StopTimer: function() {
        main.StopTimer()
      },
			NewOutputWindow: function() {
        main.NewOutputWindow()
      },
		},

		computed: {
			timeRemaining: function() {
					var h = Math.floor(this.secsRemaining / 3600);
					var m = Math.floor(this.secsRemaining % 3600 / 60);
					var s = Math.floor(this.secsRemaining % 3600 % 60);

					var hh = h>0? h + "h " : "";
					return hh + m + "m " + s + "s";
			}
		}


	})