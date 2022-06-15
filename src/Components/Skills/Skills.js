import React from 'react';

const Skills = () => {
    return (
        <div className='bg-neutral py-10'>
            <h1 className='text-4xl font-semibold text-center text-[#e1815f] mb-10'>Skills :</h1>

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <div className='flex justify-between text-[aqua]'><p>Modeling : AutoCAD Electrical</p><p>100%</p></div>
                    <progress class="progress progress-error bg-black " value="100" max="100"></progress><br />
                    <div className='flex justify-between text-[aqua]'><p>Simulation : Pspice, Proteus</p><p>90%</p></div>

                    <progress class="progress progress-error bg-black " value="90" max="100"></progress><br />
                    <div className='flex justify-between text-[aqua]'><p>Programming : C, C++,Python, Golang</p><p>90%</p></div>
                    <progress class="progress progress-error bg-black" value="90" max="100"></progress><br />
                    
                </div>
                <div>
                <div className='flex justify-between text-[aqua]'><p>Data Analysis : Matlab, Ocatve, Python ( Tensorflow, Open CV,
Pytorch,Pandas,Matplotlib,SQLAlchemy)</p><p>90%</p></div>

                    <progress class="progress progress-error bg-black " value="90" max="100"></progress><br />
                    <div className='flex justify-between text-[aqua]'><p>Hardware Programming : Verilog, Arduino, Intel 8086 Microprocessor</p><p>90%</p></div>

<progress class="progress progress-error bg-black" value="90" max="100"></progress><br />

                </div>
            </div>
        </div>
    );
};

export default Skills;