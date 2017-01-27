/* globals asciicasts */
// good old vanilla js…

(function () {

var $ = document.querySelector.bind(document)

var player = $('#player')
var score = $('#score')
var keys = $('#keys')
var annotations = $('#annotations')
var sel = $('#episode-selector')
var docin = $('#in')
var docout = $('#out')
var vg = $('#vimgolf-link')

var id = window.location.hash.slice(1) || asciicasts[0].id
var asciicast = asciicasts.filter(function (a) {
	return a.id === id
})[0]

var tokenize = function (keys) {
	return keys
		.replace(/\n/g, '\\n')
		.replace(/<((c-.|a-.)|(c-|a-)?(ret|space|tab|lt|gt|backspace|esc|up|down|left|right|pageup|pagedown|home|end|backtab|del))>|./g, '¤$&')
		.split('¤')
		// remove ,q
		.slice(1, -2)
}

var annotate = function (tokens) {
	var t // current token
	var mode = 'n'

	var insertBuffer = []
	var promptBuffer = []
	var countBuffer = []

	var insertOp
	var promptOp
	var chooseOp

	var usingRegister = false
	var macroRecording = false
	// triggered by <a-;>
	var oneShot = false

	/* will be filled with log object like this
	{
		// left
		count: *
		reg: ?
		op: ?
		key: ?
		insert: *
		prompt: *
		validator: ? <ret> / <esc>
		// right
		dt: *
	} */
	var logs = []

	// shortcut
	function push(key, dt) {
		logs.push({ key, dt })
	}

	while (t = tokens.shift()) {
		// insert mode
		if (mode === 'i' && t !== '<esc>' && t !== '<a-;>' && t !== '<home>' && t !== '<end>') {
			insertBuffer.push(t)
			continue
		}
		// prompt mode
		if (mode === 'p' && t !== '<ret>') {
			promptBuffer.push(t)
			continue
		}
		// choose mode
		if (mode === 'c') {
			if (!usingRegister) {
				logs.push({
					op: chooseOp[0],
					prompt: t,
					dt: chooseOp[1]
				})
			} else {
				usingRegister = t
			}
			mode = 'n'
			continue
		}

		switch (t) {
			// insert mode
			case 'a':
				insertOp = [t, 'insert [text] after selected text']
				mode = 'i'
				break

			case 'A':
				insertOp = [t, 'insert [text] at line end']
				mode = 'i'
				break

			case 'c':
				insertOp = [t, 'change selected text to [text]']
				mode = 'i'
				break

			case 'i':
				insertOp = [t, 'insert [text] before selected text']
				mode = 'i'
				break

			case 'I':
				insertOp = [t, 'insert [text] at line begin']
				mode = 'i'
				break

			case 'o':
				insertOp = [t, 'insert [text] on new line below']
				mode = 'i'
				break

			case 'O':
				insertOp = [t, 'insert [text] on new line above']
				mode = 'i'
				break

			case '<esc>':
				if (mode === 'i') {
					logs.push({
						op: insertOp[0],
						insert: insertBuffer.join(''),
						validator: t,
						dt: insertOp[1]
					})
					insertBuffer = []
					mode = 'n'
				} else if (macroRecording) {
					push(t, 'stop macro recording')
					macroRecording = !macroRecording
				}
				break

			// prompt mode
			case '<a-k>':
				promptOp = [t, 'keep selections matching regex [text]']
				mode = 'p'
				break

			case '<a-K>':
				promptOp = [t, 'keep selections not matching regex [text]']
				mode = 'p'
				break

			case 's':
				promptOp = [t, 'select regex [text] matches in selected text']
				mode = 'p'
				break

			case 'S':
				promptOp = [t, 'split selected text on regex [text] matches']
				mode = 'p'
				break

			case '/':
				promptOp = [t, 'select next given regex [text] match']
				mode = 'p'
				break

			case '<a-/>':
				promptOp = [t, 'select previous given regex [text] match']
				mode = 'p'
				break

			case '<ret>':
				logs.push({
					op: promptOp[0],
					prompt: promptBuffer.join(''),
					validator: t,
					dt: promptOp[1]
				})
				promptBuffer = []
				mode = 'n'
				break

			// choose mode (like prompt but with no <ret>)
			case 'f':
				chooseOp = [t, 'select onto next [text] character']
				mode = 'c'
				break

			case '<a-f>':
				chooseOp = [t, 'select to previous [text] character included']
				mode = 'c'
				break

			case 'g':
				chooseOp = [t, 'go to [text]']
				mode = 'c'
				break

			case 'G':
				chooseOp = [t, 'extend to [text]']
				mode = 'c'
				break

			case 'r':
				chooseOp = [t, 'replace with character [text]']
				mode = 'c'
				break

			case 't':
				chooseOp = [t, 'select to next [text] character']
				mode = 'c'
				break

			case '"':
				usingRegister = true
				mode = 'c'
				continue

			case '<a-i>':
				chooseOp = [t, 'select inner object [text]']
				mode = 'c'
				break

			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				countBuffer.push(t)
				break

			case 'b':
				push(t, 'select to previous word start')
				break

			case 'B':
				push(t, 'extend to previous word start')
				break

			case '<a-b>':
				push(t, 'select to previous WORD start')
				break

			case 'C':
				push(t, 'copy selection on next lines')
				break

			case '<a-C>':
				push(t, 'copy selection on previous lines')
				break

			case 'd':
				push(t, 'delete selected text')
				break

			case 'e':
				push(t, 'select to next word end')
				break

			case 'E':
				push(t, 'extend to next word end')
				break

			case 'h':
				push(t, 'move left ←')
				break

			case 'H':
				push(t, 'extend left ⇐')
				break

			case '<a-h>':
				push(t, 'select to line begin')
				break

			case 'j':
				push(t, 'move down ↓')
				break

			case 'J':
				push(t, 'extend down ⇓')
				break

			case '<a-j>':
				push(t, 'join lines')
				break

			case '<a-J>':
				push(t, 'join lines and select spaces')
				break

			case 'k':
				push(t, 'move up ↑')
				break

			case 'K':
				push(t, 'extend up ⇑')
				break

			case 'l':
				push(t, 'move right →')
				break

			case 'L':
				push(t, 'extend right ⇒')
				break

			case '<a-l>':
				push(t, 'select to line end')
				break

			case '<a-L>':
				push(t, 'extend to line end')
				break

			case 'm':
				push(t, 'select to matching character')
				break

			case 'n':
				push(t, 'select next current search pattern match')
				break

			case 'N':
				push(t, 'extend with next current search pattern match')
				break

			case '<a-n>':
				push(t, 'select previous current search pattern match')
				break

			case 'p':
				push(t, 'paste [text] before selected text')
				break

			case 'P':
				push(t, 'paste [text] after selected text')
				break

			case '<a-p>':
				push(t, 'paste every yanked selection after selected text')
				break

			case 'q':
				push(t, 'replay recorded macro')
				break

			case 'Q':
				push(t, `${macroRecording ? 'stop' : 'start'} macro recording`)
				macroRecording = !macroRecording
				break

			case 'R':
				push(t, 'replace selected text with yanked text')
				break

			case '<a-R>':
				push(t, 'replace selected text with yanked text')
				break

			case '<a-s>':
				push(t, 'split selected text on line ends')
				break

			case 'u':
				push(t, 'undo')
				break

			case 'w':
				push(t, 'select to next word start')
				break

			case '<a-w>':
				push(t, 'select to next WORD start')
				break

			case 'x':
				push(t, 'select line')
				break

			case 'X':
				push(t, 'extend line')
				break

			case '<a-x>':
				push(t, 'extend selections to whole lines')
				break

			case '<a-X>':
				push(t, 'crop selections to whole lines')
				break

			case 'y':
				push(t, 'yank selected text')
				break

			case 'z':
				push(t, 'restore selections from register')
				break

			case 'Z':
				push(t, 'save selections on register')
				break

			case '<a-z>':
				push(t, 'append selections from register')
				break

			case '<home>':
				if (insertBuffer.length) {
					logs.push({
						op: insertOp[0],
						insert: insertBuffer.join(''),
						dt: insertOp[1]
					})
					insertBuffer = []
				}
				push(t, 'select to line begin')
				break

			case '<end>':
				if (insertBuffer.length) {
					logs.push({
						op: insertOp[0],
						insert: insertBuffer.join(''),
						dt: insertOp[1]
					})
					insertBuffer = []
				}
				push(t, 'select to line end')
				break

			case '<space>':
				push(t, 'remove all selections except main')
				break

			case '<a-space>':
				push(t, 'remove main selection')
				break

			case '&':
				push(t, 'align selection cursors')
				break

			case '~':
				push(t, 'convert to upper case in selections')
				break

			case '*':
				push(t, 'set search pattern to main selection content')
				break

			case '%':
				push(t, 'select whole buffer')
				break

			case '.':
				push(t, 'repeat last insert command')
				break

			case '<':
				push(t, 'dedent')
				break

			case '>':
				push(t, 'indent')
				break

			case '<a-&>':
				push(t, 'copy indentation')
				break

			case '<a-`>':
				push(t, 'swap case in selections')
				break

			case '<a-;>':
				logs.push({
					op: insertOp[0],
					insert: insertBuffer.join(''),
					dt: insertOp[1]
				})
				insertOp = ['', 'insert [text]']
				insertBuffer = []
				push(t, 'escape to normal mode for a single command')
				mode = 'n'
				oneShot = true
				continue

			default:
				console.debug('unknown token', t)
		}

		if (oneShot) {
			oneShot = false
			mode = 'i'
		}

		// append count
		if (countBuffer.length && isNaN(Number(t))) {
			logs[logs.length - 1].count = countBuffer.join('')
			countBuffer = []
		}

		if (usingRegister) {
			logs[logs.length - 1].reg = usingRegister
			usingRegister = false
		}
	}
	return logs
}

var createDl = function (tokens) {
	var annotations = annotate(tokens)
	var dl = document.createElement('dl')

	annotations.forEach(function (a) {
		dl.appendChild(createDt(a))
		dl.appendChild(createDd(a))
	})

	return dl
}

// left part with keys
function createDt (a) {
	var dt = document.createElement('dt')
	var kbd

	function createKbd (c, k) {
		kbd = document.createElement('kbd')
		kbd.textContent = c
		if (k) {
			kbd.classList.add(`kbd-${k}`)
		}
		dt.appendChild(kbd)
	}

	if (a.count) createKbd(a.count, 'count')
	if (a.reg) {
		createKbd('"')
		createKbd(a.reg, 'reg')
	}
	if (a.key) createKbd(a.key)
	if (a.op) createKbd(a.op)
	if (a.insert) createKbd(a.insert, 'insert')
	if (a.prompt) createKbd(a.prompt, 'prompt')
	if (a.validator) createKbd(a.validator, 'validator')

	return dt
}

// right part with english translation
function createDd (a) {
	var dd = document.createElement('dd')
	if (!a.insert && !a.prompt && !a.reg) {
		dd.textContent = a.dt
	} else {
		var m = a.dt.split('[text]')
		var pre = document.createElement('span')
		pre.textContent = m[0]

		var text = document.createElement('em')
		text.textContent = a.insert || a.prompt || `content of ${a.reg} register`

		var post = document.createElement('span')
		post.textContent = m[1]

		dd.appendChild(pre)
		dd.appendChild(text)
		dd.appendChild(post)
	}
	if (a.count) {
		var count = document.createElement('strong')
		count.textContent = ` (${a.count} times)`
		dd.appendChild(count)
	}
	return dd
}

var strip = function (keys) {
	return keys
		.replace(/\n/g, '\\n')
		// remove ,q
		.slice(0, -2)
}

player.setAttribute('src', 'asciicasts/' + id + '.json')

// populate keys
keys.textContent = strip(asciicast.keys)

var tokens = tokenize(asciicast.keys)
score.textContent = tokens.length
annotations.appendChild(createDl(tokens))

// populate selector
asciicasts.forEach(function (a) {
	var opt = document.createElement('option')
	var l = tokenize(a.keys).length
	opt.value = a.id
	opt.textContent = `${l} keys – ${a.id}`
	opt.selected = a.id === id
	sel.appendChild(opt)
})

docin.textContent = asciicast.in
docout.textContent = asciicast.out

vg.href = 'https://vimgolf.com/challenges/' + id

// refresh the page for permalink
sel.onchange = function (evt) {
	var a = asciicasts.filter(function (a) {
		return a.id === evt.target.value
	})[0]
	window.location.hash = a.id
	window.location.reload()
}

})()

