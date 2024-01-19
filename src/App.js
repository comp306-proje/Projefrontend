import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState([]);

    /*useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/data');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);*/
    
    const fetchData = async (numberParam, artistName = "", songGenre = "") => {

        const params = new URLSearchParams({
            number: numberParam,
            artist: artistName,
            genre: songGenre
        });

        try {
            const response = await fetch(`http://localhost:3001/api/data?${params.toString()}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            alert(error);
            console.error('Error fetching data:', error);
        }
    };  


    const [nameOfUser, setName] = useState('');

    const [musicGenre, setMusicGenre] = useState('');

    const [genderOfUser, setGender] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform actions with the input value here
       
        fetchData(12);
    };

    return (

        <div className="App">
            <header className="App-header" style={{
                background: 'transparent', // Gradient background
                textAlign: 'center',  // Center align text
                padding: '10px',      // Add some padding
                color: 'white',       // Text color
                fontFamily: 'Comic Sans MS, cursive', // Apply the custom font
                fontWeight: 'bold',   // Adjust font weight if needed
                fontSize: '22px',     // Adjust font size if needed
            }}>
              
               
                <h1>KUPOTIFY ADMIN PANEL</h1>

            </header>
            <div id="box1" className="RightBox">

                <header>
                    <h1 style={{ color: 'white' }}>
                        Advanced Options
                    </h1>
                </header>

                <div className="ItemContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(1)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',                         
                                fontFamily: 'Comic Sans MS, cursive', 
                                fontWeight: 900, 
                                fontSize: '20px',  
                               // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            Return information about artist and the total "Pop" song count of them
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(2)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            Artists who were born after '2000' 
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(3)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            List of favourite artists and count of users who have favourited them
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(4)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            The count of female users for each favorite genre
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(5)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            The count of users who were born after the year 2000 for each favorite artist
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(6)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            The most liked songs along with the total number of likes for each song
                        </span>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <button
                            onClick={() => fetchData(7)}
                            style={{
                                background: 'linear-gradient(to right, #1DB954, #075E54)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                        >
                            Fetch
                        </button>
                        <span
                            style={{
                                marginLeft: '10px',
                                color: '#009E60',
                                fontFamily: 'Comic Sans MS, cursive',
                                fontWeight: 900,
                                fontSize: '20px',
                                // fontStyle: 'italic',  // Apply italic style
                            }}
                        >
                            The most liked songs in the 'Pop' category along with the total number of likes for each song (from all songs)
                        </span>
                    </div>
                </div>



               
            </div>



            <div id="box2" className="RightBox">

                <header>
                    <h1 style={{ color: 'white' }}>
                        Basic Operations
                    </h1>
                </header>

                <form onSubmit={handleSubmit}>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        Name:
                        <input type="text" value={nameOfUser} onChange={(e) => setName(e.target.value)} />
                    </label>
                                      
                                    
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                            Music Genre:
                            <select value={musicGenre} defaultValue = "" onChange={(e) => setMusicGenre(e.target.value)}>
                                <option value=""></option>
                                <option value="Hip-Hop">Hip-Hop</option>
                                <option value="R&B">R&B</option>
                                <option value="Reggaeton">Reggaeton</option>
                                <option value="Pop">Pop</option>
                                <option value="Country">Country</option>
                                <option value="Rock">Rock</option>
                                <option value="Alternative">Alternative</option>
                                <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                                <option value="Pop/Electronic">Pop/Electronic</option>
                                <option value="Hip Hop">Hip Hop</option>
                                <option value="Latin">Latin</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Folk">Folk</option>
                                <option value="Latin Pop">Latin Pop</option>
                                <option value="Psychedelic Rock">Psychedelic Rock</option>
                                <option value="Psychedelic Pop">Psychedelic Pop</option>
                                <option value="Metalcore">Metalcore</option>
                                <option value="Emo Rap">Emo Rap</option>
                                <option value="Pop Punk">Pop Punk</option>
                                <option value="Pop Rock">Pop Rock</option>
                                <option value="K-Hip Hop">K-Hip Hop</option>
                                
                                
                            </select>
                        </label>
                    </div>


                    <button type="submit"
                        style={{
                            background: 'linear-gradient(to right, #1DB954, #075E54)',
                            color: 'white',
                            border: 'none',
                            padding: '5px 8px',
                            borderRadius: '50px',
                            cursor: 'pointer',
                        }}>Submit

                    </button>                    
                </form>

            </div>


            <button id="AllUsers" onClick={() => fetchData(8)}
                style={{
                    background: 'linear-gradient(to right, #1DB954, #075E54)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 20px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                }}
            >
                All Users
            </button>

            <button id="AllSongs" onClick={() => fetchData(9)}
                style={{
                    background: 'linear-gradient(to right, #1DB954, #075E54)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 20px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                }}
            >
                All Songs
            </button>

            <button id="AllArtists" onClick={() => fetchData(10)}
                style={{
                    background: 'linear-gradient(to right, #1DB954, #075E54)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 20px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                }}
            >
                All Artists
            </button>

            <button id="AllAlbums" onClick={() => fetchData(11)}
                style={{
                    background: 'linear-gradient(to right, #1DB954, #075E54)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 20px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                }}
            >
                All Albums
            </button>



            <div id="box3" className="LeftBox">
                <header>
                    <h1 style={{ color: 'white' }}>
                        Retrieval Terminal: 
                    </h1>
                </header>


                {data.map((item, index) => (
                    <div key={index} className="ItemContainer">
                        {Object.keys(item).map((column, columnIndex) => (
                            <div key={columnIndex} className="Column" style={{ color: "white", width: '150px'}}>
                                {item[column]}
                            </div>
                        ))}
                    </div>
                ))}

                
            </div>

            



        </div>
    );
}

export default App;
