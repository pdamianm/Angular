
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 6,
    song: 'Californication',
    details: {
        author: 'RHCP',
        year: 1999, 
    }
}

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];
console.error('Personaje 3: ', trunks );