import Image from "next/image"
import meImage from "./me.jpg"
import styles from "./about.module.css"

export default function AboutPage() {
	return <article className={styles.root}>
		<Image src={meImage} alt="Vitalii Ryban" loading="eager" />
		<div >
			John Smith is a seasoned FullStack developer currently employed at Itera
			Ukraine, where he harnesses his nine years of experience to craft
			innovative solutions. Outside the realm of coding, he finds solace in
			the pages of books and the thrill of snowboarding down icy slopes.
			Proficient in C#, JavaScript, TypeScript, React, and Next, John&apos;s
			expertise extends to authorship, having created the popular YouTube
			course &quot;React for Beginners,&quot; empowering learners worldwide to
			delve into the world of web development.
		</div>
	</article>
}