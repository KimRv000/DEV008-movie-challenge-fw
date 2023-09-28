/* eslint-disable react/prop-types */
import './moodContainer.css'
import happy from '/src/assets/happy.png'
import sad from '/src/assets/sad.png'
import random from '/src/assets/random.png'

export  function MoodContainerHappy() {
    return <div className='moodContainerHappy' >
        <img
            src={happy}
            alt='happy'
        />
    </div>
}

export  function MoodContainerSad() {
    return <div className='moodContainerSad' >
        <img
            src={sad}
            alt='sad'
        />
    </div>
}

export  function MoodContainerRandom() {
    return <div className='moodContainerRandom' >
        <img
            src={random}
            alt='random'
        />
    </div>
}