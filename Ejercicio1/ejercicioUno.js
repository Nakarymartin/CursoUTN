/**
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado -- (maximo )
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa" (maximo)
d)El animal sin pelo con menor temperatura corporal (minimo)
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal (maximo)
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano (minimos)
 */
function probarEjercicio(){
	var animales;
	var pelaje;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperaturaCorporal;
	var respuesta;
	var contadorGatos;
	var contadorPerros;
	var contadorOtraCosa;
	var promedioPeso;
	var porcentajePerrosGatos;
	var maxPesoPerro;
	var maxAnimalTemperatura;
	var flagPerro;
	var flagTemperatura;
	var porcentajeDeEnfermos;
	var ultimaOtraCosa;
	var flagOtraCosa;
	var animalflacoSinPelo;
	var pesoAnimalflacoSinPelo;
	var estadoMaxAnimales;
	var flagEstadoAnimales;
	var gatoMasLiviano;
	var flagGatoMasLiviano;
	var gatoLivianoRaza;
	var gatoLivianoNombre;

	flagEstadoAnimales=0;
	flagOtraCosa=0;
	flagTemperatura=0;
	flagPerro=0;
	contadorGatos=0;
	contadorPerros=0;
	contadorOtraCosa

	temperaturaCorporal=prompt("Cuál es la temperatura de tu mascota");//esto también es como el peso

	do {
		nombre=prompt("cual es el nombre de tu mascota");
		while ((isNan(nombre)==fase)|| nombre==" "){
			alert("Eso no es un nombre. Ingrese un nombre");
		}
		animales=prompt("Cual animal deseas ingresar? Perro/gato/otra cosa");
		while (animales!="perro" || animales!="gato" || animales !="otra cosa") {
			alert("Eso no es un animal correcto. Intente de nuevo");
		}
		raza=prompt("Cual es la raza?");
		while ((isNan(raza)==fase)|| raza==" "){
			alert("Esa no es una raza. Inente nuevamente");
		}
		pelaje=prompt("Cuál es el tipo de pelaje?");
		while (pelaje!="largo" || pelaje!="corto" || pelaje!="medio") {
			alert("Eso no es un pelaje correcto. Intente nuevamente");
		}
		estadoClinico=parseInt("cual es el estado clinico de la mascota?");
		while (estadoClinico!="Enfermo" || estadoClinico!="Adoptado" || estadoClinico!="En espera"){
			alert("Eso no es un estado clinico correcto");
		}
		respuesta=prompt("Desea ingresar otra mascota?");
	}while(respuesta=="si");

	switch (animales) {
		case "gatos":
			contadorGatos++;
			peso=prompt("Cuál es el peso?"); //debería abrir un switch con un if adentro porque depende del animal	
			while (peso>3 && peso<6) {
				peso=parseInt(peso);
				alert ("gato con peso normal");
				temperaturaCorporal=prompt("Cuál es la temperatura de tu mascota");//esto también es como el peso
			}while(temperaturaCorporal>38 && temperaturaCorporal<40) { 
				temperaturaCorporal=parseInt(temperaturaCorporal);				
			}
			while (estadoClinico=="enfermo" || estadoClinico=="adoptado" || estadoClinico=="En espera") {	
			}
			while (pelaje=="corto" || pelaje=="medio" || pelaje=="largo") {				
			}

			break;
			case "perros":
				contadorPerros++;
				peso=prompt("Cuál es el peso?"); //debería abrir un switch con un if adentro porque depende del animal
				while (peso>=5 && peso<25) {
					peso=parseInt(peso);
					alert("perro con peso normal");
					temperaturaCorporal=prompt("Cuál es la temperatura de tu mascota");//esto también es como el peso
				}
				while (temperaturaCorporal>39 && temperaturaCorporal<39) {
				temperaturaCorporal=parseInt(temperaturaCorporal);
				}
				while (estadoClinico=="enfermo" || estadoClinico=="adoptado" || estadoClinico=="En espera") {	
				}
				while (pelaje=="corto" || pelaje=="medio" || pelaje=="largo") {				
				}
			break;
			case "otra cosa":
				contadorOtraCosa++;
				peso=prompt("Cuál es el peso?"); //debería abrir un switch con un if adentro porque depende del animal	
				peso=parseInt(peso);
				temperaturaCorporal=prompt("Cuál es la temperatura de tu mascota");//esto también es como el peso
				temperaturaCorporal=parseInt(temperaturaCorporal);
				while (estadoClinico=="enfermo" || estadoClinico=="adoptado" || estadoClinico=="En espera") {	
				}
				while (pelaje=="corto" || pelaje=="medio" || pelaje=="largo") {				
				}	
				break;
			}
			
			//A
			if (flagPerro==false || peso>maxPesoPerro) {
				maxPesoPerro=peso;
				flagPerro==true;
			} //E
			else if (flagTemperatura==false || temperaturaCorporal>maxAnimalTemperatura) {

				maxAnimalTemperatura=temperaturaCorporal;
				temperaturaCorporal=animales;
				flagTemperatura==true;
			} //c
			else if (flagOtraCosa== false || animales>ultimaOtraCosa) {
				ultimaOtraCosa=animales;
				flagOtraCosa==true;
			}
			//D
			else if (peso>animalflacoSinPelo && pelaje=="corto"){
				animalflacoSinPelo=animales;
				pesoAnimalflacoSinPelo=peso;
				//G
			} else if (flagEstadoAnimales==false || animales>estadoMaxAnimales){
				estadoMaxAnimales=animales;
				flagEstadoAnimales==1;
			} //I
			else if (flagGatoMasLiviano==false || gatoMasLiviano>animales){
				animales=gatoMasLiviano;
				raza=gatoLivianoRaza;
				nombre=gatoLivianoNombre;
			}

			//F
			porcentajePerrosGatos=contadorPerros%contadorGatos;
			alert("El porcentaje de perros y gatos es " +porcentajePerrosGatos);
			//H
			promedioPeso=contadorGatos+contadorPerros+contadorOtraCosa/3;
			alert("El promedio es " +promedioPeso);
			//B
			porcentajeDeEnfermos=animales%estadoClinico;
			alert("El porcentaje de enfermos sobre el total de mascotas es " +porcentajeDeEnfermos);
		
		}