import CalendarViewerTemplate from '../components/CalendarViewerTemplate.jsx'
import InformationCard from '../components/InformationCard.jsx'
import NoticeBoard from '../components/NoticeBoard'
import ColorCards from '../components/ColorCards'
import ContentCompletedBox from '../components/ContentCompletedBox.jsx'
import EventsTable from '../components/EventsTable.jsx'
import CardBulkStudents from '../components/CardsBulkStudents'

export default function Home() {
	return (
		<section className="m-auto">
			<div class="mx-auto  sm:px-2 lg:px-3">
				<div className="flex gap-5 flex-wrap">
					<ContentCompletedBox completedPercentage="30%" heading="Assignment Completed" />
				</div>
				<CardBulkStudents />
				<div className="flex flex-wrap mb-5">
					<InformationCard />
					<div className="flex flex-wrap flex-col">
						<CalendarViewerTemplate />
						<NoticeBoard />
					</div>
				</div>
				<ColorCards />
				<EventsTable />
			</div>

		</section>
	)
}
