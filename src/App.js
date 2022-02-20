import { useLazyAxios } from 'use-axios-client';

export default function App() {
  const [getData, { data, error, loading }] = useLazyAxios({
    url: "https://jsonplaceholder.typicode.com/posts"
  });

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>
        <ul>
        {data.map (x => <li key={x.id}>{x.title}</li>)}
        </ul>
       
        </div>
        }
      <button onClick={() => getData()}>Get data</button>
    </>
  );
}