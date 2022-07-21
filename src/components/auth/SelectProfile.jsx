import React from 'react'
import Navbar from '../base/Navbar'
import Button from '@mui/material/Button';
import '../../assets/css/selectProfile.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PHOTO } from '../../store/reducer';

const SelectProfile = () => {

     const dispatch = useDispatch();
      const navigate = useNavigate();

    const listProfile = [
        {
            name: 'Murat',
            img: require('../../assets/img/murat.png')
        },
        {
            name: 'Umut',
            img: require('../../assets/img/umut.png')
        },
        {
            name: 'Kemal',
            img: require('../../assets/img/kemal.png')
        },
        {
            name: 'Cocuk',
            img: require('../../assets/img/cocuk.png')
        },
    ]

    const handleLogin = async (imgProfile) => {
         try {
             await dispatch(GET_PHOTO(imgProfile));
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg_default" sx={{ display: 'flex', alignItems: 'center' }}>
            <Navbar />
            <div className="select_profile">
                <div>
                    <p className="title_select_profile">Who’s watching?</p>
                    <div style={{ display: 'flex' }}>
                        {
                            listProfile.map((item, i) => {
                                return (
                                    <div key={i} className="item_profile"> 
                                        <img src={item.img} alt="" className='img_profile' onClick={() => handleLogin(item.img)}/>  
                                        <p className="name_profile">
                                            {item.name}
                                        </p>
                                    </div>
                                )
                            })
                        }
                        <div className="item_profile">
                            <div className="img_profile d-flex justify-center align-center">
                                <AddCircleIcon sx={{ fontSize: 100 }} />
                            </div>
                            <p className="name_profile">
                                Other
                            </p>
                        </div>
                    </div>
                    {/* <button className='manage_profile'>MANAGE PROFILE</button> */}
                    <div className="d-flex justify-center">
                        <Button variant="outlined" >Manage Profile</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectProfile
