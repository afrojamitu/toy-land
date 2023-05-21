import React from 'react';

const ReadStory = () => {
    return (
        <div className='pb-10'>

            <h1 className='text-3xl text-center font-bold my-5'>Read Story's From Disney</h1>
            <p className='text-slate-500 text-center pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur labore doloremque suscipit iure ratione dolorem ad numquam quis quae blanditiis.</p>


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className='flex justify-between items-center gap-10'>
                        <img src="https://kbimages1-a.akamaihd.net/2e8bd798-ae1d-4585-88bf-9e5bc1e86b7a/353/569/90/False/tangled-rapunzel-s-tale.jpg" className="h-96" />
                        <div className='text-start space-y-2'>
                            <h1 className='text-2xl font-bold'>Read Rapunzel Full Story</h1>
                            <p>Download the online copy of this book.</p>
                            <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-' style={{ transition: '0.5s' }}>Download</button>
                            <p className="text-slate-500">
                                Rapunzel is a classic fairy tale about a young girl with long, magical hair who is locked in a tower by an evil witch. The witch raises Rapunzel as her own, keeping her isolated from the outside world. However, a prince discovers Rapunzel's tower and climbs up her hair. They fall in love, but the witch learns of their secret meetings and cuts off Rapunzel's hair, banishing her to a remote location. Eventually, the prince finds Rapunzel, and her tears restore his sight. They marry and live happily ever after. The story emphasizes love, bravery, and the power of friendship.
                            </p>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mx-auto">
                        <a href="#slide4" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <div className='flex justify-between items-center gap-10'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9B5c_JeWnXlI2XZBCJSwlOqVUuvGlQAY7Ra1jmHA_C0MXY02RyaYW4i4cUhZqoP5tIdk&usqp=CAU" className="h-96" />
                        <div className='text-start space-y-2'>
                            <h1 className='text-2xl font-bold'>Read Frozen Full Story</h1>
                            <p>Download the online copy of this book.</p>
                            <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-' style={{ transition: '0.5s' }}>Download</button>
                            <p className="text-slate-500">
                                "Frozen" is a captivating story about two royal sisters, Elsa and Anna, living in the kingdom of Arendelle. Elsa possesses magical ice powers, which she struggles to control. After accidentally revealing her powers and plunging the kingdom into eternal winter, Elsa flees, isolating herself in an ice palace. Anna embarks on a journey to find her sister and bring back summer. Along the way, she encounters an iceman named Kristoff, his reindeer Sven, and a comical snowman named Olaf. Through love, sacrifice, and the power of sisterhood, Elsa learns to embrace her powers, thawing the kingdom and restoring balance.
                            </p>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">

                    <div className='flex justify-between items-center gap-10'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJUfPLk4Pq1hYXqchJ2HZP1fq0WulYPs51bQ0fpG9Xkgz5N240hPsruL2l-tvFSt-htQ&usqp=CAU" className="h-96" />
                        <div className='text-start space-y-2'>
                            <h1 className='text-2xl font-bold'>Read Moana Full Story</h1>
                            <p>Download the online copy of this book.</p>
                            <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-' style={{ transition: '0.5s' }}>Download</button>
                            <p className="text-slate-500">
                                "Moana" is an inspiring tale about a young Polynesian girl named Moana who embarks on a courageous journey to save her island and discover her true identity. Guided by her ancestors, she sets sail across the vast ocean, accompanied by the demigod Maui. They face treacherous challenges, encounter mystical creatures, and confront Moana's own self-doubt. With determination and resilience, Moana restores the heart of Te Fiti, a powerful goddess, and restores harmony to her people. The story highlights the importance of embracing one's heritage, following one's passion, and the transformative power of self-belief and bravery.
                            </p>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">

                    <div className='flex justify-between items-center gap-10'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5RcZKMRNAifytx3EnJK3h29zTopgNsO3jIfZyHd2rQ74tskn9p3tnvYuNOHnK_Mq0aQ&usqp=CAU" className="h-96" />
                        <div className='text-start space-y-2'>
                            <h1 className='text-2xl font-bold'>Read Cinderella Full Story</h1>
                            <p>Download the online copy of this book.</p>
                            <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-' style={{ transition: '0.5s' }}>Download</button>
                            <p className="text-slate-500">
                                "Cinderella" is a beloved fairy tale about a young girl named Ella, who is mistreated by her stepmother and stepsisters after her father's death. Despite her hardships, Ella remains kind and hopeful. With the help of her fairy godmother, she attends a royal ball where she captures the heart of Prince Charming. However, her magical night is cut short, and she flees, leaving behind a glass slipper. The prince searches for the mysterious girl whose foot fits the slipper. When Cinderella is found, they marry, and she escapes her oppressive life, embodying the themes of love, resilience, and the triumph of goodness over adversity.
                                </p>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent text-black border-2 border-purple-600 hover:bg-purple-300">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReadStory;