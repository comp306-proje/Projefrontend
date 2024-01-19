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
    
    const fetchData = async (numberParam) => {
        try {
            const response = await fetch(`http://localhost:3001/api/data?number=${numberParam}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleClick = () => {
        alert('Button ammm!');
        fetchData(2);
    };


    const [nameOfUser, setName] = useState('');

    const [nickNameOfUser, setNickName] = useState('');

    const [genderOfUser, setGender] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform actions with the input value here
        console.log('Name', nameOfUser);
        console.log('NickName', nickNameOfUser);
        console.log("Gender", genderOfUser);
        fetchData(1);
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

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        NickName:
                        <input type="text" value={nickNameOfUser} onChange={(e) => setNickName(e.target.value)} />
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
                        Gender:
                        <select value={genderOfUser} onChange={(e) => setGender(e.target.value)}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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

                    <div style={{ clear: 'both' }}></div>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 1:
                        <input type="text" value={nameOfUser} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 2:
                        <input type="text" value={nickNameOfUser} onChange={(e) => setNickName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        
                    </label>

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

                    <div style={{ clear: 'both' }}></div>


                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 1:
                        <input type="text" value={nameOfUser} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 2:
                        <input type="text" value={nickNameOfUser} onChange={(e) => setNickName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>

                    </label>

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

                    <div style={{ clear: 'both' }}></div>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 1:
                        <input type="text" value={nameOfUser} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>
                        ALAN 2:
                        <input type="text" value={nickNameOfUser} onChange={(e) => setNickName(e.target.value)} />
                    </label>

                    <label style={{
                        marginLeft: '10px',
                        color: '#009E60',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 900,
                        fontSize: '15px',
                        // fontStyle: 'italic',  // Apply italic style
                    }}>

                    </label>

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
