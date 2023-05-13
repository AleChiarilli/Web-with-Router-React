const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planets: null,
      character: null,
      planet: null,
    },
    actions: {
      //acá tengo que hacer las 2 funcionalidades que acabo de escribir para obtener la info.
      // Use getActions to call a function within a fuction
      obtenerPersonajes: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((err) => console.error(err));
      },
      obtenerPlanetas: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((res) => res.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((err) => console.error(err));
      },

      obtenerPersonaje: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((res) => res.json())
          .then((data) => setStore({ character: data.result.properties }))
          .catch((err) => console.error(err));
      },

      obtenerPlaneta: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((res) => res.json())
          .then((data) => setStore({ planet: data.result.properties }))
          .catch((err) => console.error(err));
      },

      //   changeColor: (index, color) => {
      //     //get the store
      //     const store = getStore();

      //     //we have to loop the entire demo array to look for the respective index
      //     //and change its color
      //     const demo = store.demo.map((elm, i) => {
      //       if (i === index) elm.background = color;
      //       return elm;
      //     });

      //     //reset the global store
      //     setStore({ demo: demo });
      //   },
    },
  };
};

export default getState;
