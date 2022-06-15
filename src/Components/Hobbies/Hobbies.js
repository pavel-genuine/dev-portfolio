import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <div className='grid grid-cols-1, md:grid-cols-3 gap-10 my-5 w-[90%] md:mx-auto ml-2'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/jf7DZ7S/GYM.jpg" alt="gym" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gym</h2>
                
                </div>
            </div>
            
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/vZJJ6XX/reading-books.jpg" alt="books" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Reading Books</h2>
                
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/6yxJChy/riding-bike.jpg" alt="bike" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Riding Bike</h2>
                
                </div>
            </div>
            
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/MZDRTnp/playing-soccer.jpg" alt="soccer" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Playing Soccer</h2>
                
                </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/xMfbRmT/travelling.jpg" alt="travelling" /></figure>
                <figure><img className='my-2' src="https://i.ibb.co/GPRYfLm/travelling-2.jpg" alt="travelling" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Travelling</h2>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hobbies;