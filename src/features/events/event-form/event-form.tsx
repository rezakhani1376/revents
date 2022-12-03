import cuid from 'cuid';
import { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { useAppSelector, useEventAction } from '../../../app/hooks';

interface EventFormProps extends RouteComponentProps {}

export const EventForm: React.FC<EventFormProps> = ({ match, history }) => {
    const selectedEvent = useAppSelector(
        (state) =>
            //@ts-ignore
            state.events.data.find((e) => e.id === match.params.id) as Event
    );

    const { createEvent, updateEvent } = useEventAction();

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };
    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        selectedEvent
            ? updateEvent({ ...selectedEvent, ...values })
            : //@ts-ignore
              createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Bob',
                  attendees: [],
                  hostPhotoURL: './assets/user.png',
              });
        history.push('/events');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <Segment clearing>
            <Header
                content={selectedEvent ? 'Edit the event' : 'Create new event'}
            />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Event title'
                        value={values.title}
                        name='title'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Category'
                        value={values.category}
                        name='category'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Description'
                        value={values.description}
                        name='description'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='City'
                        value={values.city}
                        name='city'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Vanue'
                        value={values.venue}
                        name='venue'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='date'
                        placeholder='Date'
                        value={values.date}
                        name='date'
                        onChange={handleInputChange}
                    />
                </Form.Field>

                <Button
                    type='submit'
                    floated='right'
                    positive
                    content='Submit'
                />
                <Button
                    as={Link}
                    to='/events'
                    type='submit'
                    floated='right'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
};

export default EventForm;
