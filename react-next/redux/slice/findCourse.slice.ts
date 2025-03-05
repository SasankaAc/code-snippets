"use client"

import { CourseFilters, FindCourseState, TopicBrief } from "@/src/interfaces"
import { createSlice } from "@reduxjs/toolkit"
import { getFindCourseFilters } from "../action"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: FindCourseState = {
	search: "",
	selectedFilters: {
		topics: []
	},
	filters: {
		topics: [],
		isLoading: false
	}
}

export {initialState as initialFindCourseState}

export const findCourseSlice = createSlice({
	name: "findCourse",
	initialState,
	reducers: {
		setSearchCourse: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setSelectedTopics: (state, action: PayloadAction<TopicBrief[]>) => {
			state.selectedFilters.topics = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFindCourseFilters.pending, (state) => {
				state.filters.isLoading = true
			})
			.addCase(getFindCourseFilters.fulfilled, (state, action: PayloadAction<CourseFilters>) => {
				const { topics } = action.payload
				state.filters.topics = topics
				state.filters.isLoading = false
			})
			.addCase(getFindCourseFilters.rejected, (state) => {
				state.filters.isLoading = false
			})
	}
})

export const {
	setSearchCourse,
	setSelectedTopics
} = findCourseSlice.actions

export default findCourseSlice.reducer
