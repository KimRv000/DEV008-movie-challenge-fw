/* eslint-disable react/prop-types */
import './moodContainer.css'
import happy from '/src/assets/happy.png'
import sad from '/src/assets/sad.png'
import random from '/src/assets/random.png'

export  function MoodContainerHappy(props) {
    return <div className='moodContainerHappy' onClick={props.onClick} >
        <img className='imgMood'
            src={happy}
            alt='happy'
        />
    </div>
}

export  function MoodContainerSad(props) {
    return <div className='moodContainerSad' onClick={props.onClick} >
        <img className='imgMood'
            src={sad}
            alt='sad'
        />
    </div>
}

export  function MoodContainerRandom(props) {
    return <div className='moodContainerRandom' onClick={props.onClick} >
        <img className='imgMood'
            src={random}
            alt='random'
        />
    </div>
}