"use client"

import { courseService } from "@/src/service"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getFindCourseFilters = createAsyncThunk(
	"course/getCourseFilters",
	async (lang?: string) => {
		return await courseService.getCourseFilters(lang)
	}
)
