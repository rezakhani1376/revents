import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { useEventAction } from '../../../app/hooks';
import EventListAttendee from './event-list-attendee';

interface ListItemProps {
    event: Event;
}
const EventListItem: React.FC<ListItemProps> = ({ event }) => {
    const { deleteEvent } = useEventAction();

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size='tiny'
                            circular
                            src={event.hostPhotoURL}
                        />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Histed by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{' '}
                    {format(event.date, 'MMM d, yyyy h:mm a')}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee) => (
                        <EventListAttendee
                            key={attendee.id}
                            attendee={attendee}
                        />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button
                    onClick={() => {
                        deleteEvent(event.id);
                    }}
                    color='red'
                    floated='right'
                    content='Delete'
                />
                <Button
                    as={Link}
                    to={`/events/${event.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;
