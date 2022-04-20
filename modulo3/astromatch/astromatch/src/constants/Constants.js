import axios from 'axios'


export const getProfile = () => {
	axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person')

	setProfil(response.data.profile)
}

export const chooseProfile = (id, choice) => {
	if(!id) {
		(getProfile())
		return
	}

	axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person', {
		id,
		choice
	})

	(getProfilee())
}

export const getMatches = () => {
	axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches')

	setMatches(response.data.matches)
}

export const clearSwipes = () => {
	axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')

	(getProfile())
}