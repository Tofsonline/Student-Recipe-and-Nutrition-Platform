import React, { useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

function Recipe({ title, cal, steps, image }) {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className="p-2">
      <div className="card shadow-sm h-100" style={{ borderRadius: '15px', border: 'none', background: '#fff' }}>
        <img src={image} className="card-img-top" alt={title} style={{ height: '140px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
        <div className="card-body p-3">
          <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{title}</h6>
          <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>🔥 {cal} Calories</p>
          
          <button 
            onClick={() => setShowSteps(!showSteps)}
            className="btn btn-sm w-100" 
            style={{ backgroundColor: '#8D6E63', color: 'white', borderRadius: '8px', fontSize: '0.7rem' }}
          >
            {showSteps ? "Close" : "Instructions"}
          </button>

          {showSteps && (
            <div className="mt-2 p-2 instructions-box" style={{ fontSize: '0.7rem', background: '#FFF8E1', borderRadius: '5px', borderLeft: '3px solid #5D4037' }}>
              {steps}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");

  const [recipes] = useState([
    { id: 1, title: "Jollof Rice", cal: 450, steps: " Heat oil in a pot. Sauté sliced onions and tomato paste for 3–5 minutes until the slap (sourness) is gone, Stir in your blended pepper mix (or dry pepper), bouillon cubes (Maggi/Knorr), salt, curry powder, and thyme. Add a little water and let it boil, Wash your long-grain rice thoroughly. Add it to the pot. Ensure the liquid level is just slightly above the rice (about 1 inch), Cover the pot tightly (use foil paper under the lid for extra steam). Cook on low heat for 20–25 minutes. Once soft, stir in a little butter and sliced onions for that classic party aroma.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt44jtbUw2D1X6b5kIOpjLA18_qTjEZPSdkZbK6X2fHdmoGLmwnsMCNsKQu_2uOgjlVkkk-ee8k9A72Fu1JajfUGqWx67Edf0OpLWGh-bMCg&s=10" },
    { id: 2, title: "Stir-fry Noodles", cal: 320, steps: "Place noodle cakes in boiling water for 2-3 minutes until just soft. Drain and set aside, Heat a little oil. Fry chopped onions, peppers, and any available veggies (carrots/peas), Push veggies to the side of the pan. Crack in 2 eggs, scramble them until firm, then mix with the veggies, Add the noodles and the spice seasoning. Toss everything together on high heat for 1 minute.", image: "https://peasandcrayons.com/wp-content/uploads/2020/12/vegetable-stir-fry-noodles-recipe--800x1200.jpg" },
    { id: 3, title: "Fried Rice", cal: 410, steps: "Boil rice with a teaspoon of curry powder and salt until it is 80% cooked. Drain and rinse with cold water, Heat oil and fry diced liver or chicken bits with onions until browned, Add more curry, thyme, bouillon cubes, and a bag of mixed frozen veggies (carrots, peas, sweet corn), Add the parboiled rice to the pan in small batches. Stir-fry on high heat for 3-5 minutes to give it that 'fried' texture and golden color.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ioi72Fy35A2QZ-PQfjdJfMqqR8Xqd0Tr4kGz5wJJ&s" },
    { id: 4, title: "Jolllof Spaghetti", cal: 380, steps: "Prepare the Sauce: Peel and chop the onions. Rinse the tomatoes, bell peppers, and scotch bonnet peppers. Remove the seeds and stems from the peppers. Blend the tomatoes, bell peppers, onions, and scotch bonnet peppers until smooth, Fry the Tomato Paste: Heat oil in a pot over medium heat, then add the minced garlic and fry until fragrant. Add the tomato paste and fry for about 5 minutes to deepen the flavor, Cook the Sauce: Add the blended pepper mix to the pot, followed by the seasonings (bouillon, salt, thyme, curry powder, onion powder). Cook for 5-7 minutes. Reduce heat and let the sauce simmer for another 10 minutes to allow the flavors to meld. Boil the Spaghetti, Bring 6 cups of water to a boil in another pot. Add 1 tsp of salt and cook the spaghetti for 5 minutes, until al dente. Drain, but save a cup of pasta water for later, Combine the Pasta and Sauce, Add the cooked spaghetti to the sauce, tossing well to coat every strand in that rich, jollof goodness. If the sauce is too thick, add a splash of reserved pasta water to reach your desired consistency, Simmer and Serve: Allow the pasta to simmer in the sauce for 5-7 minutes, then transfer to a serving dish and enjoy!", image: "https://kikifoodies.com/wp-content/uploads/2024/12/ET5B8578-4-683x1024.jpeg" },
    { id: 5, title: "Beans & Plantain", cal: 550, steps: "Place the washed beans into the pressure cooker. Add water to cover the beans; the water should be just above the level of the beans. Add a handful of chopped onions. Add half of the required salt. Lock the lid of the manual pressure cooker securely. Set the pressure to medium and make sure the vent is closed. Set a timer for 20-25 minutes. After the timer goes off, allow the pressure to release naturally for about 10 minutes before opening the lid. Serve with fried dodo.", image: "https://kikifoodies.com/wp-content/uploads/2024/10/C124443F-DCB5-429E-B8F5-A0DA63CAB916-683x1024.jpeg" },
    { id: 6, title: "Boiled Yam & Egg", cal: 420, steps: "Boil yam, fry eggs with tomatoes/onions.", image: "https://www.myactivekitchen.com/wp-content/uploads/2015/03/yam-and-egg-sauce-image-1.jpg" },
    { id: 7, title: "Chicken Salad", cal: 260, steps: "Grilled chicken mixed with lettuce/cream.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgycc12CisA5L5TQ-BpurdOD3rVy2BXxgywCvFNFYSkJAAA6vPtXca8Wu-bji2-1tIE21SZssUMSKB_Rm4FSKRQLYgP5SUjEyZK_Hyhka&s=10" },
    { id: 8, title: "Soaked Garri", cal: 310, steps: "Soak garri, add nuts, milk, and sugar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmf_hlcEVrswP0pQqdH-Pyee2MDO8_gTst3744oA3an_Z-1TWrHn9PEMbECo1qOgkUZf6EwH9kHcLEqx1-axE0JdxTKIh5bMwwbPK5BrE&s=10" },
    { id: 9, title: "Oatmeal & Banana", cal: 290, steps: "Cook oats, top with banana and honey.", image: "https://www.allrecipes.com/thmb/Mgi7nHu-NrQTx9lH-O1v_QBeUPQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/265505-maple-and-brown-sugar-oatmeal-DDMFS-beauty_3x4-3228-ac98030b91b84fca9e80c524332e5d01.jpg" },
    { id: 10, title: "Suya Wrap", cal: 480, steps: "Wrap suya beef in tortilla with cabbage.", image: "https://toasties.ng/wp-content/uploads/2019/11/img_4812-768x512.jpg" },
    { id: 11, title: "Pounded Yam & Egusi", cal: 600, steps: "Cook melon seeds in palm oil with seasoning, serve with pounded yam.", image: "https://travelandmunchies.com/wp-content/uploads/2025/03/IMG_9666-150x150.jpg" },
    { id: 12, title: "Moimoi & Custard", cal: 350, steps: "Steam bean cake, serve with hot custard.", image: "https://www.myactivekitchen.com/wp-content/uploads/2016/05/moi-moi-1-768x511.jpg" },
    { id: 13, title: "Semolina & Okra", cal: 450, steps: "Make okra soup with fish, serve with semo.", image: "https://nigerianfoodiehub.com/wp-content/uploads/2022/02/Attachment-1-30-1.jpg" },
    { id: 14, title: "Fish Barbecue", cal: 300, steps: "Grill fish with barbecue sauce.", image: "https://sisijemimah.com/wp-content/uploads/2016/04/Spicy-grilled-fish-768x473.jpg" },
    { id: 15, title: "Gizdodo", cal: 500, steps: "Mix fried gizzard and fried plantain in sauce.", image: "https://cheflolaskitchen.com/wp-content/uploads/2015/04/Gizdodo-5.jpg.webp" },
    { id: 16, title: "White Rice & Stew", cal: 400, steps: "Prepare the Protein: Season and boil the meat or chicken with onions, a seasoning cube, curry, and thyme. Cook until tender, then remove the meat (you can fry or grill it for extra flavor) and reserve the stock. Cook the Rice: Parboil the white rice, wash it thoroughly, and then cook it with fresh water and a little salt until the water dries up and the rice is fluffy. Make the Stew: Blend fresh tomatoes, red bell peppers, and scotch bonnet peppers until smooth. Heat vegetable oil in a pot, sauté some chopped onions, and then add the blended tomato mixture. Fry on medium heat until the oil separates and the sauce thickens (about 15-20 minutes). Add the meat stock, the cooked protein, and seasoning cubes, salt, and spices to taste. Simmer for another 10-15 minutes for the flavors to meld.", image: "https://sisijemimah.com/wp-content/uploads/2016/10/IMG_8267-768x512.jpg" },
    { id: 17, title: "Ewa Agoyin", cal: 520, steps: "Cook beans mushy, top with spicy black oil.", image: "https://simshomekitchen.com/wp-content/uploads/2025/08/ewaagoyin-in-a-white-bowl-with-thick-bread-in-the-back-720x960.jpg" },
    { id: 18, title: "Pancakes", cal: 340, steps: "Mix flour, egg, milk and sugar. Fry thin and flip, then serve.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujqO_yciH6Pq32HsOlA2btJ639tSWSf8iMLWGO2hviZvryT4CDtxO0tXbYo_MjBBmzUNz_KmzhrYBJxTu9tKW03zVuiiS9vpw7lHaEBCuOQ&s=10" },
    { id: 19, title: "Coconut Rice", cal: 460, steps: "Cook rice in coconut milk and prawns.", image: "https://cheflolaskitchen.com/wp-content/uploads/2015/10/Coconut-Rice-6-1-640x960.jpg.webp" },
    { id: 20, title: "Boli & Groundnut", cal: 380, steps: "Roast plantain, serve with crunchy nuts.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVA7h8HfoZHagkW5qnKXEempviBdfosGtg1sep5DVow&s" },
    { id: 21, title: "Akara & Pap", cal: 320, steps: "Deep fry bean balls, serve with corn pap.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8rXic01c2eUV4-28xW--TJjH8MdtarvcPfPp6o8VqwwDdCO-uXkglb1WxskgZNRxEBUsvRAJhCQje4XAaDqZ9moP1B7Ayjbpg2Ng5vR-&s=10" },
    { id: 22, title: "Fish Pepper Soup", cal: 200, steps: "Boil fish with nutmeg, ginger, and scent leaf.", image: "https://www.thepretendchef.com/wp-content/uploads/2017/09/catfish-pepper-soup-Point-and-kill-1-8.jpg.webp" },
    { id: 23, title: "Bread & Egg", cal: 370, steps: "Boil rice, stir fry pumpkin leaves & beef.", image: "https://www.giverecipe.com/wp-content/uploads/2018/04/How-To-Make-Eggy-Bread-Recipe.jpg" },
    { id: 24, title: "Plantain Porridge", cal: 440, steps: "Cook unripe plantain with oil and fish.", image: "https://www.mydiasporakitchen.com/wp-content/uploads/2025/06/unripe-Plantain-porridge-08-683x1024.jpg" },
    { id: 25, title: "Mashed Potatoes", cal: 300, steps: "Boil potatoes, mash with butter and milk.", image: "https://www.allrecipes.com/thmb/QH_JKQhpxGnX247VU58OVkOW0g8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/18290-garlic-mashed-potatoes-ddmfs-beauty2-4x3-0327-2-47384a10cded40ae90e574bc7fdb9433.jpg" },
    { id: 26, title: "Yam & Garden Egg Sauce", cal: 280, steps: "Boil garden egg, mash and fry with oil.", image: "https://img-global.cpcdn.com/recipes/dbff5d7b7ceba237/300x426cq80/yam-and-garden-egg-sauce-recipe-main-photo.webp" },
    { id: 27, title: "Ofada Rice & Sauce", cal: 550, steps: "Boil local rice, serve with ayamase sauce.", image: "https://sisijemimah.com/wp-content/uploads/2015/12/Ofada-stew-2-1024x731.jpg" }
  ]);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const filtered = recipes.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='container-fluid' style={{ backgroundColor: '#FFF8E1', minHeight: '100vh', padding: 0 }}>
      <div className="container py-4">
       
        <nav className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-5'>
          {/* <h4 className="fw-bold mb-3 mb-md-0" style={{ color: '#5D4037' }}>
            <i className="bi bi-cup-hot-fill me-2"></i>Bells Recipe and Nutrition Platform
          </h4> */}
          
          <div className="position-relative w-50 search-wrapper">
             <i className="bi bi-search position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#8D6E63' }}></i>
             <input 
              type="text" 
              placeholder="Search 20+ recipes..." 
              className="search-input w-100"
              style={{ paddingLeft: '50px' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </nav>

        
        {search === "" && (
          <section className="mb-5 fade-in">
            <h5 className="fw-bold mb-4" style={{ color: '#5D4037', borderLeft: '4px solid #8D6E63', paddingLeft: '10px' }}>
              Recommended
            </h5>
            <Slider {...sliderSettings}>
              {recipes.slice(0, 8).map(item => (
                <Recipe key={item.id} {...item} />
              ))}
            </Slider>
          </section>
        )}

        <section className="mb-5">
          <h5 className="fw-bold mb-4" style={{ color: '#5D4037', borderLeft: '4px solid #8D6E63', paddingLeft: '10px' }}>
            {search === "" ? "Full Menu Catalogue" : `Search Results for "${search}"`}
          </h5>
          
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
            {filtered.length > 0 ? (
              filtered.map(item => (
                <div className="col" key={item.id}>
                  <Recipe {...item} />
                </div>
              ))
            ) : (
              <div className="w-100 text-center py-5">
                <p className="text-muted">No recipes found matching "{search}"</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import './App.css'
// import axios from 'axios';



// function App() {
//   const APP_ID = "25588635";
//   const APP_KEY = 
// "da019839a54ba7088ea28339c2b72911";
//   const [query, setQuery] = useState('chicken')
//   const [Recipes, setRecipes] = useState([])
//   let id = 0;

//     var settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1
//   };

// useEffect(() => {
//   // Use the v2 endpoint which is more stable for localhost
//   const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
//   axios.get(url)
//     .then(res => {
//       // In v2, the data is in res.data.hits
//       console.log("Data fetched:", res.data.hits);
//       setRecipes(res.data.hits); 
//     })
//     .catch(err => {
//       console.log("API Error details:", err.response ? err.response.data : err.message);
//     });
// }, [query]);
//     // useEffect(()=> {
//     //   axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
//     //   .then(res => console.log(res.data.hits))
//     //   .catch(err => console.log(err));
//     // }, [])

//   return (

      
    
//       <div className = 'container'>
//         <nav className='nav pt-3'>
//           <li>
//             <Link to="/" className= 'text-decoration-none text-dark fw-bold'><i className='bi bi-cup-hot me-2'></i><span>Bells University Student Recipe Program</span></Link>
//           </li>
//         </nav>
//         <div>       
//         <div className=' text-center nt-3'>
//           <input type="text" className = "search-input"/>
//           <button className='search-btn'> <i className='bi bi-search'></i>  </button>
//           </div>

//           <div className='home_recipes'>
//             <div>
//               <h4>Reccommended</h4>
//               <Slider {...settings}>  
//                 {Recipes.map(recipe=>(
//                   <Recipe
//                     id = {id += 1}
//                     title = {recipe.recipe.label}
//                     image = {recipe.recipe.image}                  
//                     >

//                     </Recipe>
                  
//                   ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default App
