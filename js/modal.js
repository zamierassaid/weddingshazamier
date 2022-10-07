// Modal
class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				
				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

// Modal 1
var btn = document.querySelector("#item1")
var mdl = new BulmaModal("#modal1")

btn.addEventListener("click", function () {
	mdl.show()
})

mdl.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 2
var btn2 = document.querySelector("#item2")
var mdl2 = new BulmaModal("#modal2")

btn2.addEventListener("click", function () {
	mdl2.show()
})

mdl2.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl2.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 3
var btn3 = document.querySelector("#item3")
var mdl3 = new BulmaModal("#modal3")

btn3.addEventListener("click", function () {
	mdl3.show()
})

mdl3.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl3.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 4
var btn4 = document.querySelector("#item4")
var mdl4 = new BulmaModal("#modal4")

btn4.addEventListener("click", function () {
	mdl4.show()
})

mdl4.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl4.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 5
var btn5 = document.querySelector("#item5")
var mdl5 = new BulmaModal("#modal5")

btn5.addEventListener("click", function () {
	mdl5.show()
})

mdl5.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl5.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 6
var btn6 = document.querySelector("#item6")
var mdl6 = new BulmaModal("#modal6")

btn6.addEventListener("click", function () {
	mdl6.show()
})

mdl6.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl6.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 7
var btn7 = document.querySelector("#item7")
var mdl7 = new BulmaModal("#modal7")

btn7.addEventListener("click", function () {
	mdl7.show()
})

mdl7.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl7.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 8
var btn8 = document.querySelector("#item8")
var mdl8 = new BulmaModal("#modal8")

btn8.addEventListener("click", function () {
	mdl8.show()
})

mdl8.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl8.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 9
var btn9 = document.querySelector("#item9")
var mdl9 = new BulmaModal("#modal9")

btn9.addEventListener("click", function () {
	mdl9.show()
})

mdl9.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl9.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 10
var btn10 = document.querySelector("#item10")
var mdl10 = new BulmaModal("#modal10")

btn10.addEventListener("click", function () {
	mdl10.show()
})

mdl10.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl10.addEventListener("modal:close", function() {
	console.log("closed")
})

// Modal 11
var btn11 = document.querySelector("#item11")
var mdl11 = new BulmaModal("#modal11")

btn11.addEventListener("click", function () {
	mdl11.show()
})

mdl11.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl11.addEventListener("modal:close", function() {
	console.log("closed")
})