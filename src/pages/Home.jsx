import Video1 from '../assets/1.mp4'
import Video2 from '../assets/2.mp4'
import Video3 from '../assets/3.mp4'
import Video4 from '../assets/4.mp4'
import Video5 from '../assets/5.mp4'
import Video6 from '../assets/6.mp4'
import Video7 from '../assets/7.mp4'

const Home = () => {

  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-10'>Welcome to the Video Gallery</h1>
      <div className='container grid grid-cols-3 mx-auto gap-5 my-20'>
          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video1}
            className='rounded-3xl'
          />
          

          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video4}
            className='rounded-3xl'
          />
           
           <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video3}
            className='rounded-3xl object-cover h-full row-span-2'
          />

          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video2}
            className='rounded-3xl row-span-2 object-cover h-full'
          />

          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video5}
            className='rounded-3xl'
          />
          
          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video6}
            className='rounded-3xl'
          />
          
          <video
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            loop
            muted
            src={Video7}
            className='rounded-3xl'
          />
        </div>
          
    </>
  );
};

export default Home
