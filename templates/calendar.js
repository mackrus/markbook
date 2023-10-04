document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        height: 600,
        aspectRatio: 2.5,
        // allow for edits by users
        editable: true,

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay' // user can switch between the two
        },

        views: {
            timeGrid: {
                dayHeaderFormat: { weekday: 'short' }
            }
        },



        // set the default event timespan
        slotDuration: '00:15:00',
        snapDuration: '00:15:00',

        // Function for users to add events
        dateClick: function (info) {
            var title = prompt('Enter shift location/employer');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.date,
                    end: info.date,
                });
            }
        },
        // Function for users to edit events
        eventClick: function (info) {
            var newTitle = prompt('Edit shift location', info.event.title);
            if (newTitle) {
                info.event.setProp('title', newTitle);
            }
        },
        // function for users to expand/shorten timespan of events
        eventResize: function (info) {
            var newStart = info.event.start;
            var newEnd = info.event.end;

            info.event.setDates(newStart, newEnd);
        },

        // function for users to drag&drop events
        eventDrop: function (info) {
            var newStart = info.event.start;
            var newEnd = info.event.end;

            info.event.setDates(newEnd, newEnd);
        }
    });
    calendar.render();
});