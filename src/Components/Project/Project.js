import Carousel from 'nuka-carousel';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import UseProjects from '../UseProjects/UseProjects';
import './Project.css'

const Project = (props) => {
    const { id, name, title, url, img, img2, img3, description, technology, client, server, } = props.project

    const navigate = useNavigate()

    const detailProject = (id) => {
        navigate(`/${id}`)
    }






    return (
        <div>
            <div class=" w-[80%] mx-auto card w-96 bg-[aqua] shadow-xl">

                <img className='img' src={img} />


                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                    </h2>
                    <div class="card-actions justify-end">
                        {/* {
                            server ? <div class="badge badge-outline"><a href={client}>Client Side Code</a></div>
                                :
                                <div class="badge badge-outline"><a href={client}>Source Code</a></div>
                        }
                        {
                            server && <div class="badge badge-outline"><a href={server}>Server Side Code</a></div>

                        }    </div> */}

                        <button className='btn mt-5'>                        <div class=" live-site badge text-[aqua]"><a href={url}> Project Detail</a></div>
                        </button>

                    </div>





                </div>



            </div >
            </div >
            );
};

            export default Project;