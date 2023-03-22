import { ScheduleMeeting } from "react-schedule-meeting";
import { fr } from 'date-fns/locale'

const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        9,
        0,
        0,
        0
      )
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        17,
        0,
        0,
        0
      )
    )
  };
});

export default function Calendar() {
  return (
    <div className="text-center">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#DEB887"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        // onStartTimeSelect={console.log}
        lang_emptyListText="Pas de rendez-vous disponible"
        lang_goToNextAvailableDayText="Prochain rendez-vous disponible"
        lang_noFutureTimesText="Pas de dates futures disponible pour le moment"
        format_nextFutureStartTimeAvailableFormatString="cccc d LLLL"
        format_selectedDateDayTitleFormatString="cccc d LLLL "
        format_selectedDateMonthTitleFormatString="LLLL yyyy"
        format_startTimeFormatString="HH:mm"
        locale={fr}
      />
    </div>
  );
}
