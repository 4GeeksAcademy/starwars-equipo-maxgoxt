const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			detallepeople: [],
		
				
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
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

			obtenerInfohome: async function() {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");
					let data = await response.json();

				    setStore({ people: data.results });
					
				
					
				} catch (error) {
					console.log(error);
					
				}
			},

			obtenerInfoPe: async function() {
				try {
					let response = await fetch( "https://www.swapi.tech/api/people/1" );
					let data = await response.json();

				 	setStore({ detallepeople: data.result });
					
					
					
				} catch (error) {
					console.log(error);
					
				}
			},

			

		}
	};
};




export default getState;

