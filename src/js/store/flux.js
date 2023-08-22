const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			detallepeople: {},
			planetas: [],
			detalledePlaneta: {},
			autos: [],
			detallesAuto: {},
			favorito: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},


			/* personas */
			obtenerInfohome: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/people");
					let data = await response.json();
					setStore({ people: data.results });


				} catch (error) {
					console.log(error);

				}
			},



			/* detalles de personajes*/

			obtenerInfoPerSingle: async function (num) {
				console.log(num)
				try {
					let response = await fetch("https://swapi.dev/api/people/" + num);
					let data = await response.json();

					setStore({ detallepeople: data });

				} catch (error) {
					console.log(error);

				}
			},



			/* planetas */
			obtenerInfoPlaneta: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let data = await response.json();

					setStore({ planetas: data.results });



				} catch (error) {
					console.log(error);

				}
			},



			/* detalles de planetas*/

			obtenerPlanetaSingle: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/planets/" + num);
					let data = await response.json();

					setStore({ detalledePlaneta: data });

				} catch (error) {
					console.log(error);

				}
			},

			//Autos
			obtenerAutos: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/vehicles");
					let data = await response.json();

					setStore({ autos: data.results });



				} catch (error) {
					console.log(error);

				}
			},

			//Detalles de autos
			obtenerAutoSingle: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/vehicles/" + num);
					let data = await response.json();

					setStore({ detallesAuto: data });

				} catch (error) {
					console.log(error);

				}
			},

			cargarFavorito: (nom) => {

				setStore(favorito.concat([nom]))

			},

		}
	};
};




export default getState;

