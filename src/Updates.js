import { useEffect,useState } from 'react';
import { Updateitems } from './Updateitems';

export const Updates = () => {

    const [updatenews,setupdatenews] = useState([])
    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-09-13&to=2024-09-13&sortBy=popularity&apiKey=603dd2b41a644f4faadc8ab7f8603c77`
      fetch(url).then(response => response.json()).then(data => setupdatenews(data.articles)).catch()
    },[])

  return (
    <>
        <h1>Example Headline's <span className="badge bg-secondary">News</span></h1>
    {
      updatenews.map((item, index)=> {
        return (
          <>
                <Updateitems title={item.title} desc={item.description} img={item.urlToImage} url={item.url}/>
          </>
         );
      })
    }
    </>
  )
}
