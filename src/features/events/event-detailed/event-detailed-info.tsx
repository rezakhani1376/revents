import { format } from 'date-fns';
import { Button, Grid, Icon, Segment } from 'semantic-ui-react';

interface EventDetailedInfoProps {
    event: Event;
}

const EventDetailedInfo: React.FC<EventDetailedInfoProps> = ({ event }) => {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{event.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{format(event.date, 'MMM d, yyyy h:mm a')}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{event.venue}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='teal' size='tiny' content='Show Map' />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    );
};

export default EventDetailedInfo;
