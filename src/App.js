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




    /*const colors = [
        'red', 'green', 'blue', 'yellow', 'purple',
        'orange', 'pink', 'brown', 'gray', 'cyan',
        'magenta', 'violet', 'indigo', 'turquoise', 'gold',
        'silver', 'black', 'white', 'lime', 'olive',
        'navy', 'maroon', 'teal', 'coral', 'salmon',
        'lavender', 'tan', 'khaki', 'plum', 'beige',
        'orchid', 'skyblue', 'peach', 'tomato', 'peru',
        'slategray', 'darkorange', 'lightcoral', 'cornflowerblue', 'mediumseagreen',
        'burlywood', 'cadetblue', 'chocolate', 'crimson', 'darkcyan',
        'darkgoldenrod', 'darkolivegreen', 'darkorchid', 'darkslateblue', 'darkslategray',
        'darkturquoise', 'deepskyblue', 'forestgreen', 'fuchsia', 'goldenrod',
        'greenyellow', 'hotpink', 'indianred', 'lawngreen', 'lightblue',
        'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue',
        'lightsteelblue', 'limegreen', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
        'mediumpurple', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mistyrose',
        'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'palegoldenrod',
        'palegreen', 'paleturquoise', 'palevioletred', 'peachpuff', 'powderblue',
        'rosybrown', 'royalblue', 'saddlebrown', 'seagreen', 'sienna',
        'springgreen', 'steelblue', 'thistle', 'tomato', 'wheat',
        'yellowgreen'
    ];*/


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
                            Button 1
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
                            Label 1
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
                            Button 2
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
                            Label 2
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
                            Button 3
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
                            Label 3
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
                            Button 4
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
                            Label 4
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
                            Button 5
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
                            Label 5
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
                            Button 6
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
                            Label 6
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
                            Button 7
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
                            Label 7
                        </span>
                    </div>
                </div>



                {data.map((item, index) => (
                    <div key={index} className="ItemContainer">
                        <p>{item.code}</p>
                        <button onClick={handleClick}>Click Me</button>
                    </div>
                ))}
            </div>



            <div id="box2" className="RightBox">

                <header>
                    <h1 style={{ color: 'white' }}>
                        Basic Operations
                    </h1>
                </header>

                <form onSubmit={handleSubmit}>

                    <label style={{ color: 'white' }}>
                        Name:
                        <input type="text" value={nameOfUser} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label style={{ color: 'white' }}>
                        NickName:
                        <input type="text" value={nickNameOfUser} onChange={(e) => setNickName(e.target.value)} />
                    </label>

                    <label style={{ color: 'white' }}>
                        Gender:
                        <select value={genderOfUser} onChange={(e) => setGender(e.target.value)}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>

                    <button type="submit">Submit</button>
                </form>

            </div>


            <div id="box3" className="LeftBox">
                <header>
                    <h1 style={{ color: 'white' }}>
                        Retrieval Terminal: 
                    </h1>
                </header>
                {/* Add your content here */}
            </div>

        </div>
    );
}

export default App;