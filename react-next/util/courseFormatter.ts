import { concat, isEmpty, isString, uniq } from "lodash"
import { Course } from "../interfaces"

export function courseListFormatter(data: Course[]): Course[] {
	const formattedCourses: Course[] = []

	data.forEach(course => {
		let formats: string[] = []
		let languages: string[] = []

		formats = concat(formats, course.formats)
		languages = concat(languages, course.languages)

		if(course.sessionAvailability) {
			course.sessions.forEach(session => {
				if(isString(session.format)) {
					formats.push(session.format)
				}

				if(!isEmpty(session.language)) {
					languages.push(session.language)
				}
			})
		}
		const formattedCourse: Course = {
			...course,
			formats: uniq(formats),
			languages: uniq(languages)

		}
		formattedCourses.push(formattedCourse)
	})

	return formattedCourses
}