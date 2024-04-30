import React, { useCallback, useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async(url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (erro) {
      json = null
      setError;
    } finally {
      setData(json);
      setLoading(false)
      return {response, json}
    }
  }, [])

  return { data, error, loading, request };
};

// RESOLUÇÃO NO APP.JSX:
// import React, { useEffect, useState } from 'react';
// import { useFetch } from './hooks/useFetch';


// export const App = () => {
//   const {request, data, loading, error} = useFetch()

//   useEffect(() => {
//     async function fetchData() {
//       const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
//       console.log(response, json)
//     } 
//     fetchData()
//   },[request])
//   console.log(data)

//   if(error) return <p>{error}</p>
//   if(loading) return <p>Carregando</p>
//   if(data)
//   return (
//     <div>
//       {data.map((produto) => (
//         <div key={produto.id}>
//           <h1>{produto.nome}</h1>
//         </div>
//       ))}
//     </div>
//   );
//   else return null
// };

