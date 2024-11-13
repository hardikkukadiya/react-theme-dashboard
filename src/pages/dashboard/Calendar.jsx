import React, { useEffect, useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const [events, setEvents] = useState([
        { title: 'Event 1', start: new Date(), end: new Date() },
        { title: 'Event 2', start: new Date(2024, 9, 12), end: new Date(2024, 9, 12) },
    ]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
    const [currentEvent, setCurrentEvent] = useState(null);

    const handleDateSelect = (event) => {
        setNewEvent({ title: '', start: event.start, end: event.end });
        setDialogOpen(true);
    };

    const handleEventChange = (e) => {
        setNewEvent({ ...newEvent, title: e.target.value });
    };

    const handleAddEvent = () => {
        setEvents([...events, newEvent]);
        setDialogOpen(false);
        setNewEvent({ title: '', start: new Date(), end: new Date() }); // Reset the newEvent
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

    const handleDeleteEvent = () => {
        setEvents(events.filter((event) => event.title !== currentEvent.title));
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

        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div className='mt-5'>
            <div className='bg-white p-4 rounded-lg '>
                <BigCalendar
                    localizer={localizer}                
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    // style={{ height: 500 }}
                    style={{ height: calendarHeight }}
                    selectable
                    onSelectSlot={handleDateSelect}
                    onSelectEvent={handleEventClick}
                />
            </div>
            <Dialog open={dialogOpen} handler={() => setDialogOpen(false)}>
                <DialogHeader>Add New Event</DialogHeader>
                <DialogBody>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newEvent.title}
                        onChange={handleEventChange}
                        className="border border-gray-300 text-black font-semibold p-2 w-full"
                    />
                </DialogBody>
                <DialogFooter className='flex gap-3'>
                    <Button color="blue" onClick={handleAddEvent}>
                        Add Event
                    </Button>
                    <Button color="red" onClick={() => setDialogOpen(false)}>
                        Cancel
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Edit Event Dialog */}
            <Dialog open={editDialogOpen} handler={() => setEditDialogOpen(false)}>
                <DialogHeader>Edit Event</DialogHeader>
                <DialogBody>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newEvent.title}
                        onChange={handleEventChange}
                        className="border border-gray-300 text-black font-semibold p-2 w-full"
                    />
                </DialogBody>
                <DialogFooter className='flex gap-3'>
                    <Button color="blue" onClick={handleUpdateEvent}>
                        Update Event
                    </Button>
                    <Button color="red" onClick={handleDeleteEvent}>
                        Delete Event
                    </Button>
                    <Button className='bg-gray-500' onClick={() => setEditDialogOpen(false)}>
                        Cancel
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default Calendar;