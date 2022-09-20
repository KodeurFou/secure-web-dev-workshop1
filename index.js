// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	let memoire = new Set()
	for (let location=0; location<filmingLocations.length; location++){
		memoire.add(filmingLocations[location].fields.adresse_lieu)
	}

	return memoire.size
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	const tri = filmingLocations.sort(function(a,b){return new Date(a.fields.date_debut) - Date(b.fields.date_debut)})
	return tri[0]
}
console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {

	let count = 0
	for (let location=0; location<filmingLocations.length; location++){
		if(filmingLocations[location].fields.annee_tournage == 2020){
			count ++
		}
	}

	return count
}
console.log(`There is ${getFilmingLocationsNumber2020()} filming locations in 2020`)

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {

	let locationPerYear = {}

	for (let location=0; location<filmingLocations.length; location++){

		if(locationPerYear[filmingLocations[location].fields.annee_tournage] === undefined){
			locationPerYear[filmingLocations[location].fields.annee_tournage] = 0
		}

		locationPerYear[filmingLocations[location].fields.annee_tournage] += 1
	}

	return locationPerYear
}
console.log(getFilmingLocationsNumberPerYear () )

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {

	let locationPerDistrict = {}

	for (let location=0; location<filmingLocations.length; location++){

		if(locationPerDistrict[filmingLocations[location].fields.ardt_lieu] === undefined){
			locationPerDistrict[filmingLocations[location].fields.ardt_lieu] = 0
		}

		locationPerDistrict[filmingLocations[location].fields.ardt_lieu] += 1
	}

	return locationPerDistrict

}
console.log(getFilmingLocationsNumberPerDistrict ())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {

	let locationPerFilm = {}

	for (let location=0; location<filmingLocations.length; location++){

		if(locationPerFilm[filmingLocations[location].fields.nom_tournage] === undefined){
			locationPerFilm[filmingLocations[location].fields.nom_tournage] = 0
		}


		locationPerFilm[filmingLocations[location].fields.nom_tournage] += 1
	}

	let res = []
	for (let key in locationPerFilm){
		let intermediaire = {film : key, location : locationPerFilm[key]}
		res.push(intermediaire)
	}

	let sortie = res.sort(function(a,b){return b.location - a.location})


	return sortie
}
console.log(getFilmLocationsByFilm ())

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	let test = getFilmLocationsByFilm ()

	return test.length
}
console.log(getNumberOfFilms())

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {

	let locationLRDM = []

	for (let location=0; location<filmingLocations.length; location++){

		if(filmingLocations[location].fields.nom_tournage === "LRDM - Patriot season 2"){
			locationLRDM.push(filmingLocations[location].fields.adresse_lieu)
		}
	}

	return locationLRDM
}

console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	let res = {}
	console.log(favoriteFilmsNames)

	for (let element of favoriteFilmsNames){
		let intermediaire = []
		for (let location=0; location<filmingLocations.length; location++){

			if(filmingLocations[location].fields.nom_tournage === element){
				intermediaire.push(filmingLocations[location].fields.ardt_lieu)
			}
		}

		res[element] = intermediaire
		intermediaire = []
	}
	return res
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

console.log(getFavoriteFilmsLocations(favoriteFilms))

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {

	let res = {}

	for (let element of favoriteFilmsNames){
		let intermediaire = []
		for (let location=0; location<filmingLocations.length; location++){

			if(filmingLocations[location].fields.nom_tournage === element){
				intermediaire.push(filmingLocations[location].fields.adresse_lieu)
			}
		}

		res[element] = intermediaire
		intermediaire = []
	}
	return res
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
