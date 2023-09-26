import { Header, BlackContainer, SelectedMoodContainer, MoodContainer } from './main-page'

export function InterfaceMainPage() {
    return <>
        <Header />
        <BlackContainer>
        </BlackContainer>
        <SelectedMoodContainer color='#E1E1E1' />
        <div style={{
            backgroundColor: '#E1E1E1',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
        }} >
            <MoodContainer color='#F9DB41'>
            </MoodContainer>
            <MoodContainer color='#B5C8FC' />
            <MoodContainer color='#737B88' />
        </div>

    </>
}