const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			detallepeople: [],
			planetas: [],
			detalledePlaneta: [],


			demo: [
				{
					title: "Personajes",
					background: "white",
					initial: "white"
				},
				{
					title: "Planetas",
					background: "white",
					initial: "white"
				}
			]
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

			obtenerInfoPe: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/people/" + num);
					let data = await response.json();

					setStore({ detallepeople: data.result });

				} catch (error) {
					console.log(error);

				}
			},

			/* planetas */
			obtenerInfoPlaneta: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let data = await response.json();

					setStore({ planetas: data.result });



				} catch (error) {
					console.log(error);

				}
			},



			/* detalles de planetas*/

			obtenerInfoPlaneta: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/planets/" + num);
					let data = await response.json();

					setStore({ detalledePlaneta: data.result });

				} catch (error) {
					console.log(error);

				}
			},









		}
	};
};




export default getState;

