import React from 'react';

const TeamExperienceSlider: React.FC = () => {
  return (
    <section className='experiences'>
        <div className='exp-slider'>
            <div className='exp-slides'>
                <input type='radio' name='radio-btn' id='experience1' />
                <input type='radio' name='radio-btn' id='experience2' />
                <input type='radio' name='radio-btn' id='experience3' />
                <input type='radio' name='radio-btn' id='experience4' />
                <input type='radio' name='radio-btn' id='experience5' />

                <div className='experience first-exp grid grid-cols-3 gap-20 items-center'>
                    <div>
                        <p className='font-bold text-xl tracking-widest'>Chand</p>
                        <hr className='w-max-content my-auto'/>
                        <p>International Brand Advisor</p>
                    </div>
                    <div className='col-span-2 text-lg'>
                        <p>&quot;During my time at EIGRE, I not only experienced a balance between work and personal life but also had the opportunity to grow and develop professionally.&quot;</p>
                    </div>
                </div>
                <div className='experience second-exp grid grid-cols-3 gap-20 items-center'>
                    <div>
                        <p className='font-bold text-xl tracking-widest'>Lexa</p>
                        <hr className='w-max-content my-auto'/>
                        <p>Reseller Senior Officer</p>
                    </div>
                    <div className='col-span-2 text-lg'>
                        <p>&quot;I always feel supported and valued in every step of my journey in this company. Open communication and close collaboration between departments enable us to achieve outstanding results. There is no fear in sharing ideas and opinions, creating a work environment full of enthusiasm and creativity.&quot;</p>
                    </div>
                </div>
                <div className='experience third-exp grid grid-cols-3 gap-20 items-center'>
                    <div>
                        <p className='font-bold text-xl tracking-widest'>April</p>
                        <hr className='w-max-content my-auto'/>
                        <p>Tax Staff</p>
                    </div>
                    <div className='col-span-2 text-lg'>
                        <p>&quot;I am grateful to work at Eigre. It is not just a regular job, but a challenging and meaningful journey. Eigre is where I feel valued, encouraged to grow,and make a real impact. I am proud to say that Eigre is a Great Place to Work.&quot;</p>
                    </div>
                </div>
                <div className='experience fourth-exp grid grid-cols-3 gap-20 items-center'>
                    <div>
                        <p className='font-bold text-xl tracking-widest'>Theresa</p>
                        <hr className='w-max-content my-auto'/>
                        <p>Business Process & Procedure Officer</p>
                    </div>
                    <div className='col-span-2 text-lg'>
                        <p>&quot;I feel a great warmth and unity while working at EIGRE. Our bond goes beyond colleagues, but more like friends and family. Whenever there is a challenge or a big project, we support each other and work together with enthusiasm. The Harmony culture creates a warm and friendly work atmosphere where we inspire and help each other. This unity makes the work environment very enjoyable.&quot;</p>
                    </div>
                </div>
                <div className='experience fifth-exp grid grid-cols-3 gap-20 items-center'>
                    <div>
                        <p className='font-bold text-xl tracking-widest'>Tarry</p>
                        <hr className='w-max-content my-auto'/>
                        <p>Senior Development Engineer</p>
                    </div>
                    <div className='col-span-2 text-lg'>
                        <p>&quot;I am proud to work at EIGRE. We are a team that not only works hard but also has an incredible sense of camaraderie. Mutual respect, support, and inspiration are values that are deeply ingrained here. I feel happy and excited to come to work every day, knowing that what I do truly matters. EIGRE provides us with the space to develop, grow, and achieve success together, making it a Great Place to Work.&quot;</p>
                    </div>
                </div>

                <div className='navigation-auto'>
                    <div className='auto-btn1'></div>
                    <div className='auto-btn2'></div>
                    <div className='auto-btn3'></div>
                    <div className='auto-btn4'></div>
                    <div className='auto-btn5'></div>
                </div>
            </div>

            <div className='exp-nav-manual'>
                <label htmlFor='experience1' className='exp-manual-btn'></label>
                <label htmlFor='experience2' className='exp-manual-btn'></label>
                <label htmlFor='experience3' className='exp-manual-btn'></label>
                <label htmlFor='experience4' className='exp-manual-btn'></label>
                <label htmlFor='experience5' className='exp-manual-btn'></label>
            </div>
        </div>
    </section>
  );
};

export default TeamExperienceSlider;