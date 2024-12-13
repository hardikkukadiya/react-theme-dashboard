import { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const [events, setEvents] = useState([
        { title: "Event 1", start: new Date(), end: new Date() },
        { title: "Event 2", start: new Date(2024, 9, 12), end: new Date(2024, 9, 12) },
    ]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date() });
    const [currentEvent, setCurrentEvent] = useState(null);

    const handleDateSelect = (event) => {
        setNewEvent({ title: "", start: event.start, end: event.end });
        setDialogOpen(true);
    };

    const handleEventChange = (e) => {
        setNewEvent({ ...newEvent, title: e.target.value });
    };

    const handleAddEvent = () => {
        setEvents([...events, newEvent]);
        setDialogOpen(false);
        setNewEvent({ title: "", start: new Date(), end: new Date() });
    };

    const handleEventClick = (event) => {
        setCurrentEvent(event);
        setNewEvent(event); // Load current event data into the form
        setEditDialogOpen(true);
    };

    const handleUpdateEvent = () => {
        setEvents(events.map((event) => (event.title === currentEvent.title ? newEvent : event)));
        setEditDialogOpen(false);
        setCurrentEvent(null);
    };

    const handleConfirmDelete = () => {
        setEvents(events.filter((event) => event.title !== currentEvent.title));
        setConfirmDialogOpen(false);
        setEditDialogOpen(false);
        setCurrentEvent(null);
    };

    const [calendarHeight, setCalendarHeight] = useState(500);
    useEffect(() => {
        const updateHeight = () => {
            const height = window.innerHeight - 100;
            setCalendarHeight(height);
        };
        updateHeight();

        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div className="mt-5">
            <div className="bg-white p-4 rounded-lg">
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: calendarHeight }}
                    selectable
                    onSelectSlot={handleDateSelect}
                    onSelectEvent={handleEventClick}
                />
            </div>

            {/* Add Event Dialog */}
            {dialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Event</h3>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={handleEventChange}
                            className="border border-gray-300 text-black font-semibold p-2 w-full rounded-md"
                        />
                        <div className="mt-6 flex justify-end space-x-2">
                            <button
                                onClick={handleAddEvent}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Add Event
                            </button>
                            <button
                                onClick={() => setDialogOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Event Dialog */}
            {editDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Event</h3>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={handleEventChange}
                            className="border border-gray-300 text-black font-semibold p-2 w-full rounded-md"
                        />
                        <div className="mt-6 flex justify-end space-x-2">
                            <button
                                onClick={() => setConfirmDialogOpen(true)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Delete
                            </button>
                            <button
                                onClick={handleUpdateEvent}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => setEditDialogOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            {confirmDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to delete this event?</p>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={handleConfirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setConfirmDialogOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
