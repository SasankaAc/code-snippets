"use client"

import { useTranslations } from "@/src/i18n/useTranslations"
import replacePlaceholders from "@/src/util/replacePlaceholders"
import { Grid, MenuItem, Pagination, Select, Stack } from "@mui/material"
import { ceil, get } from "lodash"
import React, { useState } from "react"

export interface AppPaginationProps {
    pageSize: number,
    count: number,
    page: number,
    pageSizeList: number[],
    onPageChange?: (page: number) => void,
    onPageSizeChange?: (value: number) => void
}

export default function AppPagination({
	pageSize,
	page,
	count,
	pageSizeList,
	onPageSizeChange,
	onPageChange
}: AppPaginationProps) {

	const [noOfPages, setNoOfPages] = useState(0)
	const staticTranslations = useTranslations()

	React.useEffect(() => {
		const noOfPages = ceil(count / pageSize)
		setNoOfPages(noOfPages)
	}, [count, pageSize])


	const generateStatus = (page: number, pageSize: number, count: number) => {
		const start = (pageSize * (page - 1)) + 1
		const end = Math.min(pageSize * page, count)
		const status = replacePlaceholders(
			get(staticTranslations, "pagination.count", ""),
			{
				page: count===0 ? 0 : start,
				size: end,
				count: count
			}
		)
		return status
	}

	const pageSizeSelect = () => {
		return (
			<React.Fragment >
				<span>{get(staticTranslations, "pagination.pageSizeShow")}</span>
				<Select
					size="small"
					sx={{ borderRadius: 0, padding: 0 }}
					onChange={(e) => onPageSizeChange?.(e.target.value as number)}
					value={pageSize}
				>
					{pageSizeList.map(i => (
						<MenuItem key={i} value={i}>{i}</MenuItem>
					))}
				</Select>
				<span>{get(staticTranslations, "pagination.pageSizeEntries")}</span>
			</React.Fragment>
		)
	}

	return (
		<Grid container data-testid="app-pagination">
			<Grid item md={4} xs={12} container justifyContent='space-between' alignItems='center'>
				<p>{generateStatus(page, pageSize, count)}</p>
				<Stack direction='row' spacing={1} alignItems='center' justifyContent='flex-end' display={{md: "none"}}>
					{pageSizeSelect()}
				</Stack>
			</Grid>

			<Grid item md={8} xs={12} container justifyContent={{md: "flex-end", sm: "center"}} alignItems='center'>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Stack  direction='row' spacing={1} alignItems='center' justifyContent='flex-end' display={{md: "block", xs: "none"}}>
						{pageSizeSelect()}
					</Stack>
					<Pagination
						count={noOfPages}
						page={page}
						sx={{pt: {xs: 3, md: 0}}}
						color="primary"
						onChange={(e, newPage) => onPageChange?.(newPage)}
						boundaryCount={1}
						siblingCount={1}
						shape="rounded"
					/>
				</Stack>
			</Grid>
		</Grid>
	)
}