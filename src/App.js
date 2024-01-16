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
            <header className="App-header">
                <h1>KU SIKOTIFAY</h1>

            </header>

            <div id="box1" className="RightBox">

                <header>
                    <h1 style={{ color: 'white' }}>
                        Advanced Options
                    </h1>
                </header>



                {data.map((item, index) => (
                    <div key={index} className="ItemContainer">
                        <p>{item.code}</p>
                        <button onClick={handleClick}>Clicke Me</button>
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
                        OUTPUT: 
                    </h1>
                </header>
                {/* Add your content here */}
            </div>

        </div>
    );
}

export default App;