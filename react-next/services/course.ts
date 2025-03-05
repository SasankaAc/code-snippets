import { CourseFilters } from "@/src/interfaces"
import { apiInstance } from ".."
import { CourseSearchResponse, CourseSearchRequest, CourseDetail, CourseSearchSuggestion } from "@/src/interfaces/course"


async function getCourseFilters(lang?: string): Promise<CourseFilters> {
	try {
		const res = await apiInstance.get<CourseFilters>("/course-filters", {
			params: {lang}
		})
		return res.data
	} catch (error) {
		console.error("Failed to fetch course filters", error)
		throw new Error("Failed to fetch course filters")
		
	}
}

async function getCourses(data: CourseSearchRequest, lang?: string) {
	try{
		const res = await apiInstance.post<CourseSearchResponse>("/courses", data, {
			params: {lang}
		})
		return res.data
	}catch(error) {
		console.error("Failed to fetch courses", error)
		throw new Error("Failed to fetch courses")
	}
}

async function getCourse(courseNumber: string, lang?: string) {
	try{
		const res = await apiInstance.get<CourseDetail>(`/courses/${courseNumber}`, {
			params:  {lang}
		})
		return res.data
	}catch(error) {
		console.error(`Failed to fetch course detail for ${courseNumber}`, error)
		throw new Error(`Failed to fetch course detail for ${courseNumber}`)
	}
}

async function getCourseSearchSuggestions(searchText: string, lang?: string): Promise<CourseSearchSuggestion[]> {
	try {
		const res = await apiInstance.post<CourseSearchSuggestion[]>("/courses/suggestions", {
			searchText: searchText
		},
		{
			params:  {lang}
		}
		)
		return res.data
	} catch (error) {
		console.error("Failed to fetch course search suggestions", error)
		throw new Error("Failed to fetch course search suggestions")

	}
}

export const courseService = {
	getCourseFilters,
	getCourses,
	getCourse,
	getCourseSearchSuggestions
}