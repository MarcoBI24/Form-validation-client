		let contenedorGeneral = document.getElementById("contenedorGeneral")
		let inptNombre = document.getElementById("name");
		let form = document.getElementById("form")
		let btnSend = document.getElementById("enviar")
		
		function validarInput(input){
			let spanInvalid = input.nextElementSibling
			let spanValid = spanInvalid.nextElementSibling
			let validNull =	spanValid.nextElementSibling;
			
			if (input.validity.valid === false || input.value === null) {
				input.style.borderColor = "red"
				spanInvalid.style.display ="block"
				spanValid.style.display = "none"
				console.log(spanInvalid)
				if (input.value == 0) {
					validNull.style.display = "block"
				}
				else{
					validNull.style.display = "none"

				}
			}
			else{
				
					input.style.borderColor = "green"
					spanValid.style.display = "block"
					spanInvalid.style.display = "none"
					validNull.style.display = "none"


				
				
			}
		}
		function validarInvalid(input,event){
			event.preventDefault()
			let spanInvalid = input.nextElementSibling
			let spanValid = spanInvalid.nextElementSibling
			let validNull = spanValid.nextElementSibling
			
			if (input.validity.valid === false || input.value == 0 ) {
				input.style.borderColor = "red"
				spanInvalid.style.display = "none"
				spanValid.style.display = "none"
				if (input.value == 0) {
						validNull.style.display = "block"
				}

			}
		}

