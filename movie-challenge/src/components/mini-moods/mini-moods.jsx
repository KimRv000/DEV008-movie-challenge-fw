/* eslint-disable react/prop-types */
import './moodContainer.css'
import happy from '/src/assets/happy.png'
import sad from '/src/assets/sad.png'
import random from '/src/assets/random.png'

export  function MiniMoodHappy() {
    return <div className='miniMoodContainer'>
        <img
            src={happy}
            alt='happy'
        />
    </div>
}

export  function MiniMoodSad() {
    return <div className='miniMoodContainer'>
        <img
            src={sad}
            alt='sad'
        />
    </div>
}

export  function MiniMoodRandom() {
    return <div className='miniMoodContainer'>
        <img
            src={random}
            alt='random'
        />
    </div>
}