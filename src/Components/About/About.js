import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about'>
            <div className="about  hero min-h-screen bg-[aqua]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://i.ibb.co/TgvHnf3/DP.jpg" className=" photo max-w-sm w-[90%] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-semibold">About Me</h1>
                        <p className="py-6 pr-5">Hello! My name is Rahim Hossain A graduate of the Department of EEE at Bangladesh University of Engineering and technology. My Python Programming Language interests include mathematical optimization problems with applications in AI, statistical learning and computer vision. In my free time, i enjoy playing cricket, singing, listening to music. "You never get to discover new things until you try
<br />
I used to watch "Ray" when I was a teenager. A blind character is crucial to the story. That film piqued my interest in the conduct of blind people. I discovered some fascinating facts regarding blind individuals. People in developed countries have a lot of technology to serve their residents. However, those technologies are not available in undeveloped countries. I come from a developing country where many individuals suffer from vision problems, making them a burden on society.
The thought occurred to me that if I could work on some technologies that could assist individuals in need, their lives would be drastically altered. As a result, my path to becoming an engineer began.
With this objective in mind, I began working diligently in High School to gain admission to Bangladesh University of Engineering and Technology, the country's most famous university (BUET). I immediately began working on my goal after being accepted, and I competed in a number of robotics events. In addition, during my first year of college, I won the "Industrial Automation Challenge."
In my third-year project, I ultimately constructed a smart stick for blind persons, which both instructors and classmates well received. I had to train myself in computer vision even though the technology had significant limitations for this assignment. This was my first introduction to the fascinating area of Artificial Intelligence.
During this time, I taught myself to code in C, C++, Python, and MATLAB, among other languages. I used to use MATLAB when I first started working. After some time, I decided to concentrate on TensorFlow and PyTorch. I recognized I needed more theoretical understanding to build more intuition and incorporate more functionality. As a result, I began working on two scientific publications. "A Hybrid Clustering Pipeline for Mining Baseline Local Patterns in 3D Point Cloud," the first study, was like scratching the surface of Machine Learning. Throughout this process, I learned a lot about research, including how important it is to remain persistent in order to get your work published. I dug deep into the deep neural network for the second paper, titled "Dynamic Perturbation of Weights for Improved Data Reconstruction in Unsupervised Learning" (DNN). Again, I learned a lot about DNN theory, and this paper was published in IJCNN, a major conference in this field.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;