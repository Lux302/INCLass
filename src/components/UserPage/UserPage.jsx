import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';

function UserPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const gear = useSelector((store) => store.profileGear);
    const user = useSelector((store) => store.user);



    useEffect(() => {
        dispatch({ type: 'FETCH_GEAR' });
        dispatch({ type: 'FETCH_GEAR' });
    }, []);

    const routeAllGear = () => {
        history.push('/all');
    };
    const routeGuitars = () => {
        history.push('/guitars');
    };
    const routeAmps = () => {
        history.push('/amps');
    };
    const routeAccessories = () => {
        history.push('/accessories');
    };

    const gearR = (id) => {
        history.push(`/gear/${id}`)
    }
    const routeAddGear = () => {
        history.push('/addgear')
    }

    return (
        <div className="container">


            <Avatar className='avatar'
            >{user.username[0]}
            </Avatar>
            <p>Welcome {user.username}!</p>


            {/* <Avatar className="avatar"
            >{user.username[0]}
            </Avatar>
            <p className="avatar" >Welcome {user.username} !</p>
            <br />

            <p className="avatar"  >Categories:</p>
            <br />
            <p className="avatar" onClick={routeAllGear}>All Gear</p>
            <br />
            <p className="avatar" onClick={routeGuitars}>Guitars</p>
            <br />

            <p className="avatar" onClick={routeAmps}>Amps</p>
            <br />

            <p className="avatar" onClick={routeAccessories}>Accessories</p>
            <br />

            <p className="avatar" onClick={routeAddGear}>Add Gear</p> */}
            <div className='GearList'>
                {gear.map(eachGear => {
                    return (
                        <div className='GearItem' key={eachGear.id} >
                            <div className='catalog'>
                                {/* <Avatar variant='rounded' onClick={() => gearR(eachGear.id)} src={eachGear.image}
                                /> */}
                                <img className='GearImg' onClick={() => gearR(eachGear.id)}
                                    src={eachGear.image} ></img>

                                <h3 onClick={() => gearR(eachGear.id)} className='catalogTitle' >{eachGear.title}</h3>

                                {/* <h5>{eachGear.year}</h5> */}
                            </div>
                        </div>
                    );
                })}

            </div>
            <br />
            <br />
            <br />
            <br />
            <Button variant='contained' color="primary" className='routeButton' onClick={routeAddGear}  >Add Gear</Button>

        </div>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
