"use client"
import React, { useState } from "react"
import { Link } from "@mui/material"
import styles from "./CourseDetailTopics.module.scss"
import generateKey from "@/src/util/generateKey"

interface CourseDetailTopicsProps {
    topics: string[],
    titleText: string;
    viewMoreText: string;
    viewLessText: string;
}

export default function CourseDetailTopics({ 
	topics,
	titleText,
	viewMoreText,
	viewLessText
}: CourseDetailTopicsProps) {
	const TOPIC_LIMIT = 6 // default viewable topic limit

	const [viewableTopics, setViewableTopics] = useState<number>(TOPIC_LIMIT)
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	// Handle topics toggle event.
	const toggleTopics = () => {
		if (isExpanded) {
			setViewableTopics(TOPIC_LIMIT)
		} else {
			setViewableTopics(topics.length)
		}
		setIsExpanded(!isExpanded)
	}

	// check is topic list expandable
	const isExpandable = () => topics && topics.length > TOPIC_LIMIT

	return (
		<div>
			<h2 className={`appSectionTitle ${styles.appSectionTitle}`}>{titleText}</h2>
			<div>
				<ul>
					{topics.slice(0,viewableTopics).map((topic,index) => (
						<li key={generateKey("topic", index)}>{topic}</li>
					))}
				</ul>
				{
					isExpandable() &&
					<Link onClick={toggleTopics} sx={{cursor: "pointer"}}>
						{isExpanded ? viewLessText : viewMoreText }
					</Link>
				}
			</div>
		</div>
	)
}